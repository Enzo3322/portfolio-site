"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, ChevronRight } from "lucide-react"
import { useI18n } from "@/lib/i18n"

interface Experience {
  titleKey: string
  companyKey: string
  periodKey: string
  responsibilityKeys: string[]
  techsKey: string
}

const experiences: Experience[] = [
  {
    titleKey: "exp.dbc.title",
    companyKey: "exp.dbc.company",
    periodKey: "exp.dbc.period",
    responsibilityKeys: [
      "exp.dbc.r1",
      "exp.dbc.r2",
      "exp.dbc.r3",
      "exp.dbc.r4",
      "exp.dbc.r5",
      "exp.dbc.r6",
      "exp.dbc.r7",
    ],
    techsKey: "exp.dbc.techs",
  },
  {
    titleKey: "exp.corebiz.title",
    companyKey: "exp.corebiz.company",
    periodKey: "exp.corebiz.period",
    responsibilityKeys: [
      "exp.corebiz.r1",
      "exp.corebiz.r2",
      "exp.corebiz.r3",
    ],
    techsKey: "exp.corebiz.techs",
  },
  {
    titleKey: "exp.enext.title",
    companyKey: "exp.enext.company",
    periodKey: "exp.enext.period",
    responsibilityKeys: [
      "exp.enext.r1",
      "exp.enext.r2",
      "exp.enext.r3",
    ],
    techsKey: "exp.enext.techs",
  },
  {
    titleKey: "exp.ncs.title",
    companyKey: "exp.ncs.company",
    periodKey: "exp.ncs.period",
    responsibilityKeys: [
      "exp.ncs.r1",
      "exp.ncs.r2",
      "exp.ncs.r3",
    ],
    techsKey: "exp.ncs.techs",
  },
]

export function Experience() {
  const { t } = useI18n()

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const item = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0 },
  }

  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600">
          {t("experience.title")}
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-200 via-indigo-200 to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div key={index} variants={item} className="relative md:pl-20">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-[26px] top-8 w-3 h-3 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 ring-4 ring-white hidden md:block" />

                <Card className="bg-white border-gray-200 hover:border-violet-200 hover:shadow-lg transition-all duration-300 overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-violet-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <CardHeader className="pb-4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <CardTitle className="text-gray-900 text-xl">{t(exp.titleKey)}</CardTitle>
                        <CardDescription className="text-violet-600 font-medium mt-1">
                          {t(exp.companyKey)}
                        </CardDescription>
                      </div>
                      <Badge
                        variant="outline"
                        className="flex items-center gap-1.5 border-gray-200 text-gray-800 w-fit"
                      >
                        <CalendarDays className="h-3 w-3" />
                        {t(exp.periodKey)}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <ul className="space-y-3">
                      {exp.responsibilityKeys.map((rKey, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          viewport={{ once: true }}
                          className="flex items-start gap-2.5 text-gray-600"
                        >
                          <ChevronRight className="h-4 w-4 text-violet-400 mt-1 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{t(rKey)}</span>
                        </motion.li>
                      ))}
                    </ul>
                    <div className="pt-3 border-t border-gray-100">
                      <div className="flex flex-wrap gap-2">
                        {t(exp.techsKey).split(", ").map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 bg-gray-50 text-gray-800 rounded-md text-xs font-medium border border-gray-100"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
