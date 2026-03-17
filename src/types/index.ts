export interface Metric { id:string; user_id:string; date:string; sleep_hours:number; stress_level:number; energy_level:number; focus_level:number; calm_score:number; burnout_risk:string; notes:string|null; created_at:string; }
export interface MetricInput { date:string; sleep_hours:number; stress_level:number; energy_level:number; focus_level:number; notes?:string; }
export interface User { id:string; email:string; }
export interface DashboardStats { avgCalmScore:number; avgStress:number; avgEnergy:number; avgFocus:number; avgSleep:number; totalEntries:number; currentStreak:number; burnoutRisk:string; }
export type BurnoutRisk = 'low'|'moderate'|'high'|'critical';
export type TimeRange = '7d'|'14d'|'30d'|'90d'|'all';
