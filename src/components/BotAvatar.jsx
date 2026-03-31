import { motion } from "framer-motion";

export default function BotAvatar({ size = 32, variant = "default" }) {
  const isFab = variant === "fab";

  // High-contrast palette for purple FAB background
  const headFill = isFab ? "#ffffff" : "#1a1a2e";
  const headStroke = isFab ? "rgba(255,255,255,0.3)" : "#6c63ff";
  const eyeFill = isFab ? "#1a1a2e" : "#63ffd9";
  const eyeGlow = isFab ? "rgba(0,0,0,0.15)" : "rgba(99,255,217,0.15)";
  const antennaColor = isFab ? "#ffffff" : "#6c63ff";
  const mouthStroke = isFab ? "#1a1a2e" : "#6c63ff";
  const bodyFill = isFab ? "#ffffff" : "#1a1a2e";
  const bodyStroke = isFab ? "rgba(255,255,255,0.3)" : "#6c63ff";
  const bodyLight = isFab ? "#63ffd9" : "#e563ff";
  const armFill = isFab ? "#ffffff" : "#6c63ff";

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      animate={{ y: [0, -2, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Antenna */}
      <line x1="32" y1="8" x2="32" y2="16" stroke={antennaColor} strokeWidth="2" strokeLinecap="round" />
      <motion.circle
        cx="32" cy="6" r="3"
        fill={antennaColor}
        animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Head */}
      <rect x="14" y="16" width="36" height="28" rx="8" fill={headFill} stroke={headStroke} strokeWidth="1.5" />

      {/* Eyes */}
      <motion.circle
        cx="24" cy="30" r="4"
        fill={eyeFill}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.circle
        cx="40" cy="30" r="4"
        fill={eyeFill}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
      />

      {/* Eye glow */}
      <circle cx="24" cy="30" r="6" fill={eyeGlow} opacity="0.15" />
      <circle cx="40" cy="30" r="6" fill={eyeGlow} opacity="0.15" />

      {/* Mouth */}
      <path d="M26 37 Q32 42 38 37" stroke={mouthStroke} strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Body */}
      <rect x="20" y="46" width="24" height="10" rx="4" fill={bodyFill} stroke={bodyStroke} strokeWidth="1.5" />

      {/* Body light */}
      <motion.circle
        cx="32" cy="51" r="2"
        fill={bodyLight}
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Arms */}
      <motion.rect
        x="8" y="48" width="10" height="4" rx="2"
        fill={armFill} opacity="0.85"
        animate={{ rotate: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        style={{ transformOrigin: "18px 50px" }}
      />
      <motion.rect
        x="46" y="48" width="10" height="4" rx="2"
        fill={armFill} opacity="0.85"
        animate={{ rotate: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
        style={{ transformOrigin: "46px 50px" }}
      />
    </motion.svg>
  );
}
