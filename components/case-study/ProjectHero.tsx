"use client";

import ParallaxBg from "@/components/shared/ParallaxBg";
import type { Project } from "@/lib/types";

interface Props {
  project: Project;
}

export default function ProjectHero({ project }: Props) {
  return (
    <section
      className="relative min-h-[85vh] flex flex-col"
      style={{ backgroundColor: project.color }}
    >
      <ParallaxBg speed={0.25} className="absolute inset-0 overflow-hidden">
        <div
          className="h-full w-full bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${project.heroImage})` }}
        />
      </ParallaxBg>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-end px-6 pt-28 pb-8">
        <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          {project.tagline}
        </h1>
        <div className="mb-6 flex flex-wrap gap-x-8 gap-y-2 text-xs text-white/40">
          <span>{project.category}</span>
          <span>{project.duration}</span>
          <span>{project.date}</span>
          {project.location && <span>{project.location}</span>}
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {project.mockupImage && (
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-8" style={{ marginTop: "-3rem" }}>
          <div className="overflow-hidden">
            <img
              src={project.mockupImage}
              alt={`${project.title} mockup`}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
}
