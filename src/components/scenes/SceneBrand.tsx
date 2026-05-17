import { motion } from "framer-motion";
import { ShellLogo } from "../ShellLogo";

interface SceneBrandProps {
  progress: number;
}

export function SceneBrand({ progress }: SceneBrandProps) {
  const lightProgress = Math.min(1, progress / 0.3);
  const logoProgress = Math.min(1, Math.max(0, (progress - 0.2) / 0.4));
  const textProgress = Math.min(1, Math.max(0, (progress - 0.5) / 0.3));
  const bgProgress = Math.min(1, progress / 0.6);

  return (
    <div
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, #121826 ${100 - bgProgress * 100}%, #FFF9F5 ${100 - bgProgress * 80}%)`,
      }}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(255,140,105,0.15) 0%, transparent 60%)",
        }}
        initial={{ x: "-100%", opacity: 0 }}
        animate={{
          x: lightProgress > 0 ? "0%" : "-100%",
          opacity: lightProgress,
        }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: logoProgress > 0 ? 1 : 0,
            opacity: logoProgress,
          }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <ShellLogo size={160} animated={progress > 0.3} />
        </motion.div>

        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: textProgress,
            y: textProgress > 0 ? 0 : 30,
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1
            className="text-6xl font-bold mb-4 tracking-widest"
            style={{
              color: "#172033",
              letterSpacing: `${textProgress * 0.15}em`,
            }}
          >
            招贝
          </h1>
          <p className="text-2xl text-[#6B7280] mb-3 tracking-wide">
            先安心，再生财
          </p>
          <motion.div
            className="w-16 h-0.5 mx-auto mb-6"
            style={{ background: "linear-gradient(90deg, #FF8C69, #4ECDC4)" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: textProgress }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-lg text-[#6B7280] max-w-md">
            AI 亲子财务规划，让每一笔花费都指向成长
          </p>
        </motion.div>
      </div>
    </div>
  );
}
