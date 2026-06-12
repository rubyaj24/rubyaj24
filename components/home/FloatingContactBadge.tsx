"use client";

import Link from "next/link";

export default function FloatingContactBadge() {
  return (
    <Link
      href="https://wa.me/+918848799145"
      className="group fixed bottom-8 right-8 z-40 flex h-16 w-16 items-center justify-center rounded-full bg-white/[0.03] backdrop-blur-md border border-white/[0.08] shadow-lg transition-all duration-500 hover:scale-110 hover:border-white/20 hover:bg-white/[0.06]"
    >
      <span className="text-[9px] font-bold tracking-[0.15em] text-white/60 transition-colors duration-300 group-hover:text-white">
        TALK
      </span>
    </Link>
  );
}
