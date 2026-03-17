import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { MetricsProvider } from './context/MetricsContext';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Landing from './pages/Landing';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import DailyEntry from './pages/DailyEntry';
import DailyReport from './pages/DailyReport';
import History from './pages/History';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
export default function App(){return(<BrowserRouter><AuthProvider><MetricsProvider><Toaster position="top-right" toastOptions={{duration:3000,style:{background:'rgba(15,23,42,0.9)',color:'#fff',border:'1px solid rgba(255,255,255,0.1)',backdropFilter:'blur(12px)',borderRadius:'12px'},success:{iconTheme:{primary:'#22c55e',secondary:'#fff'}},error:{iconTheme:{primary:'#ef4444',secondary:'#fff'}}}}/><Routes><Route element={<Layout/>}><Route path="/" element={<Landing/>}/><Route path="/login" element={<Login/>}/><Route path="/signup" element={<SignUp/>}/><Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/><Route path="/entry" element={<ProtectedRoute><DailyEntry/></ProtectedRoute>}/><Route path="/report/:date" element={<ProtectedRoute><DailyReport/></ProtectedRoute>}/><Route path="/history" element={<ProtectedRoute><History/></ProtectedRoute>}/><Route path="/settings" element={<ProtectedRoute><Settings/></ProtectedRoute>}/><Route path="*" element={<NotFound/>}/></Route></Routes></MetricsProvider></AuthProvider></BrowserRouter>);}
