import { create } from 'zustand'
export const useAppStore = create(()=>({ user:null, setUser:(user:any)=>({user}) }))
