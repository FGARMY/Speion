"use client";

import { motion } from "framer-motion";

export const Marquee = () => {
  const text = " DIGITAL EXCELLENCE • STRATEGIC DESIGN • MEASURABLE GROWTH • PREMIUM QUALITY • ";
  
  return (
    <div className="relative w-full overflow-hidden bg-primary py-5 -rotate-2 transform-gpu scale-105 z-20 shadow-[0_0_40px_-5px_rgba(108,71,255,0.4)] my-10">
      <div className="flex whitespace-nowrap">
        <motion.div
           className="flex font-black text-2xl md:text-3xl tracking-widest text-primary-foreground uppercase"
           animate={{
             x: [0, -1000],
           }}
           transition={{
             repeat: Infinity,
             ease: "linear",
             duration: 10,
           }}
        >
           <span className="shrink-0 px-4">{text}</span>
           <span className="shrink-0 px-4">{text}</span>
           <span className="shrink-0 px-4">{text}</span>
        </motion.div>
      </div>
    </div>
  );
}
