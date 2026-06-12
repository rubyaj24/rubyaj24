"use client";

import type { Project } from "@/lib/types";

interface Props {
  project: Project;
}

export default function Gallery({ project }: Props) {
  return (
    <section className="border-t border-white/5 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-2xl font-bold tracking-tight md:text-3xl">
          UI Design / Final Visuals
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.gallery.map((src, i) => (
            <div
              key={i}
              className="group relative aspect-video overflow-hidden rounded-xl"
            >
              <img
                src={src}
                alt={`${project.title} visual ${i + 1}`}
                className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
