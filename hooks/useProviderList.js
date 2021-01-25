import { useState, useEffect } from "react";
import { useDatabase } from "../database/DatabaseContext";

export function useProviderList(searchString, filters) {
  const [providers, setProviders] = useState([]);
  const database = useDatabase();

  useEffect(() => {
    refreshProviders(searchString, filters);
  }, [searchString, filters]);

  function refreshProviders(searchString, filters){
    if(filters.length == 1){
      return database.filterProviders(searchString, filters).then(setProviders);
    } else {
      return database.getProviders(searchString).then(setProviders);
    }
  }

  return {
    providers
  };
}
