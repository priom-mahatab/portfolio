import Hero from "../components/Hero";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      <Hero />
      <TechStack />
    </div>
  )
}