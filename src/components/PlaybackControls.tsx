import { motion } from "framer-motion";
import { Play, Pause, RotateCcw, Eye, EyeOff } from "lucide-react";
import { formatTime, TOTAL_DURATION } from "../data/timeline";

interface PlaybackControlsProps {
  isPlaying: boolean;
  currentTime: number;
  onPlay: () => void;
  onPause: () => void;
  onReplay: () => void;
  showControls: boolean;
  onToggleControls: () => void;
}

export function PlaybackControls({
  isPlaying,
  currentTime,
  onPlay,
  onPause,
  onReplay,
  showControls,
  onToggleControls,
}: PlaybackControlsProps) {
  if (!showControls) {
    return (
      <motion.button
        className="absolute top-6 right-6 z-50 w-10 h-10 rounded-full bg-[#172033]/20 backdrop-blur-md flex items-center justify-center text-white/60 hover:text-white hover:bg-[#172033]/40 transition-colors"
        onClick={onToggleControls}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Eye size={18} />
      </motion.button>
    );
  }

  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex items-center gap-4 px-6 py-3 rounded-full"
      style={{
        background: "rgba(18, 24, 38, 0.6)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={onReplay}
        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-colors"
      >
        <RotateCcw size={18} />
      </button>

      {isPlaying ? (
        <button
          onClick={onPause}
          className="w-12 h-12 rounded-full bg-[#FF8C69] flex items-center justify-center text-white hover:bg-[#ff7a52] transition-colors shadow-lg shadow-[#FF8C69]/30"
        >
          <Pause size={20} />
        </button>
      ) : (
        <button
          onClick={onPlay}
          className="w-12 h-12 rounded-full bg-[#4ECDC4] flex items-center justify-center text-white hover:bg-[#3dbdb5] transition-colors shadow-lg shadow-[#4ECDC4]/30"
        >
          <Play size={20} className="ml-0.5" />
        </button>
      )}

      <div className="text-white/80 text-sm font-medium tabular-nums min-w-[80px] text-center">
        {formatTime(currentTime)} / {formatTime(TOTAL_DURATION)}
      </div>

      <button
        onClick={onToggleControls}
        className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors"
      >
        <EyeOff size={16} />
      </button>
    </motion.div>
  );
}
