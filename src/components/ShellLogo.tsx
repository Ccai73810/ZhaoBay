import { motion } from "framer-motion";

interface ShellLogoProps {
  size?: number;
  animated?: boolean;
  className?: string;
}

export function ShellLogo({ size = 120, animated = true, className = "" }: ShellLogoProps) {
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 0.5 },
      },
    },
  };

  const seedVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { delay: 1, duration: 0.8, ease: "easeOut" },
    },
  };

  const glowVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: [0, 0.3, 0.1],
      scale: [0.8, 1.1, 1],
      transition: { duration: 2, ease: "easeInOut" },
    },
  };

  return (
    <div className={`relative inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg viewBox="0 0 120 120" width={size} height={size} className="overflow-visible">
        <defs>
          <linearGradient id="shellGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF8C69" />
            <stop offset="100%" stopColor="#4ECDC4" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {animated && (
          <motion.circle
            cx="60"
            cy="60"
            r="55"
            fill="url(#shellGradient)"
            opacity="0.1"
            variants={glowVariants}
            initial="hidden"
            animate="visible"
          />
        )}

        <motion.path
          d="M60 15 C35 15, 15 35, 15 60 C15 85, 35 100, 60 105 C85 100, 105 85, 105 60 C105 35, 85 15, 60 15Z"
          fill="none"
          stroke="url(#shellGradient)"
          strokeWidth="2.5"
          strokeLinecap="round"
          variants={animated ? pathVariants : undefined}
          initial={animated ? "hidden" : undefined}
          animate={animated ? "visible" : undefined}
        />

        <motion.path
          d="M60 15 C50 30, 45 45, 45 60 C45 75, 50 90, 60 105"
          fill="none"
          stroke="url(#shellGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
          variants={animated ? pathVariants : undefined}
          initial={animated ? "hidden" : undefined}
          animate={animated ? "visible" : undefined}
        />

        <motion.path
          d="M60 15 C70 30, 75 45, 75 60 C75 75, 70 90, 60 105"
          fill="none"
          stroke="url(#shellGradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
          variants={animated ? pathVariants : undefined}
          initial={animated ? "hidden" : undefined}
          animate={animated ? "visible" : undefined}
        />

        <motion.path
          d="M30 50 Q45 55, 60 50 Q75 55, 90 50"
          fill="none"
          stroke="url(#shellGradient)"
          strokeWidth="1"
          strokeLinecap="round"
          opacity="0.3"
          variants={animated ? pathVariants : undefined}
          initial={animated ? "hidden" : undefined}
          animate={animated ? "visible" : undefined}
        />

        <motion.g variants={animated ? seedVariants : undefined} initial={animated ? "hidden" : undefined} animate={animated ? "visible" : undefined}>
          <path
            d="M60 45 C55 40, 50 35, 52 28 C54 22, 58 20, 60 18 C62 20, 66 22, 68 28 C70 35, 65 40, 60 45Z"
            fill="#4ECDC4"
            opacity="0.9"
          />
          <path
            d="M60 45 C58 50, 56 55, 57 60"
            fill="none"
            stroke="#4ECDC4"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <ellipse cx="58" cy="32" rx="2" ry="3" fill="#FFF9F5" opacity="0.6" />
        </motion.g>
      </svg>
    </div>
  );
}
