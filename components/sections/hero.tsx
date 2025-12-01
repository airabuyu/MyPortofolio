"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 flex flex-col items-center text-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi, I&apos;m <span className="text-blue-600 dark:text-blue-400">Eric Jatmiko</span>
          </h1>
          <h2 className="text-2xl md:text-4xl font-semibold text-slate-700 dark:text-slate-300 mb-6">
            Fast Learner & Self-Taught Developer
          </h2>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-8">
            Passionate about adaptability and building applications that solve real-world problems. 
            Always eager to learn new technologies and improve existing systems.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="#projects">View Projects</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="/cv_new.pdf" download>Download CV</a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}


