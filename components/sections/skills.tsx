"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const skills = [
  { name: "JavaScript", icon: "/icons/javascript.svg" },
  { name: "Node.js", icon: "/icons/nodejs.svg" },
  { name: "ReactJS", icon: "/icons/reactjs.svg" },
  { name: "NextJS", icon: "/icons/nextjs.svg" },
  { name: "ExpressJS", icon: "/icons/expressjs.svg" },
  { name: "MySQL", icon: "/icons/mysql.svg" },
  { name: "MSSQL", icon: "/icons/mssql.svg" },
  { name: "MongoDB", icon: "/icons/mongodb.svg" },
  { name: "Laravel", icon: "/icons/laravel.svg" },
  { name: "ASP.NET MVC", icon: "/icons/aspnetmvc.svg" },
  { name: ".NET Core", icon: "/icons/netcore.svg" },
  { name: "Spring Boot", icon: "/icons/springboot.svg" },
  { name: "Bootstrap", icon: "/icons/bootstrap.svg" },
  { name: "TailwindCSS", icon: "/icons/tailwindcss.svg" },
  { name: "Git", icon: "/icons/git.svg" },
]

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="grid grid-cols-3 md:grid-cols-5 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex flex-col items-center justify-center gap-2 group"
              >
                <div className="relative w-16 h-16 p-2 bg-slate-50 dark:bg-slate-800 rounded-xl shadow-sm group-hover:shadow-md transition-all group-hover:-translate-y-1">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <span className="text-sm font-medium text-slate-600 dark:text-slate-400 text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


