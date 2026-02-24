import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import Hero from "@/components/Hero";

const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={geistMono.variable}>
      <body className="flex bg-background text-foreground font-mono antialiased">
        <Sidebar />
        <main className="flex-1 ml-20 lg:ml-64 min-h-screen">{children}</main>
      </body>
    </html>
  )
}
