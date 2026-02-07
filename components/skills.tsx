"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Database, Server, Code, Cloud, Layers, Workflow } from "lucide-react"
import { useI18n } from "@/lib/i18n"

interface SkillItem {
  nameKey: string
  descKey: string
  level: number
}

interface TechCategory {
  categoryKey: string
  descKey: string
  icon: React.ReactNode
  color: string
  bgColor: string
  borderColor: string
  skills: SkillItem[]
}

const technologies: TechCategory[] = [
  {
    categoryKey: "skills.aws",
    descKey: "skills.aws.desc",
    icon: <Cloud className="h-6 w-6" />,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    skills: [
      { nameKey: "skill.lambda", descKey: "skill.lambda.desc", level: 100 },
      { nameKey: "skill.dynamodb", descKey: "skill.dynamodb.desc", level: 100 },
      { nameKey: "skill.ecs", descKey: "skill.ecs.desc", level: 100 },
      { nameKey: "skill.fargate", descKey: "skill.fargate.desc", level: 100 },
      { nameKey: "skill.apigateway", descKey: "skill.apigateway.desc", level: 100 },
      { nameKey: "skill.eks", descKey: "skill.eks.desc", level: 100 },
      { nameKey: "skill.rds", descKey: "skill.rds.desc", level: 100 },
      { nameKey: "skill.sqs", descKey: "skill.sqs.desc", level: 100 },
      { nameKey: "skill.sns", descKey: "skill.sns.desc", level: 100 },
      { nameKey: "skill.cloudwatch", descKey: "skill.cloudwatch.desc", level: 100 },
    ],
  },
  {
    categoryKey: "skills.frontend",
    descKey: "skills.frontend.desc",
    icon: <Code className="h-6 w-6" />,
    color: "text-violet-600",
    bgColor: "bg-violet-50",
    borderColor: "border-violet-200",
    skills: [
      { nameKey: "skill.react", descKey: "skill.react.desc", level: 100 },
      { nameKey: "skill.typescript", descKey: "skill.typescript.desc", level: 100 },
      { nameKey: "skill.graphql", descKey: "skill.graphql.desc", level: 100 },
      { nameKey: "skill.nextjs", descKey: "skill.nextjs.desc", level: 100 },
      { nameKey: "skill.vuejs", descKey: "skill.vuejs.desc", level: 100 },
      { nameKey: "skill.sass", descKey: "skill.sass.desc", level: 100 },
    ],
  },
  {
    categoryKey: "skills.backend",
    descKey: "skills.backend.desc",
    icon: <Server className="h-6 w-6" />,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    skills: [
      { nameKey: "skill.nodejs", descKey: "skill.nodejs.desc", level: 100 },
      { nameKey: "skill.express", descKey: "skill.express.desc", level: 100 },
      { nameKey: "skill.nestjs", descKey: "skill.nestjs.desc", level: 100 },
      { nameKey: "skill.fastify", descKey: "skill.fastify.desc", level: 100 },
      { nameKey: "skill.prisma", descKey: "skill.prisma.desc", level: 100 },
      { nameKey: "skill.grpc", descKey: "skill.grpc.desc", level: 100 },
      { nameKey: "skill.jest", descKey: "skill.jest.desc", level: 100 },
      { nameKey: "skill.websocket", descKey: "skill.websocket.desc", level: 100 },
      { nameKey: "skill.nginx", descKey: "skill.nginx.desc", level: 100 },
    ],
  },
  {
    categoryKey: "skills.databases",
    descKey: "skills.databases.desc",
    icon: <Database className="h-6 w-6" />,
    color: "text-emerald-600",
    bgColor: "bg-emerald-50",
    borderColor: "border-emerald-200",
    skills: [
      { nameKey: "skill.postgresql", descKey: "skill.postgresql.desc", level: 100 },
      { nameKey: "skill.mongodb", descKey: "skill.mongodb.desc", level: 100 },
      { nameKey: "skill.redis", descKey: "skill.redis.desc", level: 100 },
      { nameKey: "skill.dynamodb", descKey: "skill.dynamodb.desc", level: 100 },
      { nameKey: "skill.aurora", descKey: "skill.aurora.desc", level: 100 },
      { nameKey: "skill.sqlite", descKey: "skill.sqlite.desc", level: 100 },
    ],
  },
  {
    categoryKey: "skills.cloud",
    descKey: "skills.cloud.desc",
    icon: <Cloud className="h-6 w-6" />,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    skills: [
      { nameKey: "skill.aws", descKey: "skill.aws.desc", level: 100 },
      { nameKey: "skill.kubernetes", descKey: "skill.kubernetes.desc", level: 100 },
      { nameKey: "skill.docker", descKey: "skill.docker.desc", level: 100 },
      { nameKey: "skill.cicd", descKey: "skill.cicd.desc", level: 100 },
      { nameKey: "skill.azure", descKey: "skill.azure.desc", level: 100 },
    ],
  },
  {
    categoryKey: "skills.architecture",
    descKey: "skills.architecture.desc",
    icon: <Layers className="h-6 w-6" />,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    borderColor: "border-pink-200",
    skills: [
      { nameKey: "skill.microservices", descKey: "skill.microservices.desc", level: 100 },
      { nameKey: "skill.systemdesign", descKey: "skill.systemdesign.desc", level: 100 },
      { nameKey: "skill.eventdriven", descKey: "skill.eventdriven.desc", level: 100 },
      { nameKey: "skill.ddd", descKey: "skill.ddd.desc", level: 100 },
      { nameKey: "skill.tdd", descKey: "skill.tdd.desc", level: 100 },
      { nameKey: "skill.cleanarch", descKey: "skill.cleanarch.desc", level: 100 },
    ],
  },
  {
    categoryKey: "skills.tools",
    descKey: "skills.tools.desc",
    icon: <Workflow className="h-6 w-6" />,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    borderColor: "border-amber-200",
    skills: [
      { nameKey: "skill.rabbitmq", descKey: "skill.rabbitmq.desc", level: 100 },
      { nameKey: "skill.kafka", descKey: "skill.kafka.desc", level: 100 },
      { nameKey: "skill.githubworkflow", descKey: "skill.githubworkflow.desc", level: 100 },
      { nameKey: "skill.codepipeline", descKey: "skill.codepipeline.desc", level: 100 },
    ],
  },
]

export function Skills() {
  const { t } = useI18n()
  const [activeCategory, setActiveCategory] = useState(0)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.06 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0 },
  }

  const active = technologies[activeCategory]

  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-indigo-600">
          {t("skills.title")}
        </h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mt-10 mb-10">
          {technologies.map((tech, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === index
                  ? `${tech.bgColor} ${tech.color} ${tech.borderColor} border shadow-sm`
                  : "bg-white border border-gray-200 text-gray-800 hover:border-gray-300 hover:text-gray-700"
              }`}
            >
              <span className={activeCategory === index ? tech.color : "text-gray-500"}>
                {tech.icon}
              </span>
              {t(tech.categoryKey)}
            </motion.button>
          ))}
        </div>

        {/* Active Category Detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className={`rounded-2xl border p-8 ${active.borderColor} ${active.bgColor}/30`}
          >
            <div className="flex items-start gap-4 mb-8">
              <div className={`p-3 rounded-xl ${active.bgColor} ${active.color}`}>
                {active.icon}
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900">{t(active.categoryKey)}</h3>
                <p className="text-gray-800 mt-1 max-w-2xl">{t(active.descKey)}</p>
              </div>
            </div>

            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {active.skills.map((skill, idx) => (
                <motion.div
                  key={t(skill.nameKey)}
                  variants={item}
                  className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-gray-900 group-hover:text-violet-600 transition-colors">
                      {t(skill.nameKey)}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">{t(skill.descKey)}</p>
                  <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: idx * 0.1, ease: "easeOut" }}
                      className={`h-full rounded-full bg-gradient-to-r ${
                        active.color === "text-violet-600"
                          ? "from-violet-400 to-violet-600"
                          : active.color === "text-blue-600"
                          ? "from-blue-400 to-blue-600"
                          : active.color === "text-emerald-600"
                          ? "from-emerald-400 to-emerald-600"
                          : active.color === "text-yellow-600"
                          ? "from-yellow-400 to-yellow-600"
                          : active.color === "text-orange-600"
                          ? "from-orange-400 to-orange-600"
                          : active.color === "text-pink-600"
                          ? "from-pink-400 to-pink-600"
                          : "from-amber-400 to-amber-600"
                      }`}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  )
}
