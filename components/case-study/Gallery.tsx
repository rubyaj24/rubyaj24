"use client";

import type { Project } from "@/lib/types";

interface Props {
  project: Project;
}

function isVideoItem(item: string | { src: string; type: "image" | "video" }): boolean {
  if (typeof item === "object") return item.type === "video";
  return /\.(mp4|webm|mov|avi|mkv)(\?|$)/i.test(item);
}

function getSrc(item: string | { src: string; type: "image" | "video" }): string {
  return typeof item === "string" ? item : item.src;
}

export default function Gallery({ project }: Props) {
  return (
    <section className="border-t border-white/5 px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 inline-flex items-center gap-3 text-2xl font-bold tracking-tight md:text-3xl">
          UI Design / Final Visuals
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {project.gallery.map((item, i) => {
            const src = getSrc(item);
            const isVideo = isVideoItem(item);

            return (
              <div
                key={i}
                className="group relative aspect-video overflow-hidden rounded-xl"
              >
                {isVideo ? (
                  <video
                    src={src}
                    className="h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={src}
                    alt={`${project.title} visual ${i + 1}`}
                    className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
