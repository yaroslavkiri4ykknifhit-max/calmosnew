import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import { useAuth } from '../context/AuthContext';
export default function Layout() { const{user}=useAuth(); return (<div className="min-h-screen bg-surface-950 noise-bg mesh-gradient"><Navbar /><main className="relative z-10"><Outlet /></main>{user&&<Footer />}</div>); }
