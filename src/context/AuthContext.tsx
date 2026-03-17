import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User } from '../types';
interface AuthContextType { user:User|null; loading:boolean; isDemo:boolean; login:(e:string,p:string)=>Promise<void>; signUp:(e:string,p:string)=>Promise<void>; logout:()=>Promise<void>; }
const AuthContext = createContext<AuthContextType|undefined>(undefined);
export function AuthProvider({ children }:{children:ReactNode}) {
  const [user,setUser] = useState<User|null>(null);
  const [loading,setLoading] = useState(true);
  useEffect(() => { const s=localStorage.getItem('calmos_user'); if(s) setUser(JSON.parse(s)); setLoading(false); }, []);
  const login = async (email:string,_p:string) => { setLoading(true); await new Promise(r=>setTimeout(r,800)); const u:User={id:'demo-'+Date.now(),email}; setUser(u); localStorage.setItem('calmos_user',JSON.stringify(u)); setLoading(false); };
  const signUp = async (email:string,_p:string) => { setLoading(true); await new Promise(r=>setTimeout(r,800)); const u:User={id:'demo-'+Date.now(),email}; setUser(u); localStorage.setItem('calmos_user',JSON.stringify(u)); setLoading(false); };
  const logout = async () => { setUser(null); localStorage.removeItem('calmos_user'); localStorage.removeItem('calmos_metrics'); };
  return <AuthContext.Provider value={{user,loading,login,signUp,logout,isDemo:true}}>{children}</AuthContext.Provider>;
}
export function useAuth() { const c=useContext(AuthContext); if(!c) throw new Error('useAuth must be within AuthProvider'); return c; }
