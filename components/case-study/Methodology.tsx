"use client";

import { ClipboardCheck, Users, Palette, Code2 } from "lucide-react";
import type { Project } from "@/lib/types";

const methodIcons: Record<string, typeof ClipboardCheck> = {
  Research: ClipboardCheck,
  "User Research": Users,
  "UX Design": Palette,
  "UI Design": Palette,
  Design: Palette,
  "Concept & Planning": ClipboardCheck,
  Development: Code2,
  "Technical Implementation": Code2,
  Audit: ClipboardCheck,
  "UI Design / Visual Style": Palette,
  "Information Architecture": ClipboardCheck,
};

interface Props {
  project: Project;
}

function IconForMethod(title: string) {
  for (const [key, Icon] of Object.entries(methodIcons)) {
    if (title.startsWith(key)) return <Icon className="h-5 w-5 text-white/30" />;
  }
  return <ClipboardCheck className="h-5 w-5 text-white/30" />;
}

export default function Methodology({ project }: Props) {
  return (
    <section className="border-t border-white/5 px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-12 inline-flex items-center gap-3 text-2xl font-bold tracking-tight md:text-3xl">
          Process & Methodology
        </h2>
        <div className="space-y-12">
          {project.methodology.map((item) => (
            <div key={item.title}>
              <h3 className="mb-3 inline-flex items-center gap-3 text-lg font-semibold">
                {IconForMethod(item.title)}
                {item.title}
              </h3>
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
