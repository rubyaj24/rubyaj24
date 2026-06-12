"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/types";

interface Props {
  projects: Project[];
}

export default function ProjectNav({ projects }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isInProjectSections, setIsInProjectSections] = useState(false);

  useEffect(() => {
    const visibleProjects = new Set<string>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const idx = projects.findIndex(
              (p) => `project-${p.slug}` === entry.target.id
            );
            if (idx !== -1) setActiveIndex(idx);
            visibleProjects.add(entry.target.id);
          } else {
            visibleProjects.delete(entry.target.id);
          }
        }

        setIsInProjectSections(visibleProjects.size > 0);
      },
      { threshold: 0.4 }
    );

    const sections = projects.map(
      (p) => document.getElementById(`project-${p.slug}`)
    );
    for (const el of sections) {
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, [projects]);

  return (
    <nav
      className={cn(
        "fixed right-8 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-end gap-5 transition-all duration-300 md:flex",
        isInProjectSections
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      )}
    >
      {projects.map((project, i) => (
        <a
          key={project.slug}
          href={`#project-${project.slug}`}
          className={cn(
            "group flex items-center gap-3 transition-all duration-500",
            activeIndex === i ? "opacity-100" : "opacity-25 hover:opacity-60"
          )}
        >
          <span
            className={cn(
              "text-right text-xs font-medium transition-all duration-500",
              activeIndex === i
                ? "text-white"
                : "text-white/50"
            )}
          >
            {project.title}
          </span>
          <span
            className={cn(
              "inline-block transition-all duration-500",
              activeIndex === i
                ? "h-8 w-[2px] bg-white"
                : "h-4 w-[1px] bg-white/30 group-hover:h-6"
            )}
          />
        </a>
      ))}
    </nav>
  );
}
