'use client';
import { motion } from 'framer-motion';
import {
    SiPython, SiJavascript, SiC, SiReact, SiNextdotjs, SiTypescript, SiPhp, SiTailwindcss,
    SiNodedotjs, SiExpress, SiFramer, SiLinux, SiGit, SiDocker, SiScikitlearn, SiTensorflow 
} from 'react-icons/si';

import { FaJava } from 'react-icons/fa';

const technologies = [
    { name: 'Python', icon: SiPython, color: "#3776AB" },
    { name: 'Java', icon: FaJava, color: "#F89820" },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: "#06B6D4" },
    { name: 'JavaScript', icon: SiJavascript, color: "#F7DF1E" },
    { name: 'React', icon: SiReact, color: "#61DAFB" },
    { name: 'Next.js', icon: SiNextdotjs, color: "#000000" },
    { name: 'TypeScript', icon: SiTypescript, color: "#3178C6" },
    { name: 'C', icon: SiC, color: "#555555" },
    { name: 'PHP', icon: SiPhp, color: "#777BB4" },
    { name: 'Git', icon: SiGit, color: "#F05032" },
    { name: 'Linux', icon: SiLinux, color: "#FCC624" },
    { name: 'Docker', icon: SiDocker, color: "#2496ED" },
    { name: 'Node.js', icon: SiNodedotjs, color: "#339933" },
    { name: 'Express', icon: SiExpress, color: "#000000" },
    { name: 'Framer Motion', icon: SiFramer, color: "#0055FF" },
    { name: 'Scikit-learn', icon: SiScikitlearn, color: "#F7931E" },
    { name: 'TensorFlow', icon: SiTensorflow, color: "#FF6F00" },
]

export default function TechStack() {
    const duplicatedTech = [...technologies, ...technologies]; // Duplicate the array for seamless scrolling

    return (
        <section id="tech" className="py-24 border-y border-zinc-900 bg-zinc-950/50">
            <div className="flex items-center gap-3 mb-8">
            <span className="px-3 py-1 bg-accent/10 text-accent border border-accent/20 text-xs rounded-full animate-pulse">
              READY_FOR_DEPLOYMENT
            </span>
            <span className="text-zinc-600 text-sm">02. // TECH STACK</span>
          </div>

            <div className="relative flex overflow-hidden group">
                <motion.div
                    className="flex whitespace-nowrap"
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{
                        duration: 20,
                        ease: 'linear',
                        repeat: Infinity,
                    }}>
                        {duplicatedTech.map((tech, index) => (
                            <div 
                                key={index}
                                className="flex items-center gap-4 px-12 py-4 grayscale hover:grayscale-0 transition-all duration-300 border-r border-zinc-900"
                            >
                                <tech.icon size={32} style={{ color: tech.color }} />
                                <span className="text-zinc-400 font-mono text-lg font-medium tracking-tight">
                                    {tech.name.toUpperCase()}
                                </span>
                            </div>
                        ))}
                </motion.div>
            </div>
        </section>
    )
}