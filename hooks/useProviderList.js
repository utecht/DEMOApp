import { useState, useEffect } from "react";
import { useDatabase } from "../database/DatabaseContext";

export function useProviderList() {
  const [providers, setProviders] = useState([]);
  const database = useDatabase();

  useEffect(() => {
    refreshProviders();
  }, []);

  function refreshProviders(){
    return database.getProviders().then(setProviders);
  }

  return {
    providers
  };
}
