import { motion } from "framer-motion";
import { PhoneMockup } from "../PhoneMockup";
import { Search, Stethoscope, AlertTriangle, Lightbulb, Wallet, ArrowRight, Clock, Calendar, User } from "lucide-react";

interface SceneAdvisorProps {
  progress: number;
}

const sections = [
  {
    icon: Stethoscope,
    title: "诊断结论",
    content: "这笔支出属于高金额长期教育课包，需要结合出勤、兴趣反馈和家庭预算判断。",
    color: "#4ECDC4",
    bgColor: "#e6f7f6",
  },
  {
    icon: AlertTriangle,
    title: "风险信号",
    content: "近 14 天已有 2 笔同类教育支出，可能存在短期升学焦虑或同伴比较触发。",
    color: "#FF8C69",
    bgColor: "#FFF0E6",
  },
  {
    icon: Lightbulb,
    title: "行动建议",
    content: "建议先观察 4 周，再决定是否续长期课包。",
    color: "#5B8DEF",
    bgColor: "#eef4ff",
  },
  {
    icon: Wallet,
    title: "预算调整草案",
    content: "将本月兴趣班预算从 ¥5,000 调整为 ¥3,800，差额转入教育金储备。",
    color: "#4ECDC4",
    bgColor: "#e6f7f6",
  },
];

const actions = [
  { icon: Clock, text: "设置复盘提醒" },
  { icon: Calendar, text: "调整本月预算" },
  { icon: User, text: "预约人工顾问" },
];

export function SceneAdvisor({ progress }: SceneAdvisorProps) {
  const questionProgress = Math.min(1, progress / 0.15);
  const sectionProgress = Math.min(1, Math.max(0, (progress - 0.2) / 0.5));
  const actionProgress = Math.min(1, Math.max(0, (progress - 0.7) / 0.25));

  return (
    <div className="absolute inset-0 flex items-center justify-center" style={{ background: "#FFF9F5" }}>
      <motion.div
        className="absolute top-12 left-12"
        initial={{ opacity: 0, x: -30 }}
        animate={{
          opacity: questionProgress,
          x: questionProgress > 0 ? 0 : -30,
        }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-[#172033] mb-2">
          AI 结构化决策
        </h2>
        <p className="text-[#6B7280] text-lg">
          不是简单回答，而是完整决策方案
        </p>
      </motion.div>

      <PhoneMockup delay={0.1} className="scale-[0.85]">
        <div className="px-5 h-full overflow-hidden">
          <motion.div
            className="flex justify-end mb-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{
              opacity: questionProgress,
              x: questionProgress > 0 ? 0 : 20,
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-[#4ECDC4] text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%]">
              <p className="text-sm">英语课要不要续费？</p>
            </div>
          </motion.div>

          <div className="space-y-3">
            {sections.map((section, i) => {
              const itemProgress = Math.min(
                1,
                Math.max(0, (sectionProgress - i * 0.12) / 0.15)
              );
              return (
                <motion.div
                  key={i}
                  className="rounded-2xl p-4"
                  style={{ background: section.bgColor }}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{
                    opacity: itemProgress,
                    y: itemProgress > 0 ? 0 : 15,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center"
                      style={{ background: `${section.color}20` }}
                    >
                      <section.icon size={14} style={{ color: section.color }} />
                    </div>
                    <h4 className="text-[#172033] font-bold text-sm">
                      {section.title}
                    </h4>
                  </div>
                  <p className="text-[#6B7280] text-xs leading-relaxed">
                    {section.content}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: actionProgress }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-[#6B7280] text-xs mb-2 text-center">
              下一步可执行操作
            </p>
            <div className="space-y-2">
              {actions.map((action, i) => {
                const btnProgress = Math.min(
                  1,
                  Math.max(0, (actionProgress - i * 0.08) / 0.12)
                );
                return (
                  <motion.button
                    key={i}
                    className="w-full py-2.5 rounded-xl text-sm font-medium flex items-center justify-center gap-2 text-white"
                    style={{
                      background:
                        i === 0
                          ? "#4ECDC4"
                          : i === 1
                          ? "#5B8DEF"
                          : "#FF8C69",
                    }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: btnProgress,
                      y: btnProgress > 0 ? 0 : 10,
                    }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <action.icon size={14} />
                    {action.text}
                    <ArrowRight size={12} />
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </PhoneMockup>
    </div>
  );
}
