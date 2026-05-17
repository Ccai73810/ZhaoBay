import { motion } from "framer-motion";
import { PhoneMockup } from "../PhoneMockup";
import { CountUp } from "../CountUp";
import { GraduationCap, AlertCircle } from "lucide-react";

interface SceneEducationProps {
  progress: number;
}

const paths = [
  { name: "国内本科", target: 400000, monthly: 3200, color: "#4ECDC4" },
  { name: "民办本科", target: 600000, monthly: 4800, color: "#5B8DEF" },
  { name: "国际路线", target: 1200000, monthly: 9600, color: "#FF8C69" },
];

const milestones = ["小学", "初中", "高中", "大学"];

export function SceneEducation({ progress }: SceneEducationProps) {
  const phoneProgress = Math.min(1, progress / 0.2);
  const numberProgress = Math.min(1, Math.max(0, (progress - 0.15) / 0.3));
  const pathProgress = Math.min(1, Math.max(0, (progress - 0.4) / 0.3));
  const switchProgress = Math.min(1, Math.max(0, (progress - 0.7) / 0.25));

  const currentPath = switchProgress > 0.5 ? 2 : 0;
  const currentData = paths[currentPath];

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
          教育金规划
        </h2>
        <p className="text-[#6B7280] text-lg">
          远期目标变成今天能行动的月度计划
        </p>
      </motion.div>

      <PhoneMockup delay={0.1} className="scale-[0.85]">
        <div className="px-5 h-full overflow-hidden">
          <h3 className="text-[#172033] text-lg font-bold mb-4 flex items-center gap-2">
            <GraduationCap size={20} className="text-[#5B8DEF]" />
            教育金规划
          </h3>

          <motion.div
            className="rounded-2xl p-5 mb-4"
            style={{ background: "linear-gradient(135deg, #eef4ff, #f5f8ff)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: numberProgress,
              y: numberProgress > 0 ? 0 : 20,
            }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-[#6B7280] text-xs mb-1">目标金额</p>
                <p className="text-[#172033] text-xl font-bold">
                  <CountUp
                    value={currentData.target}
                    prefix="¥"
                    start={numberProgress > 0}
                    duration={1.5}
                  />
                </p>
              </div>
              <div>
                <p className="text-[#6B7280] text-xs mb-1">已储备</p>
                <p className="text-[#4ECDC4] text-xl font-bold">
                  <CountUp
                    value={128000}
                    prefix="¥"
                    start={numberProgress > 0}
                    duration={1.5}
                    delay={0.2}
                  />
                </p>
              </div>
              <div>
                <p className="text-[#6B7280] text-xs mb-1">还差</p>
                <p className="text-[#FF8C69] text-xl font-bold">
                  <CountUp
                    value={currentData.target - 128000}
                    prefix="¥"
                    start={numberProgress > 0}
                    duration={1.5}
                    delay={0.4}
                  />
                </p>
              </div>
              <div>
                <p className="text-[#6B7280] text-xs mb-1">建议每月储备</p>
                <p className="text-[#5B8DEF] text-xl font-bold">
                  <CountUp
                    value={currentData.monthly}
                    prefix="¥"
                    start={numberProgress > 0}
                    duration={1.5}
                    delay={0.6}
                  />
                </p>
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#6B7280] text-xs">完成率</span>
                <span className="text-[#172033] text-sm font-bold">
                  <CountUp
                    value={Math.round((128000 / currentData.target) * 100)}
                    suffix="%"
                    start={numberProgress > 0}
                    duration={1.5}
                    delay={0.3}
                  />
                </span>
              </div>
              <div className="h-2 bg-white rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: "linear-gradient(90deg, #4ECDC4, #5B8DEF)" }}
                  initial={{ width: 0 }}
                  animate={{
                    width: numberProgress > 0 ? `${(128000 / currentData.target) * 100}%` : 0,
                  }}
                  transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
                />
              </div>
            </div>
          </motion.div>

          <div className="flex gap-2 mb-4">
            {paths.map((path, i) => {
              const itemProgress = Math.min(
                1,
                Math.max(0, (pathProgress - i * 0.1) / 0.2)
              );
              const isSelected = currentPath === i;
              return (
                <motion.button
                  key={i}
                  className={`flex-1 py-2.5 rounded-xl text-xs font-medium transition-colors ${
                    isSelected
                      ? "text-white"
                      : "text-[#6B7280] border border-[#e2e8f0]"
                  }`}
                  style={{
                    background: isSelected ? path.color : "transparent",
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: itemProgress,
                    y: itemProgress > 0 ? 0 : 10,
                  }}
                  transition={{ duration: 0.4 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {path.name}
                </motion.button>
              );
            })}
          </div>

          <motion.div
            className="flex items-center justify-between mb-4 px-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: pathProgress }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {milestones.map((m, i) => (
              <div key={i} className="flex flex-col items-center">
                <motion.div
                  className="w-3 h-3 rounded-full mb-1"
                  style={{
                    background:
                      i <= Math.floor(pathProgress * 3)
                        ? "linear-gradient(135deg, #4ECDC4, #5B8DEF)"
                        : "#e2e8f0",
                  }}
                  initial={{ scale: 0 }}
                  animate={{
                    scale: pathProgress > i * 0.25 ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, delay: i * 0.15 }}
                />
                <span className="text-[#6B7280] text-xs">{m}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            className="rounded-2xl p-4 bg-amber-50 border border-amber-200 flex items-start gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: switchProgress,
              y: switchProgress > 0 ? 0 : 10,
            }}
            transition={{ duration: 0.5 }}
          >
            <AlertCircle size={16} className="text-amber-600 mt-0.5 flex-shrink-0" />
            <p className="text-amber-800 text-xs leading-relaxed">
              路径切换后，月度储备压力会明显上升。建议先确认家庭现金流安全线。
            </p>
          </motion.div>
        </div>
      </PhoneMockup>
    </div>
  );
}
