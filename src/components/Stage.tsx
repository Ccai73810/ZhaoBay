import { motion, AnimatePresence } from "framer-motion";
import { getSceneAtTime, getSceneProgress } from "../data/timeline";
import { SceneOpening } from "./scenes/SceneOpening";
import { SceneBrand } from "./scenes/SceneBrand";
import { SceneAgentProfile } from "./scenes/SceneAgentProfile";
import { SceneFlow } from "./scenes/SceneFlow";
import { SceneDashboard } from "./scenes/SceneDashboard";
import { SceneExpenses } from "./scenes/SceneExpenses";
import { SceneEducation } from "./scenes/SceneEducation";
import { SceneAdvisor } from "./scenes/SceneAdvisor";
import { SceneGrowth } from "./scenes/SceneGrowth";
import { SceneBarriers } from "./scenes/SceneBarriers";
import { SceneClosing } from "./scenes/SceneClosing";

interface StageProps {
  currentTime: number;
}

export function Stage({ currentTime }: StageProps) {
  const scene = getSceneAtTime(currentTime);
  const progress = scene ? getSceneProgress(currentTime, scene) : 0;

  const renderScene = () => {
    if (!scene) return null;

    switch (scene.id) {
      case 0:
        return <SceneOpening progress={progress} />;
      case 1:
        return <SceneBrand progress={progress} />;
      case 2:
        return <SceneAgentProfile progress={progress} />;
      case 3:
        return <SceneFlow progress={progress} />;
      case 4:
        return <SceneDashboard progress={progress} />;
      case 5:
        return <SceneExpenses progress={progress} />;
      case 6:
        return <SceneEducation progress={progress} />;
      case 7:
        return <SceneAdvisor progress={progress} />;
      case 8:
        return <SceneGrowth progress={progress} />;
      case 9:
        return <SceneBarriers progress={progress} />;
      case 10:
        return <SceneClosing progress={progress} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden" style={{ aspectRatio: "16/9" }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={scene?.id ?? "empty"}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {renderScene()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
