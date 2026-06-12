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
            <h2 className="mb-6 inline-flex items-center gap-3 text-2xl font-bold tracking-tight md:text-3xl">
              Overview
            </h2>
            <p className="text-base leading-relaxed text-white/60">
              {project.overview}
            </p>
            {project.links && project.links.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-4">
                {project.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
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
