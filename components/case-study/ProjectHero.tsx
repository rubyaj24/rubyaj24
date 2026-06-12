"use client";

import type { Project } from "@/lib/types";

interface Props {
  project: Project;
}

export default function ProjectHero({ project }: Props) {
  const heroVisual = project.mockupImage ?? project.heroImage;

  return (
    <section className="relative">
      <div
        className="pointer-events-none absolute inset-0 bg-center bg-no-repeat opacity-15"
        style={{
          backgroundImage: `url(${heroVisual})`,
          backgroundSize: "min(68vw, 920px) auto",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />

      <div className="mx-auto max-w-7xl px-6 pt-28 pb-8">
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

        <h1 className="mb-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
          {project.tagline}
        </h1>
      </div>

      <div className="aspect-video w-full overflow-hidden">
        {project.heroVideo ? (
          <video
            src={project.heroVideo}
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            src={heroVisual}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        )}
      </div>
    </section>
  );
}
