"use client";

import type { Project } from "@/lib/types";

interface Props {
  project: Project;
}

export default function ProcessSteps({ project }: Props) {
  return (
    <section className="border-t border-white/5 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-2xl font-bold tracking-tight md:text-3xl">
          Project Process
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
          {project.process.map((step, i) => (
            <div
              key={step.title}
              className="rounded-xl border border-white/5 bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/10"
            >
              <span className="mb-3 block text-2xl font-bold text-white/20">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mb-2 text-sm font-semibold">{step.title}</h3>
              {step.description && (
                <p className="text-xs leading-relaxed text-white/40">
                  {step.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
