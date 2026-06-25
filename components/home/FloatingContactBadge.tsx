"use client";

import Link from "next/link";
import { Phone } from "lucide-react";

function AudioBar({ delay }: { delay: number }) {
  return (
    <span
      className="block w-[3px] rounded-full bg-white/60 transition-all duration-300 group-hover:opacity-0"
      style={{
        animation: "audioLine 0.8s ease-in-out infinite alternate",
        animationDelay: `${delay}s`,
        height: "12px",
      }}
    />
  );
}

export default function FloatingContactBadge() {
  return (
    <Link
      href="https://wa.me/+918848799145"
      className="group fixed bottom-8 right-8 z-40 flex h-16 w-16 items-center justify-center gap-[2.5px] rounded-full bg-white/[0.03] backdrop-blur-md border border-white/[0.08] shadow-lg transition-all duration-500 hover:scale-110 hover:border-white/20 hover:bg-white/[0.06]"
    >
      <AudioBar delay={0} />
      <AudioBar delay={0.15} />
      <AudioBar delay={0.3} />
      <AudioBar delay={0.1} />
      <Phone className="absolute h-5 w-5 text-white/60 opacity-0 transition-all duration-300 group-hover:opacity-100" />
      <style>{`
        @keyframes audioLine {
          0% { height: 8px; }
          100% { height: 20px; }
        }
      `}</style>
    </Link>
  );
}
