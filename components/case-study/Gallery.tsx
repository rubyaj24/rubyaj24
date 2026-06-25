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

function videoType(src: string): string {
  if (src.endsWith(".webm")) return "video/webm";
  if (src.endsWith(".mp4")) return "video/mp4";
  if (src.endsWith(".mov")) return "video/quicktime";
  return "video/mp4";
}

export default function Gallery({ project }: Props) {

  const hasGallery = project.gallery && project.gallery.length > 0;

  if (!hasGallery) {
    return null;
  }
  return (
    <section className="border-t border-white/5 px-6 py-20">
      {hasGallery && (
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
                    className="h-full w-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                  >
                    <source src={src} type={videoType(src)} />
                  </video>
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
      )}
    </section>
  );
}
