"use client";

import { ExternalLink } from "lucide-react";
import type { Project } from "@/lib/types";

interface Props {
  project: Project;
}

export default function ProjectLinks({ project }: Props) {
  if (!project.links || project.links.length === 0) return null;

  return (
    <section className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap gap-4">
          {project.links.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-medium text-white/60 transition-all duration-300 hover:border-white/30 hover:text-white"
            >
              {link.label}
              <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
