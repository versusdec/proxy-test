import { useCallback, useEffect, useState } from "react";
import { api } from "../api";

export const usePost = (id) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)
  
  const get = useCallback(async () => {
    const {result, error} = await api.posts.get(id)
    if (error) setError(error)
    else setData(result)
  }, [id])
  
  useEffect(() => {
    get()
  }, [id, get])
  
  return {data, error}
}