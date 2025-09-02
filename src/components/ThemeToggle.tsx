
import { useEffect, useState } from 'react'
export function ThemeToggle(){
  const [mounted,setMounted]=useState(false); useEffect(()=>setMounted(true),[]);
  useEffect(()=>{ const s=localStorage.getItem('theme'); const prefers=window.matchMedia('(prefers-color-scheme: dark)').matches; const t=s??(prefers?'dark':'light'); document.documentElement.classList.toggle('dark',t==='dark')},[]);
  if(!mounted) return null;
  const toggle=()=>{ const isDark=document.documentElement.classList.toggle('dark'); localStorage.setItem('theme',isDark?'dark':'light')}
  return (<button className="btn" onClick={toggle} aria-label="Cambiar tema"><span aria-hidden>🌓</span><span className="hidden md:inline">Tema</span></button>)
}
