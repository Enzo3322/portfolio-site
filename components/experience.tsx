"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "DBC / Usaflex",
    period: "Mar 2022 - present",
    responsibilities: [
      "System Design, Performance Optimization, Requirements Analysis, Prototyping",
      "Risk Management and Documentation",
      "Assisted developers through pair programming",
      "Leading Squad focused on checkout development",
      "Third party integrations",
      "DevOps: AWS, Azure, docker, and bash scripting",
      "Creating microservices using NodeJS and GraphQL",
    ],
  },
  {
    title: "Software Engineer",
    company: "Corebiz / Carrefour",
    period: "Aug 2021 - Mar 2022",
    responsibilities: [
      "Implementation of VTEX fast-store in the Carrefour group",
      "Leading Squad focused on checkout development",
      "Creating microservices using NodeJS and GraphQL",
    ],
  },
  {
    title: "Frontend Developer",
    company: "Enext / Avon OdontoPrev",
    period: "May 2021 - Aug 2021",
    responsibilities: [
      "Built e-commerce apps using React, JQuery and Sass in VTEX Platform",
      "Assisted developers with codebase problems and development tools",
      "Developing campaign pages and deploy using Sales Force Cloud",
    ],
  },
  {
    title: "Web Developer",
    company: "NCS Consultoria",
    period: "Jan 2019 - Jan 2021",
    responsibilities: [
      "Maintenance of email servers and file persistence",
      "Development of a web platform for process management",
      "Development of a website",
    ],
  },
]

export function Experience() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          Work Experience
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div key={index} variants={item}>
              <Card className="bg-gray-900 border-gray-800 hover:border-purple-700 transition-colors">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-gray-100">{exp.title}</CardTitle>
                      <CardDescription className="text-gray-400">{exp.company}</CardDescription>
                    </div>
                    <Badge variant="outline" className="flex items-center gap-1 border-gray-700 text-gray-300">
                      <CalendarDays className="h-3 w-3" />
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-300">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Briefcase className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
