"use client";

import type { Project } from "@/lib/types";

interface Props {
  project: Project;
}

export default function Overview({ project }: Props) {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-bold tracking-tight md:text-3xl">
              Overview
            </h2>
            <p className="text-base leading-relaxed text-white/60">
              {project.overview}
            </p>
          </div>
          <div className="aspect-video overflow-hidden rounded-xl">
            <img
              src={project.heroImage}
              alt={`${project.title} overview`}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
