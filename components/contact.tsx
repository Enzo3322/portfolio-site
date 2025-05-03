"use client"

import { motion } from "framer-motion"
import { Github, Mail } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          Let's Connect
        </h2>

        <div className="bg-gray-900 rounded-xl p-8 border border-gray-800">
          <h3 className="text-2xl font-semibold text-gray-200 mb-6">Get in Touch</h3>
          <p className="text-gray-400 mb-8">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>

          <div className="space-y-6">
            <a
              href="mailto:enzo.spag14@gmail.com"
              className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>enzo.spag14@gmail.com</span>
            </a>
            <a
              href="https://github.com/Enzo3322"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>github.com/Enzo3322</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
