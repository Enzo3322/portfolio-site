"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n"

export function Hero() {
  const { t } = useI18n()

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-20 text-center relative">
      {/* Subtle gradient background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-6 relative z-10"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-6xl md:text-8xl md:leading-loose font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 via-indigo-600 to-violet-600">
            Enzo Spagnolli Direito
          </h1>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl md:text-3xl font-medium text-gray-600 text-center mx-auto"
        >
          {t("hero.subtitle")}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-2xl text-xl text-gray-500 text-center mx-auto"
        >
          {t("hero.description")}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
        >
          <Button
            className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300"
            size="lg"
            onClick={scrollToAbout}
          >
            {t("hero.cta.work")}
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-violet-300 hover:text-violet-600 transition-all duration-300"
            asChild
          >
            <a href="#contact">{t("hero.cta.connect")}</a>
          </Button>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10"
      >
        <Button
          variant="ghost"
          size="icon"
          className="animate-bounce text-gray-500 hover:text-violet-600 hover:bg-transparent"
          onClick={scrollToAbout}
        >
          <ArrowDown className="h-6 w-6" />
          <span className="sr-only">Scroll down</span>
        </Button>
      </motion.div>
    </section>
  )
}
