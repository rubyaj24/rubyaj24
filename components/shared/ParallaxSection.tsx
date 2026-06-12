"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface Props {
  children: React.ReactNode;
  speed?: number;
  className?: string;
  as?: "section" | "div";
}

export default function ParallaxSection({
  children,
  speed = 0.5,
  className,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * 200, speed * -200]);

  return (
    <Tag ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </Tag>
  );
}
