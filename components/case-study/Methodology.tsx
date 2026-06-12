"use client";

import type { Project } from "@/lib/types";

interface Props {
  project: Project;
}

export default function Methodology({ project }: Props) {
  return (
    <section className="border-t border-white/5 px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 text-2xl font-bold tracking-tight md:text-3xl">
          Process & Methodology
        </h2>
        <div className="space-y-12">
          {project.methodology.map((item) => (
            <div key={item.title}>
              <h3 className="mb-3 text-lg font-semibold">{item.title}</h3>
              <p className="text-base leading-relaxed text-white/50">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
