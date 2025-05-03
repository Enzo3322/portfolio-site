"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-screen py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          Enzo
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-gray-300">Senior Full-Stack Developer</h2>
        <p className="max-w-2xl text-xl text-gray-400">
          I specialize in building scalable and efficient web applications from the ground up.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <Button
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
            size="lg"
            onClick={scrollToAbout}
          >
            Explore My Work
          </Button>
          <Button variant="outline" size="lg" className="border-gray-700 text-gray-300 hover:bg-gray-800" asChild>
            <a href="#contact">Let's Connect</a>
          </Button>
        </div>
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
          className="animate-bounce text-gray-400 hover:text-white hover:bg-transparent"
          onClick={scrollToAbout}
        >
          <ArrowDown className="h-6 w-6" />
          <span className="sr-only">Scroll down</span>
        </Button>
      </motion.div>
    </section>
  )
}
