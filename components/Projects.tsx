"use client";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Prof Peek SEU",
    description:
      "Chrome Extension that automatically shows RateMyProfessors (RMP) ratings and difficulty scores next to instructor names in the St. Edward’s University course registration system.",
    techStack: ["JavaScript", "TypeScript", "Node.js", "Chrome Extensions API"],
    size: "large",
    link: "https://github.com/priom-mahatab/Prof-Peek",
  },
  {
    id: 2,
    title: "Bloomberg Trading Challenge",
    description:
      "Python-based screening and backtesting engine capable of running large-scale simulations across stock baskets, parameter tuning, and signal-driven filtering.",
    techStack: ["Python", "Pandas", "NumPy", "Backtesting.py"],
    size: "medium",
    link: "https://github.com/priom-mahatab/bloomberg-comp",
  },
  {
    id: 3,
    title: "Jamuna Atlas",
    description:
      "An interactive web platform to visualize the impact of the Martin Scholarship fieldwork conducted in the Jamuna Riverine region.",
    techStack: ["React.js", "Express.js", "Node.js", "MySQL"],
    size: "small",
    link: "https://github.com/priom-mahatab/martin-scholarship",
  },
  {
    id: 4,
    title: "Radiosonde Data Analysis",
    description:
      "A Python-based data analysis pipeline to process and visualize radiosonde atmospheric data for meteorological research.",
    techStack: ["Python", "Pandas", "Matplotlib", "MetPy", "Jupyter Notebooks"],
    size: "small",
    link: "https://github.com/priom-mahatab/Radiosondes",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 pr-4 lg:pr-12">
      <div className="flex items-center gap-3 mb-8">
        <span className="px-3 py-1 bg-accent/10 text-accent border border-accent/20 text-xs rounded-full animate-pulse">
          CLIENT_SIDE
        </span>
        <span className="text-zinc-600 text-sm">03. // PROJECTS</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            whileHover={{ y: -5 }}
            className={`
              relative group bg-card border border-zinc-900 rounded-3xl p-8 
              overflow-hidden transition-all duration-300 hover:border-accent/50
              ${project.size === "large" ? "md:col-span-2 md:row-span-2" : ""}
              ${project.size === "medium" ? "md:col-span-2" : ""}
              ${project.size === "small" ? "md:col-span-1" : ""}
            `}
          >
            {/* Background Glow */}
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-accent/5 blur-3xl group-hover:bg-accent/10 transition-colors" />
            <div className="flex flex-col h-full justify-between">
                <div>
                    <div className="flex justify-between items-start mb-4">
                        <div className="flex gap-2">
                            {project.techStack.map(t => (
                                <span key={t} className="text-[10px] font-mono text-accent bg-accent/10 px-2 py-1 rounded">
                                    {t}
                                </span>
                            ))}
                        </div>
                        <div className="flex gap-3 text-zinc-500 group-hover:text-zinc-300 transition-colors">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open ${project.title} on GitHub`}
                            className="inline-flex items-center z-30 cursor-pointer hover:text-white"
                          >
                            <Github size={18} />
                          </a>
                          {/* <ExternalLink size={18} className="cursor-pointer hover:text-white" /> */}
                        </div>
                    </div>

                    <h3 className={`font-bold ${project.size === 'large' ? 'text-4xl' : 'text-xl'}`}>
                        {project.title}
                    </h3>
                    <p className="text-zinc-500 mt-4 text-sm leading-relaxed line-clamp-3">
                        {project.description}
                    </p>
                </div>
                {/* Decorative terminal line at bottom */}
              <div className="font-mono text-[10px] text-zinc-700 mt-4 overflow-hidden whitespace-nowrap">
                {`> Initializing ${project.title.toLowerCase().replace(/\s/g, '_')}...`}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
