"use client"

import { motion } from "framer-motion"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight } from "lucide-react"
import { useI18n } from "@/lib/i18n"

interface Project {
  titleKey: string
  descKey: string
  technologies: string[]
}

const projects: Project[] = [
  {
    titleKey: "project.odontoprev.title",
    descKey: "project.odontoprev.desc",
    technologies: ["VTEX IO", "React", "Node.js", "TypeScript"],
  },
  {
    titleKey: "project.comunix.title",
    descKey: "project.comunix.desc",
    technologies: ["EKS", "AWS", "Kafka", "Docker", "Kubernetes", "Node.js", "TypeScript", "Vue"],
  },
  {
    titleKey: "project.carrefour.title",
    descKey: "project.carrefour.desc",
    technologies: ["VTEX", "Checkout", "Payment Integration", "TypeScript", "React"],
  },
  {
    titleKey: "project.sfera.title",
    descKey: "project.sfera.desc",
    technologies: ["React", "Strapi", "CMS"],
  },
]

export function Projects() {
  const { t } = useI18n()

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600">
          {t("projects.title")}
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="bg-white border-gray-200 overflow-hidden hover:border-violet-200 hover:shadow-lg h-full transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-gray-900 flex items-center justify-between">
                    {t(project.titleKey)}
                    <ArrowUpRight className="h-5 w-5 text-gray-300 group-hover:text-violet-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
                  </CardTitle>
                  <CardDescription className="text-gray-800">{t(project.descKey)}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="outline"
                        className="border-gray-200 text-gray-800 font-normal"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
