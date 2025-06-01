"use client"

import { motion } from "framer-motion"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Odontoprev",
    description: "Created a new e-commerce platform using VTEX IO with React and Node.",
    technologies: ["VTEX IO", "React", "Node.js", "Typescript", "React"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Comunix",
    description: "Created microservices for a company that provides human resources solutions for the insurance industry.",
    technologies: ["EKS", "AWS", "Kafka", "Docker", "Kubernetes", "Node.js", "Typescript", "Vue"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Carrefour",
    description: "Created solutions for the e-commerce platform using VTEX, including checkout and payment processing.",
    technologies: ["VTEX", "Checkout", "Payment Integration", "Typescript", "React"],
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    title: "Sfera",
    description: "Developed new showcase website with ReactJS and Strapi for an engineering and architecture company.",
    technologies: ["React", "Strapi", "CMS"],
    image: "/placeholder.svg?height=200&width=400",
  },
]

export function Projects() {
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
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          Featured Projects
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:border-purple-700 h-full transition-colors">
                <CardHeader>
                  <CardTitle className="text-gray-100 flex items-center justify-between">
                    {project.title}
                    <ExternalLink className="h-5 w-5 text-gray-400 hover:text-purple-400 cursor-pointer" />
                  </CardTitle>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="outline" className="border-gray-700 text-gray-300">
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
