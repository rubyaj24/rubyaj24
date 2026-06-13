"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ClipboardCheck, Users, Palette, Code2 } from "lucide-react";
import type { Project } from "@/lib/types";

const methodIcons: Record<string, typeof ClipboardCheck> = {
  Research: ClipboardCheck,
  "User Research": Users,
  "UX Design": Palette,
  "UI Design": Palette,
  Design: Palette,
  "Concept & Planning": ClipboardCheck,
  Development: Code2,
  "Technical Implementation": Code2,
  Audit: ClipboardCheck,
  "UI Design / Visual Style": Palette,
  "Information Architecture": ClipboardCheck,
};

interface Props {
  project: Project;
}

function IconForMethod(title: string) {
  for (const [key, Icon] of Object.entries(methodIcons)) {
    if (title.startsWith(key)) return <Icon className="h-4 w-4 text-white/20" />;
  }
  return <ClipboardCheck className="h-4 w-4 text-white/20" />;
}

function MethodCard({
  item,
  index,
}: {
  item: Project["methodology"][0];
  index: number;
}) {
  const ref = useRef(null);
  const dotRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isInViewDot = useInView(dotRef, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="relative pl-10 md:pl-16">
      <motion.div
        ref={dotRef}
        initial={{ scale: 0 }}
        animate={isInViewDot ? { scale: 1 } : {}}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.1 }}
        className="absolute left-1.75 top-6 z-10 flex h-2.5 w-2.5 items-center justify-center rounded-full border border-white/30 bg-white/10 md:left-[7px]"
      >
        <div className="h-1 w-1 rounded-full bg-white/40" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      >
        <div className="group w-auto rounded-xl border border-white/[0.04] bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/[0.1]">
          <div className="mb-3 flex items-center gap-2">
            {IconForMethod(item.title)}
            <span className="text-[10px] font-medium uppercase tracking-widest text-white/15">
              Phase {String(index + 1).padStart(2, "0")}
            </span>
          </div>
          <h3 className="mb-2 text-sm font-semibold">{item.title}</h3>
          <p className="text-xs leading-relaxed text-white/40">{item.description}</p>
        </div>
      </motion.div>
    </div>
  );
}

export default function Methodology({ project }: Props) {
  return (
    <section className="border-t border-white/5 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 inline-flex items-center gap-3 text-2xl font-bold tracking-tight md:text-3xl">
          Process & Methodology
        </h2>
        <div className="relative">
          <div className="absolute left-[10px] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:left-[10px]" />
          <div className="relative space-y-6">
            {project.methodology.map((item, i) => (
              <MethodCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
