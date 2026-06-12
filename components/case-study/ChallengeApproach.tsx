"use client";

import type { Project } from "@/lib/types";

interface Props {
  project: Project;
}

export default function ChallengeApproach({ project }: Props) {
  return (
    <section className="border-t border-white/5 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-2xl font-bold tracking-tight md:text-3xl">
              The Challenge
            </h2>
            <ul className="space-y-3">
              {project.challenge.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-2xl font-bold tracking-tight md:text-3xl">
              The Approach
            </h2>
            <ul className="space-y-3">
              {project.approach.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/60">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/30" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
