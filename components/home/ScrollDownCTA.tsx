"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ScrollDownCTA() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const about = document.querySelector("#about");
    if (!about) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );
    observer.observe(about);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ delay: 3.0, duration: 0.4, ease: "easeOut" }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2"
        >
          <span className="text-sm font-medium text-white/15 tracking-wide">
            Scroll
          </span>
          <motion.svg
            width="16" height="24" viewBox="0 0 16 24" fill="none"
            className="text-white/15"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <rect x="1.5" y="1.5" width="13" height="21" rx="6.5" stroke="currentColor" strokeWidth="1.5" />
            <motion.circle
              cx="8" cy="8" r="2" fill="currentColor"
              animate={{ cy: [8, 16, 8] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
