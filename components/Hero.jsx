"use client";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Visual3D from "./Visual3D";

export default function Hero() {
  return (
    <section
      id="overview"
        className="flex flex-col md:flex-row items-center py-20 relative overflow-hidden"
    >
      {/* Background Decorative Element (The "Blend") */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-accent/10 blur-[120px] rounded-full -z-10" />

      {/* Text Content */}
      <div className="flex-1 z-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 bg-accent/10 text-accent border border-accent/20 text-xs rounded-full animate-pulse">
              LIVE_SYSTEM_READY
            </span>
            <span className="text-zinc-600 text-sm">01. // OVERVIEW</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            I'm <span className="text-white">Zohaer.</span>
            <br />
            <TypeAnimation
              sequence={[
                "Software Engineer.",
                2000,
                "CS Major, 2028.",
                2000,
                "St. Edward's University.",
                2000,
                "ML Modeling Enthusiast.",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="text-zinc-500 font-mono text-3xl md:text-4xl"
            />
          </h1>
          <p className="text-zinc-400 text-lg max-w-lg leading-relaxed mb-10">
            Specializing in building scalable web applications and intuitive
            user interfaces. With a strong foundation in computer science and a
            passion for machine learning.
          </p>

          <div className="flex gap-6">
            <a href="#projects" className="inline-block px-8 py-3 bg-white text-black font-bold rounded-sm hover:bg-accent hover:text-white transition-all duration-300">
              EXPLORE PROJECTS
            </a>
            <a  target="_blank" href="https://drive.google.com/file/d/10dFxxROs7Stk1vAYdtYQsVde3b6nEI3U/view?usp=sharing" className="px-8 py-3 border border-zinc-700 text-zinc-300 font-mono hover:bg-zinc-900 transition-all">VIEW RESUME</a>
          </div>
        </motion.div>
      </div>

      <div className="flex-1 w-full h-[400px] md:h-[600px] flex items-center justify-center relative">
        <div className="absolute inset-0 bg-accent/5 blur-[100px] rounded-full" />
        <div className="w-full h-full z-10">
          <Visual3D />
        </div>
      </div>
    </section>
  );
}
