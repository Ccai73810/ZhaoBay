import { useEffect, useState } from "react";
import { motion, useSpring, useTransform } from "framer-motion";

interface CountUpProps {
  value: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  className?: string;
  start?: boolean;
}

export function CountUp({
  value,
  duration = 2,
  delay = 0,
  prefix = "",
  suffix = "",
  decimals = 0,
  className = "",
  start = true,
}: CountUpProps) {
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (start) {
      const timer = setTimeout(() => setHasStarted(true), delay * 1000);
      return () => clearTimeout(timer);
    }
  }, [start, delay]);

  const spring = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const display = useTransform(spring, (latest) => {
    const formatted = latest.toFixed(decimals);
    return `${prefix}${formatted}${suffix}`;
  });

  useEffect(() => {
    if (hasStarted) {
      spring.set(value);
    }
  }, [hasStarted, value, spring]);

  return <motion.span className={className}>{display}</motion.span>;
}
