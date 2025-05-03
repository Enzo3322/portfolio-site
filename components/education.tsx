"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, BookOpen } from "lucide-react"

const educationItems = [
  {
    title: "ANALYSIS AND SYSTEM DEVELOPMENT",
    institution: "UNIP",
    type: "formation",
    icon: <GraduationCap className="h-6 w-6 text-purple-400" />,
  },
  {
    title: "VTEX IMPLEMENTATION SPECIALIST",
    institution: "VTEX",
    type: "certificate",
    icon: <Award className="h-6 w-6 text-blue-400" />,
  },
  {
    title: "VTEX IO DEVELOPER",
    institution: "VTEX",
    type: "certificate",
    icon: <Award className="h-6 w-6 text-blue-400" />,
  },
  {
    title: "CLEAN CODE AND CLEAN ARCHITECTURE",
    institution: "RODRIGO BRANAS",
    type: "certificate",
    icon: <BookOpen className="h-6 w-6 text-green-400" />,
  },
]

export function Education() {
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
    <section id="education" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          Education & Certificates
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {educationItems.map((item, index) => (
            <motion.div key={index} variants={item}>
              <Card className="bg-gray-900 border-gray-800 hover:border-purple-700 transition-colors h-full">
                <CardHeader className="flex flex-row items-start gap-4 pb-2">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <CardTitle className="text-gray-100 text-lg">{item.title}</CardTitle>
                    <p className="text-gray-400 mt-1">{item.institution}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <Badge
                    variant={item.type === "formation" ? "default" : "outline"}
                    className={
                      item.type === "formation"
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 border-0"
                        : "border-gray-700 text-gray-300"
                    }
                  >
                    {item.type === "formation" ? "Degree" : "Certificate"}
                  </Badge>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
