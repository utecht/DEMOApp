import { useState, useEffect } from "react";
import { useDatabase } from "../database/DatabaseContext";

export function useAttribute(uid) {
  const [attribute, setAttribute] = useState(undefined);
  const database = useDatabase();

  useEffect(() => {
    refreshAttribute(uid);
  }, [uid]);

  function refreshAttribute(uid){
    let is_number = parseInt(uid) == uid;
    if(is_number){
      return database.getDescription(uid).then(setAttribute);
    } else {
      return database.getAttributeFromLink(uid).then(setAttribute);
    }
  }

  return {
    attribute
  };
}
