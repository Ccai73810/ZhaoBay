import { motion } from "framer-motion";
import { Database, Users, RotateCcw, Brain, ArrowRight } from "lucide-react";

interface SceneBarriersProps {
  progress: number;
}

const barriers = [
  {
    icon: Database,
    title: "私有数据壁垒",
    desc: "银行流水、OCR 账单、课程合同、家庭画像联动",
    color: "#4ECDC4",
    bgColor: "#e6f7f6",
  },
  {
    icon: Users,
    title: "匿名基准壁垒",
    desc: "同城市、同收入、同阶段家庭的聚合参考",
    color: "#5B8DEF",
    bgColor: "#eef4ff",
  },
  {
    icon: RotateCcw,
    title: "行动闭环壁垒",
    desc: "预算调整、复盘提醒、人工顾问预约",
    color: "#FF8C69",
    bgColor: "#FFF0E6",
  },
  {
    icon: Brain,
    title: "持续校准壁垒",
    desc: "用户纠错后，AI 越用越懂这个家庭",
    color: "#4ECDC4",
    bgColor: "#e6f7f6",
  },
];

export function SceneBarriers({ progress }: SceneBarriersProps) {
  const titleProgress = Math.min(1, progress / 0.2);
  const cardProgress = Math.min(1, Math.max(0, (progress - 0.15) / 0.5));
  const textProgress = Math.min(1, Math.max(0, (progress - 0.6) / 0.3));

  return (
    <div className="absolute inset-0 flex items-center justify-center" style={{ background: "#FFF9F5" }}>
      <div className="max-w-5xl mx-auto px-8">
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
            为什么不是复制账单问 ChatGPT
          </h2>
          <p className="text-[#6B7280] text-lg">
            招贝的四大不可替代性
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
          {barriers.map((barrier, i) => {
            const itemProgress = Math.min(
              1,
              Math.max(0, (cardProgress - i * 0.1) / 0.2)
            );
            return (
              <motion.div
                key={i}
                className="rounded-3xl p-8 relative overflow-hidden"
                style={{
                  background: barrier.bgColor,
                  border: `1px solid ${barrier.color}20`,
                }}
                initial={{ opacity: 0, rotateY: -90 }}
                animate={{
                  opacity: itemProgress,
                  rotateY: itemProgress > 0 ? 0 : -90,
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <motion.div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4"
                  style={{ background: `${barrier.color}20` }}
                  animate={{
                    scale: itemProgress > 0.5 ? [1, 1.1, 1] : 1,
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: itemProgress > 0.5 ? Infinity : 0,
                  }}
                >
                  <barrier.icon size={28} style={{ color: barrier.color }} />
                </motion.div>

                <h3 className="text-xl font-bold text-[#172033] mb-2">
                  {barrier.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  {barrier.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-12 flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: textProgress,
            y: textProgress > 0 ? 0 : 20,
          }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#6B7280] text-lg">从问答</span>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight size={20} className="text-[#4ECDC4]" />
          </motion.div>
          <span className="text-[#172033] text-lg font-bold">
            到授权执行
          </span>
        </motion.div>
      </div>
    </div>
  );
}
