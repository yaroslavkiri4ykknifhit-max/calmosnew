import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Metric } from '../types';
import { format, parseISO } from 'date-fns';
import { Calendar, ChevronRight } from 'lucide-react';
import BurnoutIndicator from './BurnoutIndicator';
interface Props{entries:Metric[];limit?:number;}
export default function RecentEntries({entries,limit=5}:Props){const nav=useNavigate();const recent=[...entries].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,limit);return(<div className="space-y-2">{recent.map(e=>(<button key={e.id} onClick={()=>nav(`/report/${e.date}`)} className="w-full flex items-center gap-4 p-4 glass rounded-xl hover:bg-white/10 transition-all group text-left"><div className="p-2 bg-calm-500/10 rounded-lg"><Calendar className="w-4 h-4 text-calm-400"/></div><div className="flex-1 min-w-0"><p className="text-sm font-medium text-white">{format(parseISO(e.date),'EEEE, MMM dd')}</p><p className="text-xs text-surface-400 mt-0.5">Score: {e.calm_score.toFixed(1)}</p></div><BurnoutIndicator risk={e.burnout_risk} compact/><ChevronRight className="w-4 h-4 text-surface-500 group-hover:text-calm-400"/></button>))}{recent.length===0&&<div className="text-center py-8 text-surface-400">No entries yet.</div>}</div>);}
