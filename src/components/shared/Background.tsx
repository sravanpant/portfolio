"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const Background = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Primary blob */}
      <motion.div
        className="absolute w-[1000px] h-[1000px] rounded-full blur-[80px] opacity-50"
        animate={{
          x: Math.sin(scrollY * 0.001) * 100,
          y: Math.cos(scrollY * 0.001) * 100,
        }}
        transition={{ type: "spring", damping: 50, stiffness: 100 }}
        style={{
          background: "linear-gradient(45deg, #2563eb, #0ea5e9)",
          left: "0%",
          top: "0%",
        }}
      />

      {/* Secondary blob */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full blur-[80px] opacity-30"
        animate={{
          x: Math.cos(scrollY * 0.001) * 100,
          y: Math.sin(scrollY * 0.001) * 100,
        }}
        transition={{ type: "spring", damping: 50, stiffness: 100 }}
        style={{
          background: "linear-gradient(45deg, #1d4ed8, #3b82f6)",
          right: "-20%",
          top: "30%",
        }}
      />

      {/* Tertiary blob */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[80px] opacity-40"
        animate={{
          x: Math.sin(scrollY * 0.001) * -100,
          y: Math.cos(scrollY * 0.001) * -100,
        }}
        transition={{ type: "spring", damping: 50, stiffness: 100 }}
        style={{
          background: "linear-gradient(45deg, #60a5fa, #7dd3fc)",
          left: "30%",
          bottom: "10%",
        }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/50 to-background" />
    </div>
  );
};
