import SQLite from "react-native-sqlite-storage";
import { AppState, AppStateStatus } from "react-native";

let databaseInstance;

async function getAOE(uid) {
  let aoe = {};
  return getDatabase()
    .then((db) => db.executeSql(`select * from attributes where atype = 'expertise' and id = ?;`, [uid]))
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
      return getAttributeRelations(aoe.id, 'condition');
    })
    .then((conditions) => {
      if(aoe === undefined){
        return undefined;
      }
      aoe.conditions_treated = conditions;
      return getAttributeRelations(aoe.id, 'location');
    })
    .then((locations) => {
      if(aoe === undefined){
        return undefined;
      }
      aoe.locations = locations;
      return getAttributeRelations(aoe.id, 'treatment');
    })
    .then((treatments) => {
      if(aoe === undefined){
        return undefined;
      }
      aoe.treatments = treatments;
      return aoe;
    });
}

async function getAttributeRelations(id, atype) {
  return getDatabase()
    .then((db) => db.executeSql(`select name, id
      from attributes
      join attribute_relations on right_id = attributes.id
      where atype = ?
        and left_id = ?`, [atype, id]))
    .then(([results]) => {
      if(results === undefined){
        return [];
      }
      let attributes = [];
      for(let i = 0; i < results.rows.length; i++){
        attributes.push(results.rows.item(i));
      }
      return attributes;
    });
}

async function getConditions(id) {
  return getDatabase()
    .then((db) => db.executeSql(`select name, id
      from attributes
      join provider_attributes on provider_attributes.attribute_id = attributes.id
      where atype = "condition"
        and provider_id = ?`, [id]))
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
    .then((db) => db.executeSql(`select name, id
      from attributes
      join provider_attributes on provider_attributes.attribute_id = attributes.id
      where atype = "treatment"
        and provider_id = ?`, [id]))
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
    .then((db) => db.executeSql(`select id, full_name, title, photo from providers where full_name like ? order by full_name;`, [likeClause]))
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
  let filterValue = filter[0]['value'];
  return getDatabase()
    .then((db) => db.executeSql(`select
        providers.id, providers.full_name, title, photo
      FROM providers
      JOIN provider_attributes on
        provider_attributes.provider_id = providers.id
      JOIN attributes on
        provider_attributes.attribute_id = attributes.id
      WHERE attributes.id = ?
        AND providers.full_name like ?
      ORDER BY providers.full_name;`, [filterValue, likeClause]))
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
                                   full_name, title, photo, bio,
                                   name as description_name, atype as type, attributes.id as uid
                                 from providers
                                JOIN provider_attributes on
                                  provider_attributes.provider_id = providers.id
                                JOIN attributes on
                                  provider_attributes.attribute_id = attributes.id
                                 where providers.id = ?;`, [provider_id]))
    .then(([results]) => {
      if(results.rows.length === 0){
        return undefined;
      }
      let provider = results.rows.item(0);
      provider.conditions = [];
      provider.languages = [];
      provider.treatments = [];
      provider.expertises = [];
      provider.locations = [];
      provider.patient_types = [];
      for(let i = 0; i < results.rows.length; i++){
        let row = results.rows.item(i);
        if(row.type === 'condition'){
          provider.conditions.push({name: row.description_name, link: row.uid})
        }
        if(row.type === 'location'){
          provider.locations.push({name: row.description_name, link: row.uid})
        }
        if(row.type === 'patient_types'){
          provider.patient_types.push({name: row.description_name, link: row.uid})
        }
        if(row.type === 'language'){
          provider.languages.push({name: row.description_name, link: row.uid})
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
    .then((db) => db.executeSql(`select * from attributes where id = ?;`, [uid]))
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

async function getAttributeFromLink(link) {
  return getDatabase()
    .then((db) => db.executeSql(`select * from attributes where link = ?;`, [link]))
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
      name: "uamsDBv2",
      location: 'default',
      createFromLocation: '~www/uamsDBv2',

      //createFromLocation: 1
  });
  console.log('[db] database open');

  databaseInstance = db;
  return db;
}

async function update(){
  if(databaseInstance === undefined){
    console.log('[db] not opened, unable to update.')
    return;
  }
  // call fetch here

  // process all update statements
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
  getAttributeFromLink,
  filterProviders
};
