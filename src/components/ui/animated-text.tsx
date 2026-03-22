"use client";

import { motion } from "framer-motion";

export function AnimatedText({ text, className }: { text: string; className?: string }) {
  return (
    <motion.span
      className={className}
      initial={{ backgroundPosition: "0% 50%" }}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      style={{
        backgroundImage: "linear-gradient(to right, #ff4794, #6c47ff, #47ffff, #ff4794)",
        backgroundSize: "300% 100%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        display: "inline-block",
      }}
    >
      {text}
    </motion.span>
  );
}
