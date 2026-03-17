import React from 'react';
import { LucideIcon } from 'lucide-react';
interface Props{title:string;value:number|string;icon:LucideIcon;color:string;suffix?:string;maxValue?:number;}
export default function MetricCard({title,value,icon:Icon,color,suffix,maxValue}:Props){
  const colors:Record<string,{text:string;bg:string;bar:string}>={calm:{text:'text-calm-400',bg:'bg-calm-500/10',bar:'bg-calm-500'},zen:{text:'text-zen-400',bg:'bg-zen-500/10',bar:'bg-zen-500'},stress:{text:'text-stress-400',bg:'bg-stress-500/10',bar:'bg-stress-500'},purple:{text:'text-purple-400',bg:'bg-purple-500/10',bar:'bg-purple-500'}};
  const c=colors[color]||colors.calm;const nv=typeof value==='number'?value:parseFloat(value as string);const bw=maxValue?Math.min(100,(nv/maxValue)*100):0;
  return(<div className="glass-card-hover group"><div className="flex items-start justify-between mb-4"><div className={`p-2.5 rounded-xl ${c.bg}`}><Icon className={`w-5 h-5 ${c.text}`}/></div></div><div className="mb-1"><span className="text-3xl font-bold text-white">{typeof value==='number'?value.toFixed(1):value}</span>{suffix&&<span className="text-sm text-surface-400 ml-1">{suffix}</span>}</div><p className="text-sm text-surface-400 mb-3">{title}</p>{maxValue&&maxValue>0&&<div className="h-1.5 bg-white/5 rounded-full overflow-hidden"><div className={`h-full rounded-full ${c.bar} transition-all duration-1000`} style={{width:`${bw}%`}}/></div>}</div>);
}
