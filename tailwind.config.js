/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        calm: {50:'#f0f7ff',100:'#e0effe',200:'#bae0fd',300:'#7cc8fb',400:'#36adf6',500:'#0c93e7',600:'#0074c5',700:'#015da0',800:'#064f84',900:'#0b426e',950:'#072a49'},
        zen: {50:'#f0fdf6',100:'#dcfce9',200:'#bbf7d4',300:'#86efb0',400:'#4ade83',500:'#22c55e',600:'#16a34b',700:'#15803d',800:'#166534',900:'#14532d',950:'#052e16'},
        stress: {50:'#fff7ed',100:'#ffedd5',200:'#fed7aa',300:'#fdba74',400:'#fb923c',500:'#f97316',600:'#ea580c',700:'#c2410c',800:'#9a3412',900:'#7c2d12',950:'#431407'},
        danger: {50:'#fef2f2',100:'#fee2e2',200:'#fecaca',300:'#fca5a5',400:'#f87171',500:'#ef4444',600:'#dc2626',700:'#b91c1c',800:'#991b1b',900:'#7f1d1d',950:'#450a0a'},
        surface: {50:'#f8fafc',100:'#f1f5f9',200:'#e2e8f0',300:'#cbd5e1',400:'#94a3b8',500:'#64748b',600:'#475569',700:'#334155',800:'#1e293b',900:'#0f172a',950:'#020617'}
      },
      fontFamily: {sans:['Inter','system-ui','sans-serif']},
      animation: {'float':'float 6s ease-in-out infinite','pulse-slow':'pulse 4s cubic-bezier(0.4,0,0.6,1) infinite','slide-up':'slideUp 0.5s ease-out','slide-down':'slideDown 0.5s ease-out','fade-in':'fadeIn 0.5s ease-out','scale-in':'scaleIn 0.3s ease-out'},
      keyframes: {float:{'0%,100%':{transform:'translateY(0)'},'50%':{transform:'translateY(-20px)'}},slideUp:{'0%':{transform:'translateY(20px)',opacity:0},'100%':{transform:'translateY(0)',opacity:1}},slideDown:{'0%':{transform:'translateY(-20px)',opacity:0},'100%':{transform:'translateY(0)',opacity:1}},fadeIn:{'0%':{opacity:0},'100%':{opacity:1}},scaleIn:{'0%':{transform:'scale(0.9)',opacity:0},'100%':{transform:'scale(1)',opacity:1}}}
    }
  },
  plugins: []
}
