import { motion } from "framer-motion";
import { TOTAL_DURATION } from "../data/timeline";

interface ProgressBarProps {
  currentTime: number;
}

export function ProgressBar({ currentTime }: ProgressBarProps) {
  const progress = Math.min(1, Math.max(0, currentTime / TOTAL_DURATION));

  return (
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#172033]/10 z-50">
      <motion.div
        className="h-full"
        style={{
          background: "linear-gradient(90deg, #FF8C69, #4ECDC4)",
          width: `${progress * 100}%`,
        }}
        transition={{ duration: 0.1 }}
      />
    </div>
  );
}
