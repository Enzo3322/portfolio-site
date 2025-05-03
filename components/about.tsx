"use client"

import { motion } from "framer-motion"

export function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          About Me
        </h2>
        <div className="bg-gray-900 rounded-xl p-8 shadow-lg border border-gray-800">
          <p className="text-lg text-gray-300 leading-relaxed">
            I am a Software Engineer with a strong foundation in e-commerce development, particularly within the VTEX
            platform. Over the past few years, I have had the opportunity to work on diverse projects, focusing on
            system design, checkout processes, and third-party integrations.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed mt-4">
            I value collaboration and am committed to continuous learning, having supported team members through pair
            programming and actively contributing to the success of each project. With experience in both frontend and
            backend development, I strive to deliver reliable, well-documented, and scalable solutions while remaining
            open to new challenges and opportunities for growth.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
