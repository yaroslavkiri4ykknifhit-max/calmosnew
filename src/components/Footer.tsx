import React from 'react';
import { Brain, Heart } from 'lucide-react';
export default function Footer() {
  return (<footer className="relative z-10 border-t border-white/5 py-8 px-4"><div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4"><div className="flex items-center gap-2 text-surface-500"><Brain className="w-4 h-4" /><span className="text-sm">CalmOS © {new Date().getFullYear()}</span></div><div className="flex items-center gap-1 text-surface-500 text-sm"><span>Built with</span><Heart className="w-3.5 h-3.5 text-danger-400 fill-danger-400" /><span>for your mental health</span></div></div></footer>);
}
