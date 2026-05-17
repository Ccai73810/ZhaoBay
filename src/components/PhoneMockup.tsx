import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PhoneMockupProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function PhoneMockup({ children, className = "", delay = 0 }: PhoneMockupProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ y: 200, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className="relative rounded-[48px] p-3 shadow-2xl"
        style={{
          background: "linear-gradient(145deg, #e8e4e0 0%, #d5d0cc 100%)",
          boxShadow:
            "0 25px 80px rgba(0,0,0,0.25), 0 10px 30px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.3)",
        }}
      >
        <div
          className="relative rounded-[40px] overflow-hidden"
          style={{
            background: "#FFF9F5",
            width: "340px",
            height: "700px",
          }}
        >
          <div className="absolute top-0 left-0 right-0 h-8 flex items-center justify-center z-20">
            <div className="w-24 h-6 bg-black rounded-full flex items-center justify-center gap-2">
              <div className="w-12 h-4 bg-black rounded-full" />
            </div>
          </div>

          <div className="absolute top-2 right-6 flex items-center gap-1 z-20">
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M1 7.5L4 4.5L7 7.5L10 4.5L13 7.5" stroke="#172033" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <svg width="14" height="10" viewBox="0 0 14 10" fill="none">
              <path d="M1 5.5C1 5.5 3 3 7 3C11 3 13 5.5 13 5.5" stroke="#172033" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="7" cy="7" r="1.5" fill="#172033" />
            </svg>
            <div className="w-5 h-2.5 border border-[#172033] rounded-sm relative">
              <div className="absolute inset-0.5 bg-[#172033] rounded-sm" style={{ width: "70%" }} />
            </div>
          </div>

          <div className="absolute top-2 left-6 text-[11px] font-semibold text-[#172033] z-20 tracking-wide">
            9:41
          </div>

          <div className="pt-10 pb-6 h-full overflow-hidden">
            {children}
          </div>

          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#172033] rounded-full opacity-20" />
        </div>
      </div>
    </motion.div>
  );
}
