"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data/projects";
import Footer from "@/components/shared/Footer";

const allCategories = [
  "All",
  ...Array.from(new Set(projects.flatMap((p) => p.tags))),
];

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.tags.includes(activeCategory));

  return (
    <div className="min-h-screen px-6 pt-28 pb-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-2 inline-block text-xs font-medium uppercase tracking-[0.2em] text-white/40">
            Portfolio
          </span>
          <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-6xl">
            Case Studies
          </h1>
          <p className="mb-12 max-w-lg text-base leading-relaxed text-white/50">
            A curated selection of projects spanning UI/UX design, frontend
            development, videography, and branding.
          </p>
        </motion.div>

        {/* Filter */}
        <div className="mb-10 flex flex-wrap gap-2">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? "border-white/30 bg-white/10 text-white"
                  : "border-white/10 text-white/40 hover:border-white/20 hover:text-white/70"
              }`}
            >
              {cat.toLowerCase()}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pb-16">
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={`/case-studies/${project.slug}`}
                className="group block overflow-hidden rounded-xl border border-white/5 bg-white/[0.02] transition-all duration-300 hover:border-white/10"
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={project.heroImage}
                    alt={project.title}
                    className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/30">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/0 text-white/0 transition-all duration-300 group-hover:border-white/40 group-hover:text-white">
                      <ArrowUpRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
                <div className="p-5">
                  <div className="mb-2 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="mt-1 text-sm text-white/50 line-clamp-2">
                    {project.tagline}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
