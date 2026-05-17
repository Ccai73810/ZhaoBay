import { motion } from "framer-motion";
import { PhoneMockup } from "../PhoneMockup";
import { CountUp } from "../CountUp";
import { TrendingUp, Shield, Wallet, Lightbulb, ChevronRight } from "lucide-react";

interface SceneDashboardProps {
  progress: number;
}

export function SceneDashboard({ progress }: SceneDashboardProps) {
  const phoneProgress = Math.min(1, progress / 0.2);
  const cardProgress = Math.min(1, Math.max(0, (progress - 0.15) / 0.4));
  const insightProgress = Math.min(1, Math.max(0, (progress - 0.5) / 0.3));
  const detailProgress = Math.min(1, Math.max(0, (progress - 0.7) / 0.25));

  const cards = [
    {
      icon: TrendingUp,
      label: "家庭财务健康分",
      value: 86,
      suffix: "",
      color: "#4ECDC4",
      bgColor: "#e6f7f6",
    },
    {
      icon: Wallet,
      label: "本月育儿支出",
      value: 5260,
      prefix: "¥",
      suffix: "",
      color: "#FF8C69",
      bgColor: "#FFF0E6",
    },
    {
      icon: Target,
      label: "教育金完成率",
      value: 32,
      suffix: "%",
      color: "#5B8DEF",
      bgColor: "#eef4ff",
    },
    {
      icon: Shield,
      label: "保障完整度",
      value: 72,
      suffix: "%",
      color: "#4ECDC4",
      bgColor: "#e6f7f6",
    },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center" style={{ background: "#FFF9F5" }}>
      <motion.div
        className="absolute top-12 left-12"
        initial={{ opacity: 0, x: -30 }}
        animate={{
          opacity: phoneProgress,
          x: phoneProgress > 0 ? 0 : -30,
        }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-[#172033] mb-2">
          家庭财务驾驶舱
        </h2>
        <p className="text-[#6B7280] text-lg">
          一眼看清家庭成长财务全貌
        </p>
      </motion.div>

      <PhoneMockup delay={0.2} className="scale-[0.85]">
        <div className="px-5 h-full overflow-hidden">
          <div className="mb-5">
            <p className="text-[#6B7280] text-sm">早上好，</p>
            <h3 className="text-[#172033] text-xl font-bold">小宇的成长账户</h3>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-5">
            {cards.map((card, i) => {
              const itemProgress = Math.min(
                1,
                Math.max(0, (cardProgress - i * 0.1) / 0.2)
              );
              return (
                <motion.div
                  key={i}
                  className="rounded-2xl p-4"
                  style={{ background: card.bgColor }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: itemProgress,
                    y: itemProgress > 0 ? 0 : 20,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <card.icon size={18} style={{ color: card.color }} className="mb-2" />
                  <p className="text-[#6B7280] text-xs mb-1">{card.label}</p>
                  <p className="text-[#172033] text-xl font-bold">
                    <CountUp
                      value={card.value}
                      prefix={card.prefix}
                      suffix={card.suffix}
                      duration={1.5}
                      delay={0.3 + i * 0.2}
                      start={cardProgress > 0}
                    />
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="rounded-2xl p-4 mb-4"
            style={{ background: "linear-gradient(135deg, #FFF0E6, #fff5ee)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: insightProgress,
              y: insightProgress > 0 ? 0 : 20,
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FF8C69]/20 flex items-center justify-center flex-shrink-0">
                <Lightbulb size={16} className="text-[#FF8C69]" />
              </div>
              <div className="flex-1">
                <p className="text-[#172033] text-sm font-medium mb-1">
                  AI 今日建议
                </p>
                <p className="text-[#6B7280] text-xs leading-relaxed">
                  本月兴趣班支出较高，建议先复盘出勤和孩子反馈，再决定是否续费。
                </p>
              </div>
              <ChevronRight size={16} className="text-[#6B7280] mt-1" />
            </div>
          </motion.div>

          <motion.div
            className="rounded-2xl p-4 bg-white border border-[#e2e8f0]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{
              opacity: detailProgress,
              scale: detailProgress > 0 ? 1 : 0.95,
            }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#172033] text-sm font-bold mb-3">识别依据</p>
            <div className="space-y-2">
              {[
                "本月教育/兴趣支出占育儿支出 48%",
                "近 14 天出现 2 笔同类课程支出",
                "当前教育金完成率 32%",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#4ECDC4]" />
                  <p className="text-[#6B7280] text-xs">{item}</p>
                </div>
              ))}
            </div>
            <motion.button
              className="mt-3 w-full py-2.5 rounded-xl text-sm font-medium text-white"
              style={{ background: "#4ECDC4" }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              设置 4 周复盘提醒
            </motion.button>
          </motion.div>
        </div>
      </PhoneMockup>
    </div>
  );
}

function Target({ size, className }: { size: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}
