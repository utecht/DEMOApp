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
      return getConditions(aoe.id);
    })
    .then((conditions) => {
      if(aoe === undefined){
        return undefined;
      }
      aoe.conditions_treated = conditions;
      return getTreatments(aoe.id);
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
      join descriptions where relations."to" = descriptions.id
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
      join descriptions where relations."to" = descriptions.id
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
      name: "uamsDB",
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
};
