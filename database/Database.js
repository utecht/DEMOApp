import SQLite from "react-native-sqlite-storage";
import { AppState, AppStateStatus } from "react-native";

let databaseInstance;

async function getAOE(uid) {
  let aoe = {};
  return getDatabase()
    .then((db) => db.executeSql(`select * from descriptions where type = 'expertise' and uid = ?;`, [uid]))
    .then(([results]) => {
      if(results === undefined || results.rows.length === 0){
        aoe = undefined;
        return undefined;
      }
      if(results.rows.length !== 1){
        aoe = undefined;
        throw new Error("[db] incorrect number of AOEs");
      }
      aoe = results.rows.item(0);
      return getConditions(aoe.description_id);
    })
    .then((conditions) => {
      if(aoe === undefined){
        return undefined;
      }
      aoe.conditions_treated = conditions;
      return getTreatments(aoe.description_id);
    })
    .then((treatments) => {
      if(aoe === undefined){
        return undefined;
      }
      aoe.treatments = treatments;
      return aoe;
    });
}

async function getConditions(id) {
  return getDatabase()
    .then((db) => db.executeSql(`select name, uid as link
      from relations
      join descriptions where relations."to" = descriptions.description_id
      and type = "condition"
      and relations."from" = ?`, [id]))
    .then(([results]) => {
      if(results === undefined){
        return [];
      }
      let conditions = [];
      for(let i = 0; i < results.rows.length; i++){
        conditions.push(results.rows.item(i));
      }
      return conditions;
    });
}

async function getTreatments(id) {
  return getDatabase()
    .then((db) => db.executeSql(`select name, uid as link
      from relations
      join descriptions where relations."to" = descriptions.description_id
      and type = "treatment"
      and relations."from" = ?`, [id]))
    .then(([results]) => {
      if(results === undefined){
        return [];
      }
      let conditions = [];
      for(let i = 0; i < results.rows.length; i++){
        conditions.push(results.rows.item(i));
      }
      return conditions;
    });
}

async function getProviders(searchString) {
  let likeClause = '%' + searchString + '%';
  return getDatabase()
    .then((db) => db.executeSql(`select provider_id, name, subtitle, picture from providers where name like ? order by name;`, [likeClause]))
    .then(([results]) => {
      let ret = [];
      for(let i = 0; i < results.rows.length; i++){
        ret.push(results.rows.item(i));
      }
      return ret;
    })
}

async function filterProviders(searchString, filter) {
  let likeClause = '%' + searchString + '%';
  console.log(filter);
  let filterValue = filter[0]['value'];
  console.log(filterValue);
  return getDatabase()
    .then((db) => db.executeSql(`select
        providers.provider_id, providers.name, subtitle, picture
      FROM providers
      JOIN provider_descriptions on
        providers.provider_id = provider_descriptions.provider_id
      JOIN descriptions on
        provider_descriptions.description_id = descriptions.description_id
      WHERE descriptions.uid = ?
        AND providers.name like ?
      ORDER BY providers.name;`, [filterValue, likeClause]))
    .then(([results]) => {
      let ret = [];
      for(let i = 0; i < results.rows.length; i++){
        ret.push(results.rows.item(i));
      }
      return ret;
    })
}

async function getProvider(provider_id) {
  return getDatabase()
    .then((db) => db.executeSql(`select
                                   providers.name, subtitle, picture, about,
                                   descriptions.name as description_name, type, descriptions.uid
                                 from providers
                                 left join provider_descriptions on
                                   providers.provider_id = provider_descriptions.provider_id
                                 left join descriptions on
                                   provider_descriptions.description_id = descriptions.description_id
                                 where providers.provider_id = ?;`, [provider_id]))
    .then(([results]) => {
      if(results.rows.length === 0){
        return undefined;
      }
      let provider = results.rows.item(0);
      provider.conditions = [];
      provider.languages = [];
      provider.treatments = [];
      provider.expertises = [];
      for(let i = 0; i < results.rows.length; i++){
        let row = results.rows.item(i);
        if(row.type === 'condition'){
          provider.conditions.push({name: row.description_name, link: row.uid})
        }
        if(row.type === 'language'){
          provider.languages.push(row.description_name)
        }
        if(row.type === 'expertise'){
          provider.expertises.push({name: row.description_name, link: row.uid})
        }
        if(row.type === 'treatment'){
          provider.treatments.push({name: row.description_name, link: row.uid})
        }
      }
      return provider;
    })
}

async function getDescription(uid) {
  return getDatabase()
    .then((db) => db.executeSql(`select * from descriptions where uid = ?;`, [uid]))
    .then(([results]) => {
      if(results === undefined || results.rows.length === 0){
        return undefined;
      }
      if(results.rows.length !== 1){
        throw new Error("[db] incorrect number of AOEs");
      }
      return results.rows.item(0);
    });
}

async function getDatabase(){
  if(databaseInstance !== undefined){
    return Promise.resolve(databaseInstance);
  }
  return open();
}

async function open(){
  SQLite.DEBUG(true);
  SQLite.enablePromise(true);

  if(databaseInstance){
    console.log('[db] db already open, returning instance');
    return databaseInstance;
  }

  const db = await SQLite.openDatabase({
      name: "uamsDBv1",
      createFromLocation: 1
  });
  console.log('[db] database open');

  databaseInstance = db;
  return db;
}

async function close(){
  if(databaseInstance === undefined){
    console.log('[db] already closed no need to close again');
    return;
  }

  const status = await databaseInstance.close();
  console.log('[db] db closed');
  databaseInstance = undefined;
}

let appState = "active";
console.log('[db] adding appstate listener');
AppState.addEventListener("change", handleAppStateChange);

function handleAppStateChange(nextAppState){
  if(appState === "active" && nextAppState.match(/inactive|background/)){
    console.log("[db] app going to background - closing db");
    close();
  }
  appState = nextAppState;
}

export const sqliteDatabase = {
  getAOE,
  getDescription,
  getProviders,
  getProvider,
  filterProviders
};
