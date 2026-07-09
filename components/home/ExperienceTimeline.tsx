"use client";

import { useRef, useEffect, useCallback } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    role: "Co-Founder",
    company: "Izha",
    date: "2023 — Present",
    description:
      "Founded Izha, a platform for sharing and discovering design resources. Built the web app and designed the user experience.",
  },
  {
    role: "CMO",
    company: "PgBee",
    date: "2026 — Present",
    description:
      "Led marketing and growth strategies for PgBee, a startup focused on educational technology. Managed social media and content creation.",
  },
  {
    role: "Chairperson",
    company: "CETalks",
    date: "2024-present",
    description:
      "Led creative direction and design for CETalks, a student-run TEDx club. Designed event branding and promotional materials.",
  },
  {
    role: "UI/UX Designer & Frontend Developer",
    company: "Mulearn",
    date: "2024 — Present",
    description:
      "Designed and built web applications, led UI/UX design sprints, and contributed to internal design systems.",
  },
  {
    role: "Freelance Designer & Developer",
    company: "Self-Employed",
    date: "2023 — Present",
    description:
      "Worked with startups and individuals on branding, web design, and frontend development projects.",
  },
  {
    role: "Technical Coordinator",
    company: "Sargam'25 (CET Cultural Fest)",
    date: "2024 — 2025",
    description:
      "Coordinated design and tech for Sargam 2025 — CET's official cultural fest. Built the live event tracking platform.",
  },
  {
    role: "Web Development Intern",
    company: "CAFMADS",
    date: "Summer 2023",
    description:
      "Crafted DCE-GFR, a web app for guest faculty recruitment, improving accessibility and user experience.",
  },
  {
    role: "B.Tech in Computer Science",
    company: "College of Engineering, Trivandrum",
    date: "2023 — 2027",
    description:
      "Pursuing a degree in Computer Science with a focus on design and frontend engineering.",
  },
];

// function useScrollSound() {
//   const audioCtxRef = useRef<AudioContext | null>(null);

//   const playTone = useCallback(() => {
//     if (!audioCtxRef.current) {
//       audioCtxRef.current = new AudioContext();
//     }
//     const ctx = audioCtxRef.current;
//     const osc = ctx.createOscillator();
//     const gain = ctx.createGain();
//     osc.connect(gain);
//     gain.connect(ctx.destination);
//     osc.type = "sine";
//     osc.frequency.setValueAtTime(520, ctx.currentTime);
//     osc.frequency.exponentialRampToValueAtTime(680, ctx.currentTime + 0.15);
//     gain.gain.setValueAtTime(0.03, ctx.currentTime);
//     gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
//     osc.start(ctx.currentTime);
//     osc.stop(ctx.currentTime + 0.35);
//   }, []);

//   return playTone;
// }

function TimelineItem({
  experience,
  index,
  // playSound,
}: {
  experience: (typeof experiences)[0];
  index: number;
  // playSound: () => void;
}) {
  const ref = useRef(null);
  const dotRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isInViewDot = useInView(dotRef, { once: true, margin: "-80px" });

  // useEffect(() => {
  //   if (isInView) playSound();
  // }, [isInView, playSound]);

  const isLeft = index % 2 === 0;

  return (
    <div ref={ref} className="relative pl-10 md:pl-0">
      <motion.div
        ref={dotRef}
        initial={{ scale: 0 }}
        animate={isInViewDot ? { scale: 1 } : {}}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute left-[7px] top-6 z-10 h-2.5 w-2.5 rounded-full border border-white/30 bg-white/10 md:left-1/2 md:-translate-x-1/2"
      />

      <motion.div
        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`md:w-1/2 ${
          isLeft ? "md:pr-10 md:text-right" : "md:ml-auto md:pl-10"
        }`}
      >
        <div className="rounded-xl border border-white/[0.04] bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/[0.1]">
          <span className="text-xs font-medium uppercase tracking-wider text-white/30">
            {experience.date}
          </span>
          <h3 className="mt-1 text-base font-bold">{experience.role}</h3>
          <p className="text-sm text-white/50">{experience.company}</p>
          <p className="mt-2 text-xs leading-relaxed text-white/40">
            {experience.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function ExperienceTimeline() {
  // const playSound = useScrollSound();

  return (
    <div className="relative">
      <div className="absolute left-2.5 top-0 h-full w-px bg-linear-to-b from-transparent via-white/10 to-transparent md:left-1/2 md:-translate-x-px" />

      <div className="relative space-y-6">
        {experiences.map((exp, i) => (
          <TimelineItem
            key={i}
            experience={exp}
            index={i}
            // playSound={playSound}
          />
        ))}
      </div>
    </div>
  );
}
