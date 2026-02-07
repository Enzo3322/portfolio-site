"use client"

import { motion } from "framer-motion"
import { Github, Mail, ArrowUpRight, Globe } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function Contact() {
  const { t } = useI18n()

  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600">
          {t("contact.title")}
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 border border-gray-100"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            {t("contact.subtitle")}
          </h3>
          <p className="text-gray-800 mb-8">
            {t("contact.description")}
          </p>

          <div className="space-y-4">
            <motion.a
              href="mailto:enzo.spag14@gmail.com"
              whileHover={{ x: 4 }}
              className="flex items-center justify-between p-4 rounded-xl border border-gray-200 bg-white text-gray-600 hover:border-violet-200 hover:text-violet-600 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5" />
                <span className="font-medium">enzo.spag14@gmail.com</span>
              </div>
              <ArrowUpRight className="h-4 w-4 text-gray-300 group-hover:text-violet-500 transition-colors" />
            </motion.a>
            <motion.a
              href="https://github.com/Enzo3322"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className="flex items-center justify-between p-4 rounded-xl border border-gray-200 bg-white text-gray-600 hover:border-violet-200 hover:text-violet-600 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5" />
                <span className="font-medium">github.com/Enzo3322</span>
              </div>
              <ArrowUpRight className="h-4 w-4 text-gray-300 group-hover:text-violet-500 transition-colors" />
            </motion.a>
            <motion.a
              href="https://pantecnologia.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className="flex items-center justify-between p-4 rounded-xl border border-gray-200 bg-white text-gray-600 hover:border-violet-200 hover:text-violet-600 transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5" />
                <span className="font-medium">pantecnologia.com</span>
              </div>
              <ArrowUpRight className="h-4 w-4 text-gray-300 group-hover:text-violet-500 transition-colors" />
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
