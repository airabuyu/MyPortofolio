"use client"

import { motion } from "framer-motion"

const experiences = [
  {
    role: "Software Engineer",
    company: "PT Bank Mandiri Tbk",
    period: "Aug 2024 – Now",
    description: [
      "Maintained SQL Server scripts for reconciliation processes.",
      "Improved legacy web app features.",
      "Supported operational improvements based on user needs.",
    ],
  },
  {
    role: "Senior Developer",
    company: "PT Bank Negara Indonesia Tbk",
    period: "Aug 2023 – Jul 2024",
    description: [
      "Debugged & developed loan application (ASP.NET MVC + MSSQL).",
      "Enhanced legacy apps.",
      "Performed code reviews for quality and best practices.",
    ],
  },
  {
    role: "Senior Developer",
    company: "PT Adicipta Inovasi Teknologi",
    period: "Feb 2022 – Apr 2023",
    description: [
      "Developed multi-finance apps using ASP.NET MVC + MSSQL.",
      "Created reports (RDLC), workflows, journal modules, and web services.",
      "Conducted user testing.",
      "Trainer for interns (C#, ASP.NET, SQL Server).",
      "Deployed apps for new employees/intern training.",
    ],
  },
  {
    role: "Developer",
    company: "PT Asuransi Harta Aman Pratama Tbk",
    period: "Sep 2021 – Jan 2022",
    description: [
      "Built internal website using Laravel + MySQL.",
      "Improved legacy apps.",
      "Deployed apps for internal employees.",
    ],
  },
  {
    role: "Associate Member",
    company: "Bina Nusantara IT Division",
    period: "March 2020 - Feb 2021",
    description: [
      "Built frontend & backend with ASP.NET MVC + MSSQL.",
      "Migrated data using custom SQL queries.",
      "Improved legacy apps.",
      "Performed user testing.",
    ],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Experience
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-slate-500 dark:text-slate-400 mt-1 md:mt-0 bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full self-start">
                  {exp.period}
                </span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-slate-600 dark:text-slate-300">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


