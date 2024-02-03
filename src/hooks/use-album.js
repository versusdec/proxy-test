import { useCallback, useEffect, useState } from "react";
import { api } from "../api";

export const useAlbum = (id) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)
  
  const get = useCallback(async () => {
    const {result, error} = await api.albums.get(id)
    if (error) setError(error)
    else setData(result)
  }, [id])
  
  useEffect(() => {
    get()
  }, [id, get])
  
  return {data, error}
}