import { useState, useEffect } from "react";
import { useDatabase } from "../database/DatabaseContext";

export function useProviderDetails(provider_id) {
  const [provider, setProvider] = useState(undefined);
  const database = useDatabase();

  useEffect(() => {
    refreshProvider(provider_id);
  }, [provider_id]);

  function refreshProvider(provider_id){
    return database.getProvider(provider_id).then(setProvider);
  }

  return {
    provider
  };
}
