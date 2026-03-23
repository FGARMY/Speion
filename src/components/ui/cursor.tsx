"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 30, stiffness: 500, mass: 0.2 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setMounted(true);
    const touchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(touchDevice);

    if (touchDevice) return;
    
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isVisible]);

  if (!mounted || isTouchDevice) return null;

  return (
    <>
      {/* Main Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-foreground rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
      />
      {/* Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border-[0.5px] border-foreground rounded-full pointer-events-none z-[9998] mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 0.5 : 0,
        }}
      />
    </>
  );
}

