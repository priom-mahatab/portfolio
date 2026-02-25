import Hero from "../components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <Hero />
      <TechStack />
      <Projects />
    </div>
  )
}