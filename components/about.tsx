"use client"

import { motion } from "framer-motion"
import { useI18n } from "@/lib/i18n"

export function About() {
  const { t } = useI18n()

  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600">
          {t("about.title")}
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100"
        >
          <p className="text-lg text-gray-600 leading-relaxed">
            {t("about.p1")}
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
            {t("about.p2")}
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
