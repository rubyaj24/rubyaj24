"use client";

import { useRef, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface Props {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export default function ParallaxBg({ children, speed = 0.3, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const y = useMotionValue(0);
  const smoothY = useSpring(y, { stiffness: 200, damping: 30 });

  useEffect(() => {
    const container = document.querySelector(".scroll-container") as HTMLElement | null;
    const target = container ?? window;

    const onScroll = () => {
      const rect = ref.current?.getBoundingClientRect();
      if (!rect) return;

      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const offset = (elementCenter - viewportCenter) * speed;

      y.set(offset);
    };

    onScroll();
    target.addEventListener("scroll", onScroll, { passive: true });
    return () => target.removeEventListener("scroll", onScroll);
  }, [speed, y]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y: smoothY }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}
