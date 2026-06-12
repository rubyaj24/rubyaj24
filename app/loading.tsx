"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6">
      <div className="bg-glow">
        <div className="bg-orb" />
        <div className="bg-orb" />
        <div className="bg-orb" />
      </div>
      <motion.div
        className="relative flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="h-16 w-16 rounded-full border-2 blur-sm border-white/10"
          animate={{
            scale: [1, 1.3, 1],
            borderColor: [
              "rgba(255,255,255,0.1)",
              "rgba(121,40,202,0.5)",
              "rgba(255,0,128,0.5)",
              "rgba(0,112,243,0.5)",
              "rgba(255,255,255,0.1)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute h-10 w-10 blur rounded-full"
          animate={{
            scale: [0.8, 1.1, 0.8],
            backgroundColor: [
              "rgba(121,40,202,0.3)",
              "rgba(255,0,128,0.3)",
              "rgba(0,112,243,0.3)",
              "rgba(121,40,202,0.3)",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute h-4 w-4 rounded-full blur-md bg-white/40"
          animate={{ scale: [0.5, 1.2, 0.5] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
      <p className="mt-8 text-sm font-extralight text-white/40">Loading</p>
    </div>
  );
}
