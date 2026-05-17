import { motion, AnimatePresence } from "framer-motion";
import { script } from "../data/script";

interface NarrationCaptionProps {
  currentTime: number;
}

export function NarrationCaption({ currentTime }: NarrationCaptionProps) {
  const activeSegment = script.find(
    (s) => currentTime >= s.start && currentTime < s.end
  );

  return (
    <div className="absolute bottom-20 left-0 right-0 flex justify-center z-50 pointer-events-none">
      <AnimatePresence mode="wait">
        {activeSegment && (
          <motion.div
            key={activeSegment.start}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-4xl mx-8 px-8 py-4 rounded-2xl"
            style={{
              background: "rgba(18, 24, 38, 0.75)",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
            }}
          >
            <p className="text-white text-lg leading-relaxed text-center font-medium tracking-wide">
              {activeSegment.text}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
