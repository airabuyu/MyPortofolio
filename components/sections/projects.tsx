"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "AiraShop",
    description: "Online Shop Application",
    tech: ["React", "Redux"],
    url: "https://github.com/airabuyu/AiraShopReact",
  },
  {
    title: "MyBlog",
    description: "API for blog website",
    tech: ["Spring Boot"],
    url: "https://github.com/airabuyu/Blog",
  },
  {
    title: "AdinsTraining",
    description: "E-Exam Application",
    tech: ["Laravel"],
    url: "https://github.com/airabuyu/Skripsi",
  },
  {
    title: "Agenda",
    description: "Event Application (still on development)",
    tech: ["MERN Stack"],
    url: "https://github.com/airabuyu/AgendaMERN",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 flex flex-col"
            >
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 flex-1">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span 
                      key={t} 
                      className="px-2 py-1 text-xs font-medium rounded-full bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Button asChild variant="outline" className="w-full gap-2">
                  <Link href={project.url} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" /> View Code
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


