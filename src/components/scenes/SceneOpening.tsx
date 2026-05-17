import { motion } from "framer-motion";

const bills = [
  { label: "英语课续费", amount: "¥6,800", x: -300, y: -200, rotate: -15, delay: 0 },
  { label: "开学支出", amount: "¥2,300", x: 350, y: -150, rotate: 12, delay: 0.3 },
  { label: "保险缴费提醒", amount: "待缴", x: -250, y: 180, rotate: -8, delay: 0.6 },
  { label: "教育金缺口", amount: "¥272,000", x: 300, y: 200, rotate: 18, delay: 0.9, highlight: true },
  { label: "篮球课课包", amount: "¥3,200", x: -400, y: 50, rotate: -20, delay: 1.2 },
  { label: "绘本与教辅", amount: "¥480", x: 400, y: -50, rotate: 15, delay: 1.5 },
  { label: "视力检查", amount: "¥360", x: -150, y: -280, rotate: -5, delay: 1.8 },
  { label: "暑期营地", amount: "¥9,800", x: 200, y: 280, rotate: 10, delay: 2.1 },
];

interface SceneOpeningProps {
  progress: number;
}

export function SceneOpening({ progress }: SceneOpeningProps) {
  const isFinal = progress > 0.8;

  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden" style={{ background: "#121826" }}>
      {bills.map((bill, i) => {
        const flyInProgress = Math.min(1, Math.max(0, (progress - bill.delay * 0.15) / 0.3));
        const settleProgress = Math.min(1, Math.max(0, (progress - 0.5) / 0.3));
        const shakeProgress = progress > 0.6 && progress < 0.85 ? 1 : 0;

        return (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: "50%",
              top: "50%",
            }}
            initial={{ x: bill.x * 2, y: bill.y * 2, rotate: bill.rotate * 3, opacity: 0 }}
            animate={{
              x: bill.x * (1 - flyInProgress * 0.3) + (settleProgress > 0 ? Math.sin(i * 1.5) * 20 : 0),
              y: bill.y * (1 - flyInProgress * 0.3) + (settleProgress > 0 ? Math.cos(i * 1.2) * 15 : 0),
              rotate: bill.rotate,
              opacity: flyInProgress,
            }}
            transition={{ duration: 0.1 }}
          >
            <motion.div
              className={`rounded-2xl px-6 py-4 shadow-xl ${
                bill.highlight
                  ? "bg-gradient-to-br from-[#FF8C69]/20 to-[#E60012]/10 border border-[#FF8C69]/30"
                  : "bg-[#1e293b]/80 border border-[#334155]/50"
              }`}
              animate={{
                x: shakeProgress > 0 ? [0, -2, 2, -1, 1, 0] : 0,
                scale: bill.highlight && isFinal ? 1.1 : 1,
              }}
              transition={{
                x: { repeat: shakeProgress > 0 ? Infinity : 0, duration: 0.5 },
                scale: { duration: 0.5 },
              }}
            >
              <p className="text-[#94a3b8] text-sm mb-1">{bill.label}</p>
              <p className={`text-2xl font-bold ${bill.highlight ? "text-[#FF8C69]" : "text-white"}`}>
                {bill.amount}
              </p>
            </motion.div>
          </motion.div>
        );
      })}

      <motion.div
        className="absolute text-center z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{
          opacity: progress > 0.3 && progress < 0.75 ? 1 : 0,
          y: progress > 0.3 && progress < 0.75 ? 0 : 20,
        }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-white text-3xl font-light mb-3 tracking-wide">
          孩子的每一笔花费，都像一个问题
        </h2>
        <p className="text-[#94a3b8] text-xl">
          该不该报？值不值得？以后够不够？
        </p>
      </motion.div>

      <motion.div
        className="absolute inset-0 bg-[#121826]"
        animate={{ opacity: isFinal ? 0.7 : 0 }}
        transition={{ duration: 1 }}
      />

      {isFinal && (
        <motion.div
          className="absolute text-center z-20"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="rounded-3xl bg-gradient-to-br from-[#FF8C69]/20 to-[#E60012]/10 border border-[#FF8C69]/30 px-12 py-8">
            <p className="text-[#94a3b8] text-lg mb-2">教育金缺口</p>
            <p className="text-5xl font-bold text-[#FF8C69]">¥272,000</p>
          </div>
        </motion.div>
      )}
    </div>
  );
}
