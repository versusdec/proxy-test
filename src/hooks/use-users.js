import { useCallback, useEffect, useState } from "react";
import { api } from "../api";

export const useUsers = (params) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)
  
  const get = useCallback(async () => {
    const {result, error} = await api.users.list(params)
    if (error) setError(error)
    else setData(result)
  }, [params])
  
  useEffect(() => {
    get()
  }, [params, get])
  
  return {data, error}
}