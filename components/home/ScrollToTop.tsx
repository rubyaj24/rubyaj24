"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const container = document.querySelector(".scroll-container") as HTMLElement | null;

    const onScroll = () => {
      if (container) {
        setVisible(container.scrollTop > 400);
      } else {
        setVisible(window.scrollY > 400);
      }
    };

    if (container) {
      container.addEventListener("scroll", onScroll, { passive: true });
      return () => container.removeEventListener("scroll", onScroll);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const container = document.querySelector(".scroll-container") as HTMLElement | null;
    if (container) {
      container.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] backdrop-blur-md transition-colors duration-300 hover:border-white/20 hover:bg-white/[0.06]"
        >
          <ArrowUp className="h-4 w-4 text-white/60" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
