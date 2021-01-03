import { useState, useEffect } from "react";
import { useDatabase } from "../database/DatabaseContext";

export function useDescription(uid) {
  const [description, setDescription] = useState(undefined);
  const database = useDatabase();

  useEffect(() => {
    refreshDescription(uid);
  }, [uid]);

  function refreshDescription(uid){
    return database.getDescription(uid).then(setDescription);
  }

  return {
    description
  };
}
