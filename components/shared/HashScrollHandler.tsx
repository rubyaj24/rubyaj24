"use client";

import { useEffect, useRef } from "react";

export default function HashScrollHandler() {
  const initialScrolled = useRef(false);

  useEffect(() => {
    const container = document.querySelector(".scroll-container") as HTMLElement | null;
    if (!container) return;

    const scrollToHash = (hash: string) => {
      const id = hash.replace("#", "");
      const target = document.getElementById(id);
      if (target) {
        const top = target.offsetTop;
        container.scrollTo({ top, behavior: "smooth" });
      }
    };

    if (!initialScrolled.current) {
      initialScrolled.current = true;
      const hash = window.location.hash;
      if (hash) {
        setTimeout(() => scrollToHash(hash), 100);
      }
    }

    const handleClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest("a");
      if (!a) return;

      const href = a.getAttribute("href");
      if (!href || !href.startsWith("/#") || href.startsWith("/#!")) return;

      const hash = href.replace("/", "");
      const id = hash.replace("#", "");
      const target = document.getElementById(id);
      if (target) {
        e.preventDefault();
        window.history.pushState(null, "", href);
        scrollToHash(hash);
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
