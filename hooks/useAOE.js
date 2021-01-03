import { useState, useEffect } from "react";
import { useDatabase } from "../database/DatabaseContext";

export function useAOE(uid) {
  const [aoe, setAOE] = useState(undefined);
  const database = useDatabase();

  useEffect(() => {
    refreshAOE(uid);
  }, [uid]);

  function refreshAOE(uid){
    return database.getAOE(uid).then(setAOE);
  }

  return {
    aoe
  };
}
