import { motion } from "framer-motion";
import { ShellLogo } from "../ShellLogo";
import { Shield, Heart, Brain, MessageCircle } from "lucide-react";

interface SceneAgentProfileProps {
  progress: number;
}

const principles = [
  { icon: Shield, text: "不评价家长对错", color: "#FF8C69" },
  { icon: Heart, text: "不制造育儿焦虑", color: "#4ECDC4" },
  { icon: Brain, text: "所有建议必须给出依据", color: "#5B8DEF" },
  { icon: MessageCircle, text: "低置信度时先追问", color: "#FF8C69" },
];

const keywords = [
  { text: "不评判", delay: 0.3 },
  { text: "可解释", delay: 0.5 },
  { text: "可执行", delay: 0.7 },
];

export function SceneAgentProfile({ progress }: SceneAgentProfileProps) {
  const cardProgress = Math.min(1, progress / 0.3);
  const principleProgress = Math.min(1, Math.max(0, (progress - 0.2) / 0.4));
  const keywordProgress = Math.min(1, Math.max(0, (progress - 0.4) / 0.4));
  const textProgress = Math.min(1, Math.max(0, (progress - 0.6) / 0.3));

  return (
    <div className="absolute inset-0 flex items-center justify-center" style={{ background: "#FFF9F5" }}>
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: 200 + i * 100,
              height: 200 + i * 100,
              left: `${20 + i * 15}%`,
              top: `${10 + i * 12}%`,
              border: "1px solid rgba(78, 205, 196, 0.1)",
            }}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
              scale: progress > 0.2 ? 1 : 0.5,
              opacity: progress > 0.2 ? 0.3 : 0,
              rotate: progress * 10,
            }}
            transition={{ duration: 2, delay: i * 0.2 }}
          />
        ))}
      </div>

      <div className="relative z-10 flex items-center gap-16 max-w-5xl mx-auto">
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: cardProgress,
            x: cardProgress > 0 ? 0 : -50,
          }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-64 h-80 rounded-3xl bg-white shadow-xl flex flex-col items-center justify-center p-8 border border-[#FFF0E6]">
            <ShellLogo size={100} animated={progress > 0.2} />
            <h3 className="mt-6 text-xl font-bold text-[#172033]">招贝 AI</h3>
            <p className="mt-2 text-sm text-[#6B7280] text-center">
              亲子财务顾问
            </p>
            <div className="mt-4 flex gap-2">
              <span className="px-3 py-1 rounded-full bg-[#FFF0E6] text-[#FF8C69] text-xs">
                温和
              </span>
              <span className="px-3 py-1 rounded-full bg-[#e6f7f6] text-[#4ECDC4] text-xs">
                克制
              </span>
            </div>
          </div>
        </motion.div>

        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: cardProgress,
              y: cardProgress > 0 ? 0 : 20,
            }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <h2 className="text-4xl font-bold text-[#172033] mb-2">
              不是问答机器人
            </h2>
            <h2 className="text-4xl font-bold mb-8" style={{ color: "#4ECDC4" }}>
              而是家庭亲子财务决策中枢
            </h2>
          </motion.div>

          <div className="space-y-3 mb-8">
            {principles.map((p, i) => {
              const itemProgress = Math.min(
                1,
                Math.max(0, (principleProgress - i * 0.15) / 0.2)
              );
              return (
                <motion.div
                  key={i}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: itemProgress,
                    x: itemProgress > 0 ? 0 : -20,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{ background: `${p.color}15` }}
                  >
                    <p.icon size={16} style={{ color: p.color }} />
                  </div>
                  <span className="text-[#172033] text-lg">{p.text}</span>
                </motion.div>
              );
            })}
          </div>

          <div className="flex gap-4">
            {keywords.map((k, i) => {
              const kwProgress = Math.min(
                1,
                Math.max(0, (keywordProgress - k.delay) / 0.2)
              );
              return (
                <motion.span
                  key={i}
                  className="px-5 py-2 rounded-full text-lg font-bold"
                  style={{
                    background:
                      i === 0
                        ? "linear-gradient(135deg, #FF8C69, #ffaa8a)"
                        : i === 1
                        ? "linear-gradient(135deg, #4ECDC4, #6dd9d2)"
                        : "linear-gradient(135deg, #5B8DEF, #7ca8f2)",
                    color: "white",
                    boxShadow:
                      kwProgress > 0.5
                        ? `0 4px 20px ${
                            i === 0
                              ? "rgba(255,140,105,0.3)"
                              : i === 1
                              ? "rgba(78,205,196,0.3)"
                              : "rgba(91,141,239,0.3)"
                          }`
                        : "none",
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: kwProgress,
                    scale: kwProgress > 0 ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {k.text}
                </motion.span>
              );
            })}
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-16 left-0 right-0 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: textProgress }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-[#6B7280] text-lg">
          性格：温和、克制、可解释、不评判
        </p>
      </motion.div>
    </div>
  );
}
