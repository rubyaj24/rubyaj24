"use client";

import type { Project } from "@/lib/types";

interface Props {
  project: Project;
}

function getSrc(item: string | { src: string; type: "image" | "video" }): string {
  return typeof item === "string" ? item : item.src;
}

function isVideoItem(item: string | { src: string; type: "image" | "video" }): boolean {
  if (typeof item === "object") return item.type === "video";
  return /\.(mp4|webm|mov|avi|mkv)(\?|$)/i.test(item);
}

export default function Conclusion({ project }: Props) {
  const last = project.gallery[project.gallery.length - 1];

  return (
    <section className="border-t border-white/5 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 inline-flex items-center gap-3 text-2xl font-bold tracking-tight md:text-3xl">
          Conclusion
        </h2>
        <p className="mb-10 max-w-2xl text-base leading-relaxed text-white/60">
          {project.conclusion}
        </p>
        <div className="aspect-video overflow-hidden rounded-xl">
          {isVideoItem(last) ? (
            <video
              src={getSrc(last)}
              className="h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              src={getSrc(last)}
              alt="Final result"
              className="h-full w-full object-cover"
            />
          )}
        </div>
      </div>
    </section>
  );
}
