"use client";

import { motion } from "framer-motion";
import ProjectHero from "@/components/case-study/ProjectHero";
import Overview from "@/components/case-study/Overview";
import ProcessSteps from "@/components/case-study/ProcessSteps";
import ChallengeApproach from "@/components/case-study/ChallengeApproach";
import Methodology from "@/components/case-study/Methodology";
import Conclusion from "@/components/case-study/Conclusion";
import Gallery from "@/components/case-study/Gallery";
import UpNext from "@/components/case-study/UpNext";
import Footer from "@/components/shared/Footer";
import type { Project } from "@/lib/types";

interface Props {
  project: Project;
}

const sections = [
  Overview,
  ProcessSteps,
  ChallengeApproach,
  Methodology,
  Gallery,
  Conclusion,
];

export default function ClientCaseStudy({ project }: Props) {
  return (
    <div className="min-h-screen">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ProjectHero project={project} />
      </motion.div>

      {sections.map((Section, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Section project={project} />
        </motion.div>
      ))}

      <UpNext current={project} />
      <Footer />
    </div>
  );
}
