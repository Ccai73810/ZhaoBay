import { motion } from "framer-motion";
import { PhoneMockup } from "../PhoneMockup";
import { AlertTriangle, Clock, MessageSquare, X } from "lucide-react";

interface SceneExpensesProps {
  progress: number;
}

const expenses = [
  { label: "英语课续费", amount: "¥6,800", tag: "教育支出", highlight: true },
  { label: "篮球课", amount: "¥680", tag: "兴趣班" },
  { label: "开学文具", amount: "¥320", tag: "教育支出" },
  { label: "儿童医院", amount: "¥260", tag: "医疗" },
  { label: "绘本", amount: "¥180", tag: "教育支出" },
  { label: "暑期营地定金", amount: "¥2,000", tag: "亲子娱乐" },
];

export function SceneExpenses({ progress }: SceneExpensesProps) {
  const listProgress = Math.min(1, progress / 0.2);
  const scanProgress = Math.min(1, Math.max(0, (progress - 0.3) / 0.3));
  const alertProgress = Math.min(1, Math.max(0, (progress - 0.55) / 0.3));
  const actionProgress = Math.min(1, Math.max(0, (progress - 0.75) / 0.2));

  return (
    <div className="absolute inset-0 flex items-center justify-center" style={{ background: "#FFF9F5" }}>
      <motion.div
        className="absolute top-12 left-12"
        initial={{ opacity: 0, x: -30 }}
        animate={{
          opacity: listProgress,
          x: listProgress > 0 ? 0 : -30,
        }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-[#172033] mb-2">
          育儿支出管理
        </h2>
        <p className="text-[#6B7280] text-lg">
          温和识别焦虑驱动信号
        </p>
      </motion.div>

      <PhoneMockup delay={0.1} className="scale-[0.85]">
        <div className="px-5 h-full overflow-hidden">
          <h3 className="text-[#172033] text-lg font-bold mb-4">育儿支出</h3>

          <div className="space-y-3 relative">
            {expenses.map((expense, i) => {
              const itemProgress = Math.min(
                1,
                Math.max(0, (listProgress - i * 0.08) / 0.15)
              );
              const isHighlighted = expense.highlight;
              const showAlert = isHighlighted && scanProgress > 0.5;

              return (
                <motion.div
                  key={i}
                  className={`rounded-2xl p-4 relative overflow-hidden ${
                    showAlert
                      ? "bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200"
                      : "bg-white border border-[#e2e8f0]"
                  }`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: itemProgress,
                    x: itemProgress > 0 ? 0 : -20,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  {showAlert && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-b from-amber-100/30 to-transparent"
                      initial={{ y: "-100%" }}
                      animate={{ y: "100%" }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                  )}

                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <p className="text-[#172033] font-medium">{expense.label}</p>
                      <motion.span
                        className={`inline-block px-2 py-0.5 rounded-full text-xs mt-1 ${
                          showAlert
                            ? "bg-amber-100 text-amber-700"
                            : "bg-[#f1f5f9] text-[#6B7280]"
                        }`}
                        animate={{
                          scale: showAlert ? [1, 1.05, 1] : 1,
                        }}
                        transition={{
                          duration: 1,
                          repeat: showAlert ? Infinity : 0,
                        }}
                      >
                        {showAlert ? "可能存在焦虑驱动信号" : expense.tag}
                      </motion.span>
                    </div>
                    <p className="text-[#172033] font-bold text-lg">{expense.amount}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="mt-4 rounded-2xl p-4 bg-white border border-[#e2e8f0]"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: alertProgress,
              y: alertProgress > 0 ? 0 : 20,
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                <AlertTriangle size={16} className="text-amber-600" />
              </div>
              <div>
                <p className="text-[#172033] font-bold text-sm mb-1">
                  先观察，再续费
                </p>
                <p className="text-[#6B7280] text-xs leading-relaxed mb-3">
                  这笔支出不是不值得，而是建议先复盘 4 周出勤和孩子兴趣反馈，再决定是否续长期课包。
                </p>
                <div className="space-y-1 mb-3">
                  {[
                    "金额较高",
                    "属于长期课包",
                    "与近期同类支出重复",
                    "当前教育金缺口仍为 ¥272,000",
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-amber-400" />
                      <p className="text-[#6B7280] text-xs">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-2 mt-3">
              {[
                { icon: Clock, text: "设置 4 周复盘", primary: true },
                { icon: MessageSquare, text: "补充孩子反馈", primary: false },
                { icon: X, text: "这不是焦虑消费", primary: false },
              ].map((action, i) => {
                const btnProgress = Math.min(
                  1,
                  Math.max(0, (actionProgress - i * 0.1) / 0.15)
                );
                return (
                  <motion.button
                    key={i}
                    className={`w-full py-2.5 rounded-xl text-sm font-medium flex items-center justify-center gap-2 ${
                      action.primary
                        ? "text-white"
                        : "text-[#6B7280] border border-[#e2e8f0]"
                    }`}
                    style={{
                      background: action.primary ? "#4ECDC4" : "transparent",
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
