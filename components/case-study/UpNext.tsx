"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { projects } from "@/lib/data/projects";
import type { Project } from "@/lib/types";

interface Props {
  current: Project;
}

export default function UpNext({ current }: Props) {
  const currentIndex = projects.findIndex((p) => p.slug === current.slug);
  const prev = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const next =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  if (!prev && !next) return null;

  return (
    <section className="border-t border-white/5 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between gap-6">
          {prev ? (
            <Link
              href={`/case-studies/${prev.slug}`}
              className="group flex flex-col items-start gap-2 text-left"
            >
              <span className="flex items-center gap-1 text-xs text-white/30">
                <ArrowLeft className="h-3 w-3" />
                Previous
              </span>
              <span className="text-sm font-medium text-white/60 transition-colors group-hover:text-white">
                {prev.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {next && (
            <Link
              href={`/case-studies/${next.slug}`}
              className="group flex flex-col items-end gap-2 text-right"
            >
              <span className="flex items-center gap-1 text-xs text-white/30">
                Up next
                <ArrowRight className="h-3 w-3" />
              </span>
              <span className="text-sm font-medium text-white/60 transition-colors group-hover:text-white">
                {next.title}
              </span>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
