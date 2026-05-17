import { motion } from "framer-motion";
import { FileText, Upload, Tags, Brain, Target, CheckCircle, RefreshCw } from "lucide-react";

interface SceneFlowProps {
  progress: number;
}

const steps = [
  { icon: FileText, title: "建档", desc: "输入孩子年龄、城市、收入区间、教育目标", color: "#FF8C69" },
  { icon: Upload, title: "导入", desc: "上传账单截图、发票、课程合同，或手动记录", color: "#4ECDC4" },
  { icon: Tags, title: "分类", desc: "AI 识别育儿支出类别", color: "#5B8DEF" },
  { icon: Brain, title: "判断", desc: "AI 判断消费性质", color: "#FF8C69" },
  { icon: Target, title: "规划", desc: "生成教育金目标、预算建议", color: "#4ECDC4" },
  { icon: CheckCircle, title: "执行", desc: "设置复盘提醒、调整预算", color: "#5B8DEF" },
  { icon: RefreshCw, title: "反馈", desc: "用户纠正分类，AI 持续校准", color: "#FF8C69" },
];

export function SceneFlow({ progress }: SceneFlowProps) {
  const titleProgress = Math.min(1, progress / 0.15);
  const stepsProgress = Math.min(1, Math.max(0, (progress - 0.1) / 0.6));
  const loopProgress = Math.min(1, Math.max(0, (progress - 0.7) / 0.3));

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ background: "#FFF9F5" }}>
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
          从记录，到判断，再到行动
        </h2>
        <p className="text-[#6B7280] text-lg">
          每一步都有依据，每一步都可纠正
        </p>
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-8">
        <div className="flex items-start gap-4">
          {steps.map((step, i) => {
            const stepProgress = Math.min(
              1,
              Math.max(0, (stepsProgress - i * 0.1) / 0.15)
            );
            const isActive = stepsProgress > i * 0.1 + 0.1;
            const isCurrent = stepsProgress > i * 0.1 && stepsProgress < (i + 1) * 0.1 + 0.1;

            return (
              <div key={i} className="flex items-center">
                <motion.div
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  animate={{
                    opacity: stepProgress,
                    y: stepProgress > 0 ? 0 : 30,
                    scale: isCurrent ? 1.08 : 1,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <motion.div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-3"
                    style={{
                      background: isActive
                        ? `linear-gradient(135deg, ${step.color}20, ${step.color}10)`
                        : "#f1f5f9",
                      border: `2px solid ${isActive ? step.color : "#e2e8f0"}`,
                      boxShadow: isActive
                        ? `0 8px 24px ${step.color}25`
                        : "none",
                    }}
                    animate={{
                      scale: isCurrent ? [1, 1.1, 1] : 1,
                    }}
                    transition={{
                      scale: { repeat: isCurrent ? Infinity : 0, duration: 1.5 },
                    }}
                  >
                    <step.icon
                      size={24}
                      style={{ color: isActive ? step.color : "#94a3b8" }}
                    />
                  </motion.div>
                  <h3
                    className="text-sm font-bold mb-1"
                    style={{ color: isActive ? "#172033" : "#94a3b8" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#6B7280] text-center max-w-[120px] leading-relaxed">
                    {step.desc}
                  </p>
                </motion.div>

                {i < steps.length - 1 && (
                  <motion.div
                    className="w-8 h-0.5 mx-1 mt-[-40px]"
                    style={{
                      background: isActive
                        ? `linear-gradient(90deg, ${step.color}, ${steps[i + 1].color})`
                        : "#e2e8f0",
                    }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: stepProgress }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  />
                )}
              </div>
            );
          })}
        </div>

        <motion.div
          className="absolute -bottom-16 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: loopProgress }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 text-[#6B7280]">
            <div className="w-8 h-8 rounded-full border-2 border-dashed border-[#4ECDC4] flex items-center justify-center">
              <RefreshCw size={14} className="text-[#4ECDC4]" />
            </div>
            <span className="text-sm">持续闭环，越用越懂你的家庭</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
