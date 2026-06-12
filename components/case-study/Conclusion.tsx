"use client";

import type { Project } from "@/lib/types";

interface Props {
  project: Project;
}

export default function Conclusion({ project }: Props) {
  return (
    <section className="border-t border-white/5 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-2xl font-bold tracking-tight md:text-3xl">
          Conclusion
        </h2>
        <p className="mb-10 max-w-2xl text-base leading-relaxed text-white/60">
          {project.conclusion}
        </p>
        <div className="aspect-video overflow-hidden rounded-xl">
          <img
            src={project.gallery[project.gallery.length - 1]}
            alt="Final result"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
