"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ParallaxBg from "@/components/shared/ParallaxBg";
import type { Project } from "@/lib/types";

interface Props {
  project: Project;
  index: number;
}

export default function FeaturedProjectSection({ project, index }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20%" });
  const featuredBackground = project.mockupImage ?? project.heroImage;

  return (
    <section
      id={`project-${project.slug}`}
      ref={ref}
      className="scroll-section relative flex h-screen w-full items-center justify-center overflow-hidden"
      style={{ backgroundColor: project.color }}
    >
      <ParallaxBg speed={0.3} className="absolute inset-0 pointer-events-none">
        <div
          className="h-full w-full bg-center bg-no-repeat opacity-35"
          style={{
            backgroundImage: `url(${featuredBackground})`,
            backgroundSize: "min(72vw, 980px) auto",
          }}
        />
      </ParallaxBg>
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/30 to-black/70 pointer-events-none" />

      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none text-[clamp(8rem,25vw,22rem)] font-black leading-none tracking-tighter"
        style={{
          WebkitTextFillColor: "transparent",
          WebkitTextStroke: "1px rgba(255,255,255,0.06)",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </motion.span>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-8 md:px-12">
        <div className="max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-white/40"
          >
            <span className="inline-block h-px w-8 bg-white/30" />
            Featured Project
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.7, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mb-5 text-5xl font-display font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl"
          >
            {project.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.38, ease: "easeOut" }}
            className="mb-10 max-w-md text-base leading-relaxed text-white/60 md:text-lg"
          >
            {project.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.52, ease: "easeOut" }}
          >
            <Link
              href={`/case-studies/${project.slug}`}
              className="group relative inline-flex items-center gap-3 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold tracking-wide text-white/80 transition-all duration-300 hover:border-white/30 hover:text-white"
            >
              <span className="absolute inset-0 rounded-full bg-white/2 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative">VIEW CASE STUDY</span>
              <ArrowUpRight className="relative h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={
          isInView
            ? {
                opacity: [0, 1, 0, 1, 0, 1, 0.85],
                textShadow: [
                  "0 0 0px rgba(255,255,255,0)",
                  "0 0 30px rgba(255,255,255,0.6)",
                  "0 0 0px rgba(255,255,255,0)",
                  "0 0 25px rgba(255,255,255,0.5)",
                  "0 0 0px rgba(255,255,255,0)",
                  "0 0 15px rgba(255,255,255,0.3)",
                  "0 0 0px rgba(255,255,255,0)",
                ],
              }
            : { opacity: 0 }
        }
        transition={{
          duration: 1.2,
          delay: 0.7,
          times: [0, 0.15, 0.25, 0.4, 0.5, 0.65, 1],
          ease: "easeInOut",
        }}
        className="absolute bottom-10 left-0 right-0 mx-auto max-w-7xl px-8 md:px-12"
      >
        <div className="flex flex-wrap items-center gap-3 md:flex-nowrap md:gap-4">
          <div className="hidden h-px flex-1 bg-white/6 md:block" />
          <span className="text-xs font-medium tracking-wider text-white/30 uppercase">
            {project.category}
          </span>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 2).map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/6 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-widest text-white/25"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
