"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, type Target } from "framer-motion";
import Image from "next/image";

export default function InitialLoader() {
  const [phase, setPhase] = useState<"show" | "shrink" | "fade" | "hide">("show");
  const target = useRef({ x: 0, y: 0, scaleX: 1, scaleY: 1 });
  const [anim, setAnim] = useState<Target | null>(null);
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const logo = document.querySelector("[data-loader-target]");
    if (!logo) return;
    const lRect = logo.getBoundingClientRect();
    const cSize = Math.max(lRect.width, lRect.height) + 16;
    const lCX = lRect.left + lRect.width / 2;
    const lCY = lRect.top + lRect.height / 2;

    target.current = {
      x: lCX - window.innerWidth / 2,
      y: lCY - window.innerHeight / 2,
      scaleX: cSize / window.innerWidth,
      scaleY: cSize / window.innerHeight,
    };

    const t1 = setTimeout(() => setPhase("shrink"), 1200);
    const t2 = setTimeout(() => setPhase("fade"), 2000);
    const t3 = setTimeout(() => setPhase("hide"), 2800);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  useEffect(() => {
    if (phase !== "shrink") return;
    setAnim({
      x: target.current.x,
      y: target.current.y,
      scaleX: target.current.scaleX,
      scaleY: target.current.scaleY,
      borderRadius: "50%",
    });
  }, [phase]);

  return (
    <AnimatePresence>
      {phase !== "hide" && (
        <motion.div
          ref={elRef}
          className="fixed inset-0 z-100 flex items-center justify-center bg-black"
          initial={false}
          animate={
            phase === "fade"
              ? { ...target.current, borderRadius: "50%", opacity: 0 }
              : (anim ?? {})
          }
          transition={
            phase === "fade"
              ? { opacity: { delay: 0.35, duration: 0.4, ease: "easeInOut" } }
              : { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
          }
        >
          <motion.div
            animate={phase === "fade" ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
          >
            <Image
              src="/images/AJ.png"
              alt="AJ"
              width={320}
              height={116}
              className="h-auto w-48 object-contain md:w-80"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
