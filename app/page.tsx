"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { featuredProjects } from "@/lib/data/projects";
import FeaturedProjectSection from "@/components/home/FeaturedProjectSection";
import ProjectNav from "@/components/home/ProjectNav";
import FloatingContactBadge from "@/components/home/FloatingContactBadge";
import Footer from "@/components/shared/Footer";
import ParallaxBg from "@/components/shared/ParallaxBg";

const skills = [
  { label: "UI/UX Design", desc: "User research, wireframing, prototyping, visual design" },
  { label: "Frontend Dev", desc: "React, Next.js, TypeScript, Tailwind CSS" },
  { label: "Videography", desc: "Cinematography, storytelling, event coverage" },
  { label: "Video Editing", desc: "Post-production, motion graphics, color grading" },
  { label: "Graphic Design", desc: "Brand identity, social media content, print design" },
  { label: "Web Development", desc: "Full-stack, APIs, CMS integration" },
];

const faqs = [
  { q: "What's your design process?", a: "I start with research and discovery, move to wireframing and prototyping, then iterate through visual design before development. Every project begins with understanding the problem and the people I'm designing for." },
  { q: "Do you take freelance work?", a: "Yes — I'm always open to interesting projects. Reach out via the contact section or email me directly." },
  { q: "Can you handle both design and development?", a: "Absolutely. I work across the full spectrum — from UX research and visual design to frontend implementation. This combined skillset means fewer handoffs and a more cohesive final product." },
  { q: "What tools do you use?", a: "Figma, Adobe Creative Suite (Premiere Pro, After Effects, Photoshop), VS Code, Next.js, React, Tailwind CSS, and Blender for 3D work." },
];

function FadeIn({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function SectionHeading({ label, title }: { label: string; title: string }) {
  return (
    <FadeIn>
      <div className="mb-14 max-w-3xl">
        <span className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
          <span className="inline-block h-px w-6 bg-white/20" />
          {label}
        </span>
        <h2 className="font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">
          {title}
        </h2>
      </div>
    </FadeIn>
  );
}

export default function HomePage() {
  return (
    <>
      <ParallaxBg speed={0.15} className="bg-glow">
        <div className="bg-orb" />
        <div className="bg-orb" />
        <div className="bg-orb" />
      </ParallaxBg>

      <div className="scroll-container">
        {/* About */}
        <section id="about" className="scroll-section relative flex min-h-screen items-center px-6 py-28">
          <div className="mx-auto w-full max-w-7xl">
            <SectionHeading label="About Me" title="Designer, Developer, Storyteller" />
            <div className="grid gap-8 md:grid-cols-[1.3fr_1fr] md:items-start">
              <FadeIn>
                <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 md:p-9">
                  <p className="text-base leading-relaxed text-white/70 md:text-lg">
                    I am Amaljith, a multi-disciplinary creator blending UI/UX design,
                    frontend development, videography, and editing to build digital
                    experiences that feel fast, clear, and human.
                  </p>
                  <p className="mt-5 text-sm leading-relaxed text-white/50 md:text-base">
                    My process starts with understanding the problem deeply, then shaping
                    the right visual language and interactions before building polished,
                    responsive interfaces. I care about both craft and performance.
                  </p>
                </div>
              </FadeIn>
              
              <div className="grid gap-5">
                <FadeIn delay={0.08}>
                  <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02]">
                    <Image
                      src="/images/amaljith.png"
                      alt="Portrait of Amaljith"
                      width={960}
                      height={1200}
                      className="h-full w-full object-cover object-top"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      priority
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
          </div>
        </section>

        {featuredProjects.map((project, i) => (
          <FeaturedProjectSection
            key={project.slug}
            project={project}
            index={i}
          />
        ))}

        {/* Selected Work */}
        <section id="work" className="scroll-section relative flex min-h-screen items-center px-6 py-28">
          <div className="mx-auto w-full max-w-7xl">
            <FadeIn>
              <div className="mb-14">
                <span className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
                  <span className="inline-block h-px w-6 bg-white/20" />
                  Selected Work
                </span>
                <div className="flex items-end justify-between">
                  <h2 className="font-display text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                    Recent Projects
                  </h2>
                  <Link
                    href="/case-studies"
                    className="group hidden items-center gap-2 text-sm font-medium text-white/40 transition-colors hover:text-white md:flex"
                  >
                    View all
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </FadeIn>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredProjects.map((project, i) => (
                <FadeIn key={project.slug} delay={i * 0.08} className="h-full">
                  <Link
                    href={`/case-studies/${project.slug}`}
                    className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.04] bg-white/[0.02] transition-all duration-500 hover:border-white/[0.1] hover:-translate-y-1"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.heroImage}
                        alt={project.title}
                        className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm transition-all duration-500 group-hover:scale-110">
                          <ArrowUpRight className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-3 flex flex-wrap gap-2">
                        {project.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/[0.06] px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.15em] text-white/35"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="font-display text-lg font-bold">{project.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-white/40 line-clamp-2">
                        {project.tagline}
                      </p>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
            <FadeIn delay={0.2}>
              <div className="mt-10 text-center md:hidden">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white/50 transition-all hover:border-white/20 hover:text-white"
                >
                  View all projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

        <ProjectNav projects={featuredProjects} />
        <FloatingContactBadge />

        {/* Services */}
        <section id="services" className="scroll-section relative flex min-h-screen items-center px-6 py-28">
          <div className="mx-auto w-full max-w-7xl">
            <SectionHeading label="What I Do" title="Services & Expertise" />
            <div className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {skills.map((skill, i) => (
                <FadeIn key={skill.label} delay={i * 0.06} className="h-full">
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.04] bg-white/[0.02] p-7 transition-all duration-500 hover:border-white/[0.1] hover:bg-white/[0.04]">
                    <div className="absolute top-0 right-0 -mt-6 -mr-6 h-24 w-24 rounded-full bg-gradient-to-br from-purple-600/10 to-pink-600/5 blur-2xl transition-all duration-500 group-hover:from-purple-500/20 group-hover:to-pink-500/10" />
                    <span className="relative mb-4 block text-3xl font-black text-white/[0.04]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display relative mb-2 text-lg font-bold">{skill.label}</h3>
                    <p className="relative text-sm leading-relaxed text-white/40">
                      {skill.desc}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        

        {/* FAQ */}
        <section className="scroll-section relative flex min-h-screen items-center px-6 py-28">
          <div className="mx-auto w-full max-w-3xl">
            <SectionHeading label="FAQ" title="Common Questions" />
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <FadeIn key={faq.q} delay={i * 0.05}>
                  <details className="group rounded-2xl border border-white/[0.04] bg-white/[0.01] transition-all duration-300 hover:border-white/[0.08] [&[open]]:border-white/[0.08]">
                    <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-left text-sm font-semibold transition-colors">
                      {faq.q}
                      <span className="ml-6 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-white/[0.06] text-xs text-white/30 transition-all duration-300 group-open:rotate-45 group-open:border-white/20 group-open:text-white/60">
                        +
                      </span>
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-sm leading-relaxed text-white/40">
                        {faq.a}
                      </p>
                    </div>
                  </details>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="scroll-section relative flex min-h-screen items-center px-6 py-28">
          <div className="mx-auto w-full max-w-2xl text-center">
            <FadeIn>
              <span className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
                <span className="inline-block h-px w-6 bg-white/20" />
                Get in Touch
              </span>
              <h2 className="font-display mb-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
                Let&apos;s work<br /><span className="text-8xl font-serif italic">together</span>
              </h2>
              <p className="mx-auto mb-12 max-w-md text-base leading-relaxed text-white/40">
                I&apos;m always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
              <Link
                href="mailto:amaljithmvinod@gmail.com"
                className="group relative inline-flex items-center gap-3 rounded-full border border-white/[0.15] px-8 py-4 text-sm font-semibold tracking-wide text-white/80 transition-all duration-300 hover:border-white/30 hover:text-white"
              >
                <span className="absolute inset-0 rounded-full bg-white/[0.02] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="relative">Send a message</span>
                <ArrowUpRight className="relative h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </FadeIn>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
