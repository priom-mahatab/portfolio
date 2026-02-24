"use client";

import { motion } from "framer-motion";
import {
  Terminal,
  Code2,
  Cpu,
  History,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "Overview", href: "#overview", icon: Terminal },
  { name: "Tech", href: "#tech", icon: Cpu },
  { name: "Projects", href: "#projects", icon: Code2 },
  { name: "History", href: "#experience", icon: History },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-0 h-screen w-20 lg:w-24 border-r border-zinc-900 bg-background flex flex-col items-center py-10 z-50">
      {/* Top Logo / Home */}
      <Link href="/" className="group mb-16">
        <div className="w-12 h-12 bg-white flex items-center justify-center rounded-xl group-hover:bg-accent transition-colors duration-300">
          <span className="text-black font-bold text-xl">Z</span>
        </div>
      </Link>

      {/* Navigation Links */}
      <nav className="flex flex-col gap-8 flex-1">
        {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative group"
            >
                <div className="p-3 rounded-xl text-zinc-500 group-hover:text-white group-hover:bg-zinc-900 transition-all duration-300">
                    <item.icon size={24} strokeWidth={1.5} />
                </div>
              
            </Link>
        ))}
      </nav>

      {/* Socials at Bottom */}
      <div className="flex flex-col gap-6 text-zinc-600">
        <a href="https://github.com" target="_blank" className="hover:text-white transition-colors">
          <Github size={20} />
        </a>
        <a href="https://linkedin.com" target="_blank" className="hover:text-white transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="mailto:your@email.com" className="hover:text-white transition-colors">
          <Mail size={20} />
        </a>
      </div>
    </aside>
  );
}
