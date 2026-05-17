import { motion } from "framer-motion";
import { ShellLogo } from "../ShellLogo";

interface SceneClosingProps {
  progress: number;
}

const milestones = [
  { label: "建档", x: 15 },
  { label: "导入", x: 30 },
  { label: "判断", x: 45 },
  { label: "规划", x: 60 },
  { label: "复盘", x: 75 },
  { label: "成长", x: 90 },
];

export function SceneClosing({ progress }: SceneClosingProps) {
  const logoProgress = Math.min(1, progress / 0.3);
  const curveProgress = Math.min(1, Math.max(0, (progress - 0.2) / 0.4));
  const textProgress = Math.min(1, Math.max(0, (progress - 0.5) / 0.3));
  const finalProgress = Math.min(1, Math.max(0, (progress - 0.7) / 0.3));

  return (
    <div className="absolute inset-0 flex items-center justify-center" style={{ background: "#FFF9F5" }}>
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{
            scale: logoProgress > 0 ? [1, 1.03, 1] : 0.8,
            opacity: logoProgress,
          }}
          transition={{
            scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 0.8 },
          }}
        >
          <ShellLogo size={140} animated={false} />
        </motion.div>

        <div className="relative w-[500px] h-[120px] mt-8">
          <svg
            viewBox="0 0 500 120"
            className="absolute inset-0 w-full h-full"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M 20 100 Q 80 20, 150 60 T 280 40 T 400 70 T 480 30"
              fill="none"
              stroke="url(#curveGradient)"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: curveProgress }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#4ECDC4" />
                <stop offset="50%" stopColor="#5B8DEF" />
                <stop offset="100%" stopColor="#FF8C69" />
              </linearGradient>
            </defs>
          </svg>

          {milestones.map((m, i) => {
            const nodeProgress = Math.min(
              1,
              Math.max(0, (curveProgress - i * 0.12) / 0.15)
            );
            return (
              <motion.div
                key={i}
                className="absolute flex flex-col items-center"
                style={{
                  left: `${m.x}%`,
                  top: i % 2 === 0 ? "20%" : "60%",
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: nodeProgress,
                  scale: nodeProgress > 0 ? 1 : 0,
                }}
                transition={{ duration: 0.4 }}
              >
                <div className="w-3 h-3 rounded-full bg-white border-2 border-[#4ECDC4]" />
                <span className="text-[#6B7280] text-xs mt-1 whitespace-nowrap">
                  {m.label}
                </span>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: textProgress,
            y: textProgress > 0 ? 0 : 20,
          }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-[#172033] mb-3 tracking-widest">
            招贝
          </h1>
          <p className="text-2xl text-[#6B7280] mb-2">
            先安心，再生财
          </p>
          <motion.div
            className="w-16 h-0.5 mx-auto mb-4"
            style={{ background: "linear-gradient(90deg, #FF8C69, #4ECDC4)" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: textProgress }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <p className="text-lg text-[#6B7280]">
            AI 亲子财务规划，让每一笔花费都指向成长
          </p>
        </motion.div>

        <motion.p
          className="text-[#94a3b8] text-sm mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: finalProgress }}
          transition={{ duration: 1 }}
        >
          招商银行亲子家庭财务规划智能体概念演示
        </motion.p>
      </div>
    </div>
  );
}
