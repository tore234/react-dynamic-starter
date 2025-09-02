
import { useEffect, useState } from 'react'
import axios, { AxiosRequestConfig } from 'axios'
export function useFetch<T=unknown>(url?:string,config?:AxiosRequestConfig){
  const [data,setData]=useState<T|null>(null); const [loading,setLoading]=useState(false); const [error,setError]=useState<unknown>(null);
  useEffect(()=>{ if(!url) return; setLoading(true); axios<T>(url,{...config}).then(r=>setData(r.data)).catch(setError).finally(()=>setLoading(false)) },[url])
  return {data,loading,error}
}
