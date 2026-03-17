import React from 'react';
interface Props{score:number;size?:'sm'|'md'|'lg';}
export default function CalmScoreGauge({score,size='md'}:Props){
  const sizes={sm:{o:100,s:8,f:'text-2xl',l:'text-xs'},md:{o:160,s:10,f:'text-4xl',l:'text-sm'},lg:{o:220,s:12,f:'text-5xl',l:'text-base'}};
  const z=sizes[size];const r=(z.o-z.s)/2;const c=r*2*Math.PI;const n=Math.max(0,Math.min(10,score));const p=(n/10)*c;
  const cl=n>=7?{s:'#22c55e',g:'rgba(34,197,94,0.3)',t:'text-zen-400'}:n>=4?{s:'#fb923c',g:'rgba(251,146,60,0.3)',t:'text-stress-400'}:{s:'#ef4444',g:'rgba(239,68,68,0.3)',t:'text-danger-400'};
  return(<div className="relative inline-flex items-center justify-center"><svg width={z.o} height={z.o} className="transform -rotate-90"><circle cx={z.o/2} cy={z.o/2} r={r} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth={z.s}/><circle cx={z.o/2} cy={z.o/2} r={r} fill="none" stroke={cl.s} strokeWidth={z.s} strokeLinecap="round" strokeDasharray={c} strokeDashoffset={c-p} style={{filter:`drop-shadow(0 0 8px ${cl.g})`,transition:'stroke-dashoffset 1s ease-out'}}/></svg><div className="absolute inset-0 flex flex-col items-center justify-center"><span className={`${z.f} font-bold ${cl.t}`}>{n.toFixed(1)}</span><span className={`${z.l} text-surface-400 mt-1`}>Calm Score</span></div></div>);
}
