"use client"

import { motion } from "framer-motion"
import { Database, Server, Code, Cloud, Layers, Workflow } from "lucide-react"

const technologies = [
  {
    category: "Frontend",
    icon: <Code className="h-8 w-8 text-purple-400" />,
    skills: ["React", "TypeScript", "GraphQL"],
  },
  {
    category: "Backend",
    icon: <Server className="h-8 w-8 text-blue-400" />,
    skills: ["Node.js", "Nginx"],
  },
  {
    category: "Databases",
    icon: <Database className="h-8 w-8 text-green-400" />,
    skills: ["PostgreSQL", "MongoDB", "Redis"],
  },
  {
    category: "Cloud & DevOps",
    icon: <Cloud className="h-8 w-8 text-orange-400" />,
    skills: ["AWS", "Kubernetes EKS", "Docker"],
  },
  {
    category: "Architecture",
    icon: <Layers className="h-8 w-8 text-pink-400" />,
    skills: ["Microservices", "System Design"],
  },
  {
    category: "Tools & Processes",
    icon: <Workflow className="h-8 w-8 text-yellow-400" />,
    skills: ["RabbitMQ", "Git", "CI/CD"],
  },
]

export function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          Technologies & Skills
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-gray-900 rounded-xl p-6 border border-gray-800 shadow-lg hover:shadow-purple-900/10 transition-shadow"
            >
              <div className="flex items-center mb-4">
                {tech.icon}
                <h3 className="text-xl font-semibold ml-3 text-gray-200">{tech.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {tech.skills.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 bg-gray-900 rounded-xl p-8 border border-gray-800">
          <h3 className="text-2xl font-semibold mb-6 text-center text-gray-200">All Technologies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React",
              "Node.js",
              "TypeScript",
              "GraphQL",
              "Nginx",
              "PostgreSQL",
              "MongoDB",
              "AWS",
              "Kubernetes EKS",
              "Redis",
              "RabbitMQ",
              "Docker",
              "VTEX",
              "System Design",
              "Microservices",
            ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm hover:bg-gray-700 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
