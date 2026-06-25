import { notFound } from "next/navigation";
import { projects } from "@/lib/data/projects";
import ClientCaseStudy from "./client";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function CaseStudyPage({ params, }: { params: Promise<{ slug: string }>; }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  return <ClientCaseStudy project={project} />;
}
