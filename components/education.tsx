"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, BookOpen } from "lucide-react"
import { useI18n } from "@/lib/i18n"

interface EducationItem {
  titleKey: string
  institutionKey: string
  type: "formation" | "certificate"
  icon: React.ReactNode
}

const educationItems: EducationItem[] = [
  {
    titleKey: "edu.unip.title",
    institutionKey: "edu.unip.institution",
    type: "formation",
    icon: <GraduationCap className="h-6 w-6 text-violet-600" />,
  },
  {
    titleKey: "edu.vtex1.title",
    institutionKey: "edu.vtex1.institution",
    type: "certificate",
    icon: <Award className="h-6 w-6 text-indigo-500" />,
  },
  {
    titleKey: "edu.vtex2.title",
    institutionKey: "edu.vtex2.institution",
    type: "certificate",
    icon: <Award className="h-6 w-6 text-indigo-500" />,
  },
  {
    titleKey: "edu.clean.title",
    institutionKey: "edu.clean.institution",
    type: "certificate",
    icon: <BookOpen className="h-6 w-6 text-emerald-500" />,
  },
]

export function Education() {
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
    <section id="education" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600">
          {t("education.title")}
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {educationItems.map((edu, index) => (
            <motion.div key={index} variants={item}>
              <Card className="bg-white border-gray-200 hover:border-violet-200 hover:shadow-lg transition-all duration-300 h-full group">
                <CardHeader className="flex flex-row items-start gap-4 pb-2">
                  <div className="mt-1 p-2 rounded-xl bg-gray-50 group-hover:bg-violet-50 transition-colors duration-300">
                    {edu.icon}
                  </div>
                  <div>
                    <CardTitle className="text-gray-900 text-lg">{t(edu.titleKey)}</CardTitle>
                    <p className="text-gray-800 mt-1">{t(edu.institutionKey)}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <Badge
                    variant={edu.type === "formation" ? "default" : "outline"}
                    className={
                      edu.type === "formation"
                        ? "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 border-0 text-white"
                        : "border-gray-200 text-gray-800"
                    }
                  >
                    {edu.type === "formation" ? t("edu.degree") : t("edu.certificate")}
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
