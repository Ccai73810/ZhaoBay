import { motion } from "framer-motion";
import { Sprout, BookOpen, PiggyBank, Lightbulb } from "lucide-react";

interface SceneGrowthProps {
  progress: number;
}

const events = [
  {
    icon: Sprout,
    title: "第一次完成 10 次篮球训练",
    subtitle: "篮球课 ¥680",
    color: "#4ECDC4",
    fromExpense: true,
  },
  {
    icon: BookOpen,
    title: "第一次读完一本书",
    subtitle: "低成本成长",
    color: "#5B8DEF",
    fromExpense: false,
  },
  {
    icon: PiggyBank,
    title: "第一次完成储蓄目标",
    subtitle: "零成本成长",
    color: "#FF8C69",
    fromExpense: false,
  },
  {
    icon: Lightbulb,
    title: "第一次主动规划零花钱",
    subtitle: "财商启蒙",
    color: "#4ECDC4",
    fromExpense: false,
  },
];

export function SceneGrowth({ progress }: SceneGrowthProps) {
  const titleProgress = Math.min(1, progress / 0.2);
  const cardProgress = Math.min(1, Math.max(0, (progress - 0.15) / 0.5));
  const textProgress = Math.min(1, Math.max(0, (progress - 0.6) / 0.3));

  return (
    <div className="absolute inset-0 flex items-center justify-center" style={{ background: "#FFF9F5" }}>
      <div className="max-w-4xl mx-auto px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{
            opacity: titleProgress,
            y: titleProgress > 0 ? 0 : -20,
          }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#172033] mb-2">
            成长账本
          </h2>
          <p className="text-[#6B7280] text-lg">
            让每一笔花费都有回响
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#4ECDC4] via-[#5B8DEF] to-[#FF8C69] opacity-30" />

          <div className="space-y-6">
            {events.map((event, i) => {
              const itemProgress = Math.min(
                1,
                Math.max(0, (cardProgress - i * 0.12) / 0.2)
              );
              const isFirst = i === 0;

              return (
                <motion.div
                  key={i}
                  className="flex items-center gap-6 relative"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{
                    opacity: itemProgress,
                    x: itemProgress > 0 ? 0 : -30,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 z-10"
                    style={{
                      background: isFirst
                        ? `linear-gradient(135deg, ${event.color}20, ${event.color}10)`
                        : "white",
                      border: `2px solid ${event.color}30`,
                      boxShadow: `0 4px 16px ${event.color}15`,
                    }}
                    animate={{
                      scale: isFirst && cardProgress > 0.5 ? [1, 1.05, 1] : 1,
                    }}
                    transition={{
                      scale: { repeat: isFirst ? Infinity : 0, duration: 2 },
                    }}
                  >
                    <event.icon size={24} style={{ color: event.color }} />
                  </motion.div>

                  <motion.div
                    className="flex-1 rounded-2xl p-5"
                    style={{
                      background: isFirst
                        ? `linear-gradient(135deg, ${event.color}08, transparent)`
                        : "white",
                      border: "1px solid #e2e8f0",
                    }}
                    initial={isFirst ? { scale: 1 } : {}}
                    animate={
                      isFirst
                        ? {
                            scale: cardProgress > 0.3 ? [1, 1.02, 1] : 1,
                          }
                        : {}
                    }
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-[#172033] font-bold text-lg">
                          {event.title}
                        </h3>
                        <p className="text-[#6B7280] text-sm mt-1">
                          {event.subtitle}
                        </p>
                      </div>
                      {isFirst && (
                        <motion.div
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{
                            background: `${event.color}15`,
                            color: event.color,
                          }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          支出关联
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: textProgress,
            y: textProgress > 0 ? 0 : 20,
          }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-2xl font-bold text-[#172033] mb-2">
            成长不等于高消费
          </p>
          <p className="text-[#6B7280] text-lg">
            重要的是，让每一笔花费都有回响
          </p>
        </motion.div>
      </div>
    </div>
  );
}
