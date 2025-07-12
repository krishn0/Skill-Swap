import React from "react";
import { motion, useAnimation } from "framer-motion";

const GirlCharacterWithFrockAndDialog = ({ dialogue = "Hello! I'm talking." }) => {
  const controls = useAnimation();

  React.useEffect(() => {
    const interval = setInterval(() => {
      controls.start({
        d: [
          "M75 95 Q100 120 125 95",  // smile
          "M75 95 Q100 135 125 95"   // open mouth
        ],
        transition: { duration: 0.3 }
      });
    }, 500);
    return () => clearInterval(interval);
  }, [controls]);

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-[#0E0E1C] text-white font-['Inter'] p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className="relative backdrop-blur-xl bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.12)] rounded-3xl p-8 shadow-[0_0_30px_rgba(138,99,247,0.1)]"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.03, boxShadow: "0 0 8px #8A63F7" }}
      >
        <svg
          width="250"
          height="350"
          viewBox="0 0 200 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Curly Hair */}
          {Array.from({ length: 14 }).map((_, i) => {
            const angle = (Math.PI * 2 * i) / 14;
            const x = 100 + Math.cos(angle) * 50;
            const y = 80 + Math.sin(angle) * 50;
            return <circle key={i} cx={x} cy={y} r="12" fill="#4B3832" />;
          })}

          {/* Face */}
          <circle cx="100" cy="80" r="45" fill="#FFD1DC" stroke="#333" strokeWidth="2" />

          {/* Eyes */}
          <circle cx="85" cy="75" r="6" fill="#333" />
          <circle cx="115" cy="75" r="6" fill="#333" />

          {/* Mouth (animated) */}
          <motion.path
            d="M75 95 Q100 120 125 95"
            stroke="#333"
            strokeWidth="3"
            fill="transparent"
            animate={controls}
          />

          {/* Frock */}
          <path
            d="M70 130 L130 130 Q140 200 60 200 Z"
            fill="#FF4F81"
            stroke="#333"
            strokeWidth="2"
          />

          {/* Arms */}
          <line x1="70" y1="140" x2="40" y2="180" stroke="#333" strokeWidth="4" />
          <line x1="130" y1="140" x2="160" y2="180" stroke="#333" strokeWidth="4" />

          {/* Legs */}
          <line x1="85" y1="200" x2="85" y2="260" stroke="#333" strokeWidth="4" />
          <line x1="115" y1="200" x2="115" y2="260" stroke="#333" strokeWidth="4" />
        </svg>

        {/* Dialogue Box */}
        <motion.div
          className="absolute -top-12 -right-48 w-56 bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.12)] rounded-2xl p-4 shadow-lg text-sm text-white backdrop-blur-xl"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="mb-2">{dialogue}</div>
          <div className="absolute -left-3 top-4 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-r-8 border-r-[rgba(255,255,255,0.05)]"></div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default GirlCharacterWithFrockAndDialog;
