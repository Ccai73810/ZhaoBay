export interface TimelineScene {
  id: number;
  name: string;
  start: number;
  end: number;
  duration: number;
}

export const TOTAL_DURATION = 180;

export const scenes: TimelineScene[] = [
  { id: 0, name: "问题开场", start: 0, end: 15, duration: 15 },
  { id: 1, name: "品牌出现", start: 15, end: 30, duration: 15 },
  { id: 2, name: "智能体人设", start: 30, end: 50, duration: 20 },
  { id: 3, name: "服务流程", start: 50, end: 72, duration: 22 },
  { id: 4, name: "Dashboard", start: 72, end: 98, duration: 26 },
  { id: 5, name: "支出管理", start: 98, end: 120, duration: 22 },
  { id: 6, name: "教育金规划", start: 120, end: 140, duration: 20 },
  { id: 7, name: "AI顾问", start: 140, end: 153, duration: 13 },
  { id: 8, name: "成长账本", start: 153, end: 162, duration: 9 },
  { id: 9, name: "AI不可替代性", start: 162, end: 170, duration: 8 },
  { id: 10, name: "品牌收束", start: 170, end: 180, duration: 10 },
];

export function getSceneAtTime(time: number): TimelineScene | null {
  return scenes.find((s) => time >= s.start && time < s.end) || null;
}

export function getSceneProgress(time: number, scene: TimelineScene): number {
  return Math.min(1, Math.max(0, (time - scene.start) / scene.duration));
}

export function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}
