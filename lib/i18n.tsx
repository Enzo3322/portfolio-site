"use client"

import React, { createContext, useContext, useState, useCallback } from "react"

type Language = "en" | "pt"

interface I18nContextType {
  lang: Language
  toggleLang: () => void
  t: (key: string) => string
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Nav / General
    "nav.about": "About",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.contact": "Contact",

    // Hero
    "hero.subtitle": "Senior Software Engineer",
    "hero.description": "I specialize in building scalable and efficient web applications from the ground up.",
    "hero.cta.work": "Explore My Work",
    "hero.cta.connect": "Let's Connect",

    // About
    "about.title": "About Me",
    "about.p1": "I am a Software Engineer with a strong foundation in e-commerce development, particularly within the VTEX platform. Over the past few years, I have had the opportunity to work on diverse projects, focusing on system design, checkout processes, and third-party integrations.",
    "about.p2": "I value collaboration and am committed to continuous learning, having supported team members through pair programming and actively contributing to the success of each project. With experience in both frontend and backend development, I strive to deliver reliable, well-documented, and scalable solutions while remaining open to new challenges and opportunities for growth.",

    // Skills
    "skills.title": "Technologies & Skills",
    "skills.frontend": "Frontend",
    "skills.frontend.desc": "Building modern, responsive user interfaces with component-driven architecture and type-safe development workflows.",
    "skills.backend": "Backend",
    "skills.backend.desc": "Designing robust server-side applications, RESTful & GraphQL APIs, and high-performance reverse proxy configurations.",
    "skills.databases": "Databases",
    "skills.databases.desc": "Managing relational and NoSQL data stores with focus on query optimization, caching strategies, and data modeling.",
    "skills.aws": "AWS Services",
    "skills.aws.desc": "Building serverless and containerized solutions on AWS with managed services for compute, storage, messaging, and observability.",
    "skills.cloud": "Cloud & DevOps",
    "skills.cloud.desc": "Orchestrating containerized workloads on AWS with CI/CD pipelines, infrastructure as code, and monitoring.",
    "skills.architecture": "Architecture",
    "skills.architecture.desc": "Designing distributed systems with event-driven patterns, domain separation, and scalability-first mindset.",
    "skills.tools": "Tools & Processes",
    "skills.tools.desc": "Leveraging message brokers, version control workflows, and automated pipelines for reliable delivery.",

    // Skill items
    "skill.react": "React",
    "skill.react.desc": "Component-driven SPAs & SSR with Next.js",
    "skill.typescript": "TypeScript",
    "skill.typescript.desc": "Strict typing across full-stack codebases",
    "skill.graphql": "GraphQL",
    "skill.graphql.desc": "Schema-first APIs with Apollo & code-gen",
    "skill.nextjs": "Next.js",
    "skill.nextjs.desc": "SSR, ISR, and static export strategies",
    "skill.vuejs": "Vue.js",
    "skill.vuejs.desc": "Reactive UI with Composition API",
    "skill.sass": "Sass / CSS",
    "skill.sass.desc": "Design systems & responsive layouts",

    "skill.nodejs": "Node.js",
    "skill.nodejs.desc": "Event-driven microservices & REST APIs",
    "skill.express": "Express",
    "skill.express.desc": "Middleware-based HTTP server framework",
    "skill.nestjs": "NestJS",
    "skill.nestjs.desc": "Enterprise-grade modular Node.js framework",
    "skill.fastify": "Fastify",
    "skill.fastify.desc": "High-performance, low-overhead web framework",
    "skill.prisma": "Prisma",
    "skill.prisma.desc": "Type-safe ORM with auto-generated queries",
    "skill.grpc": "gRPC",
    "skill.grpc.desc": "High-performance RPC for service-to-service calls",
    "skill.jest": "Jest",
    "skill.jest.desc": "Unit & integration testing with coverage",
    "skill.websocket": "WebSocket",
    "skill.websocket.desc": "Real-time bidirectional communication",
    "skill.nginx": "Nginx",
    "skill.nginx.desc": "Reverse proxy, load balancing & SSL termination",

    "skill.postgresql": "PostgreSQL",
    "skill.postgresql.desc": "ACID-compliant relational database",
    "skill.mongodb": "MongoDB",
    "skill.mongodb.desc": "Document-based NoSQL with aggregation pipelines",
    "skill.redis": "Redis",
    "skill.redis.desc": "In-memory cache, pub/sub & session store",
    "skill.aurora": "Aurora",
    "skill.aurora.desc": "AWS managed MySQL & PostgreSQL compatible DB",
    "skill.sqlite": "SQLite",
    "skill.sqlite.desc": "Lightweight embedded relational database",

    "skill.lambda": "AWS Lambda",
    "skill.lambda.desc": "Serverless compute for event-driven functions",
    "skill.dynamodb": "DynamoDB",
    "skill.dynamodb.desc": "Fully managed NoSQL key-value database",
    "skill.ecs": "ECS",
    "skill.ecs.desc": "Container orchestration with task definitions",
    "skill.fargate": "Fargate",
    "skill.fargate.desc": "Serverless compute engine for containers",
    "skill.apigateway": "API Gateway",
    "skill.apigateway.desc": "Managed REST & WebSocket API endpoints",
    "skill.eks": "EKS",
    "skill.eks.desc": "Managed Kubernetes clusters on AWS",
    "skill.rds": "RDS",
    "skill.rds.desc": "Managed relational databases (PostgreSQL, MySQL)",
    "skill.sqs": "SQS",
    "skill.sqs.desc": "Fully managed message queuing service",
    "skill.sns": "SNS",
    "skill.sns.desc": "Pub/sub messaging and push notifications",
    "skill.cloudwatch": "CloudWatch",
    "skill.cloudwatch.desc": "Monitoring, logging, and observability",

    "skill.aws": "AWS",
    "skill.aws.desc": "EC2, S3, Lambda, SQS, CloudFront, RDS",
    "skill.kubernetes": "Kubernetes EKS",
    "skill.kubernetes.desc": "Container orchestration at scale",
    "skill.docker": "Docker",
    "skill.docker.desc": "Containerization & multi-stage builds",
    "skill.cicd": "CI/CD",
    "skill.cicd.desc": "GitHub Actions, Jenkins & automated pipelines",
    "skill.azure": "Azure",
    "skill.azure.desc": "Cloud services & DevOps pipelines",

    "skill.microservices": "Microservices",
    "skill.microservices.desc": "Domain-driven bounded contexts",
    "skill.systemdesign": "System Design",
    "skill.systemdesign.desc": "Scalable, fault-tolerant architectures",
    "skill.eventdriven": "Event-Driven",
    "skill.eventdriven.desc": "Async messaging with queues & topics",
    "skill.ddd": "DDD",
    "skill.ddd.desc": "Domain-Driven Design with bounded contexts",
    "skill.tdd": "TDD",
    "skill.tdd.desc": "Test-Driven Development for reliable code",
    "skill.cleanarch": "Clean Architecture",
    "skill.cleanarch.desc": "Layered design with dependency inversion",

    "skill.rabbitmq": "RabbitMQ",
    "skill.rabbitmq.desc": "AMQP message broker for async workflows",
    "skill.kafka": "Kafka",
    "skill.kafka.desc": "Distributed event streaming platform",
    "skill.githubworkflow": "GitHub Workflow",
    "skill.githubworkflow.desc": "CI/CD with GitHub Actions & automation",
    "skill.codepipeline": "CodePipeline",
    "skill.codepipeline.desc": "AWS managed continuous delivery pipeline",

    // Experience
    "experience.title": "Work Experience",

    "exp.dbc.title": "Senior Software Engineer",
    "exp.dbc.company": "DBC Company",
    "exp.dbc.period": "Mar 2022 - Present",
    "exp.dbc.r1": "Led end-to-end system design for high-traffic e-commerce checkout flows, conducting requirements analysis, capacity planning, and architectural prototyping to support 10k+ concurrent sessions.",
    "exp.dbc.r2": "Drove risk management initiatives by documenting failure modes (FMEA), establishing rollback strategies, and maintaining architectural decision records (ADRs) for critical platform changes.",
    "exp.dbc.r3": "Mentored 5+ engineers through structured pair programming sessions, code reviews, and knowledge-sharing workshops on Node.js best practices and clean architecture patterns.",
    "exp.dbc.r4": "Led a cross-functional checkout squad, coordinating with product, QA, and design to ship cart, payment, and order-management features with zero-downtime deployments.",
    "exp.dbc.r5": "Architected and integrated third-party payment gateways (Stripe-like providers), logistics APIs, and ERP connectors using adapter patterns and circuit-breaker resilience.",
    "exp.dbc.r6": "Built and maintained CI/CD pipelines on AWS (ECS, S3, CloudFront) and Azure DevOps; authored Dockerfiles, bash automation scripts, and IaC templates for reproducible environments.",
    "exp.dbc.r7": "Designed and developed event-driven Node.js microservices with GraphQL Federation, implementing domain boundaries, schema stitching, and distributed tracing with OpenTelemetry.",
    "exp.dbc.techs": "Node.js, GraphQL, TypeScript, AWS, Azure, Docker, Kubernetes, RabbitMQ, PostgreSQL, Redis",

    "exp.corebiz.title": "Software Engineer",
    "exp.corebiz.company": "Corebiz",
    "exp.corebiz.period": "Aug 2021 - Mar 2022",
    "exp.corebiz.r1": "Spearheaded the implementation of VTEX FastStore for Carrefour Group's digital commerce platform, migrating legacy storefront to a headless React/Next.js architecture with ISR for sub-second page loads.",
    "exp.corebiz.r2": "Owned checkout squad delivery, coordinating sprint planning, backlog refinement, and release coordination for payment and cart modules across multiple brands.",
    "exp.corebiz.r3": "Developed Node.js + GraphQL microservices for order orchestration, inventory sync, and promotion engines, deployed on VTEX IO's serverless infrastructure.",
    "exp.corebiz.techs": "React, Next.js, VTEX IO, Node.js, GraphQL, TypeScript",

    "exp.enext.title": "Frontend Developer",
    "exp.enext.company": "Enext",
    "exp.enext.period": "May 2021 - Aug 2021",
    "exp.enext.r1": "Built responsive e-commerce storefronts on VTEX platform using React, jQuery, and Sass, implementing custom shelf components, search filters, and product page layouts optimized for Core Web Vitals.",
    "exp.enext.r2": "Provided technical guidance to junior developers on VTEX CMS tooling, Git workflows, and component reuse patterns, reducing onboarding time by ~30%.",
    "exp.enext.r3": "Developed and deployed seasonal campaign landing pages via Salesforce Marketing Cloud, integrating dynamic content blocks with A/B testing and analytics tracking.",
    "exp.enext.techs": "React, jQuery, Sass, VTEX, Salesforce Marketing Cloud",

    "exp.ncs.title": "Web Developer",
    "exp.ncs.company": "NCS Consultoria",
    "exp.ncs.period": "Jan 2019 - Jan 2021",
    "exp.ncs.r1": "Administered and maintained Linux-based email servers (Postfix/Dovecot) and NFS file persistence layers, ensuring 99.5%+ uptime for 200+ corporate users.",
    "exp.ncs.r2": "Designed and developed a full-stack web application for business process management using PHP, MySQL, and vanilla JavaScript, automating document workflows and approval chains.",
    "exp.ncs.r3": "Built the company's institutional website from scratch with responsive design, SEO optimization, and CMS integration for non-technical content editors.",
    "exp.ncs.techs": "PHP, MySQL, JavaScript, Linux, HTML/CSS",

    // Projects
    "projects.title": "Featured Projects",
    "project.odontoprev.title": "Odontoprev",
    "project.odontoprev.desc": "Created a new e-commerce platform using VTEX IO with React and Node.",
    "project.comunix.title": "Comunix",
    "project.comunix.desc": "Created microservices for a company that provides human resources solutions for the insurance industry.",
    "project.carrefour.title": "Carrefour",
    "project.carrefour.desc": "Created solutions for the e-commerce platform using VTEX, including checkout and payment processing.",
    "project.sfera.title": "Sfera",
    "project.sfera.desc": "Developed new showcase website with ReactJS and Strapi for an engineering and architecture company.",

    // Education
    "education.title": "Education & Certificates",
    "edu.unip.title": "Analysis and System Development",
    "edu.unip.institution": "UNIP",
    "edu.vtex1.title": "VTEX Implementation Specialist",
    "edu.vtex1.institution": "VTEX",
    "edu.vtex2.title": "VTEX IO Developer",
    "edu.vtex2.institution": "VTEX",
    "edu.clean.title": "Clean Code and Clean Architecture",
    "edu.clean.institution": "Rodrigo Branas",
    "edu.degree": "Degree",
    "edu.certificate": "Certificate",

    // Contact
    "contact.title": "Let's Connect",
    "contact.subtitle": "Get in Touch",
    "contact.description": "I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.",

    // Footer
    "footer.rights": "All rights reserved.",
  },
  pt: {
    // Nav / General
    "nav.about": "Sobre",
    "nav.skills": "Habilidades",
    "nav.projects": "Projetos",
    "nav.experience": "Experiência",
    "nav.education": "Educação",
    "nav.contact": "Contato",

    // Hero
    "hero.subtitle": "Engenheiro de Software Sênior",
    "hero.description": "Sou especialista em construir aplicações web escaláveis e eficientes do zero.",
    "hero.cta.work": "Explorar Meu Trabalho",
    "hero.cta.connect": "Vamos Conversar",

    // About
    "about.title": "Sobre Mim",
    "about.p1": "Sou Engenheiro de Software com sólida base em desenvolvimento de e-commerce, especialmente na plataforma VTEX. Nos últimos anos, tive a oportunidade de trabalhar em projetos diversos, com foco em design de sistemas, processos de checkout e integrações com terceiros.",
    "about.p2": "Valorizo a colaboração e estou comprometido com o aprendizado contínuo, tendo apoiado membros da equipe através de pair programming e contribuindo ativamente para o sucesso de cada projeto. Com experiência tanto em frontend quanto backend, busco entregar soluções confiáveis, bem documentadas e escaláveis, sempre aberto a novos desafios e oportunidades de crescimento.",

    // Skills
    "skills.title": "Tecnologias & Habilidades",
    "skills.frontend": "Frontend",
    "skills.frontend.desc": "Construção de interfaces modernas e responsivas com arquitetura orientada a componentes e fluxos de desenvolvimento type-safe.",
    "skills.backend": "Backend",
    "skills.backend.desc": "Desenvolvimento de aplicações server-side robustas, APIs RESTful e GraphQL, e configurações de proxy reverso de alta performance.",
    "skills.databases": "Bancos de Dados",
    "skills.databases.desc": "Gerenciamento de bancos relacionais e NoSQL com foco em otimização de queries, estratégias de cache e modelagem de dados.",
    "skills.aws": "Serviços AWS",
    "skills.aws.desc": "Construção de soluções serverless e containerizadas na AWS com serviços gerenciados de computação, armazenamento, mensageria e observabilidade.",
    "skills.cloud": "Cloud & DevOps",
    "skills.cloud.desc": "Orquestração de workloads containerizados na AWS com pipelines de CI/CD, infraestrutura como código e monitoramento.",
    "skills.architecture": "Arquitetura",
    "skills.architecture.desc": "Design de sistemas distribuídos com padrões event-driven, separação de domínios e mentalidade de escalabilidade.",
    "skills.tools": "Ferramentas & Processos",
    "skills.tools.desc": "Utilização de message brokers, workflows de controle de versão e pipelines automatizados para entrega confiável.",

    // Skill items
    "skill.react": "React",
    "skill.react.desc": "SPAs e SSR com Next.js orientados a componentes",
    "skill.typescript": "TypeScript",
    "skill.typescript.desc": "Tipagem estrita em codebases full-stack",
    "skill.graphql": "GraphQL",
    "skill.graphql.desc": "APIs schema-first com Apollo e code-gen",
    "skill.nextjs": "Next.js",
    "skill.nextjs.desc": "Estratégias de SSR, ISR e exportação estática",
    "skill.vuejs": "Vue.js",
    "skill.vuejs.desc": "UI reativa com Composition API",
    "skill.sass": "Sass / CSS",
    "skill.sass.desc": "Design systems e layouts responsivos",

    "skill.nodejs": "Node.js",
    "skill.nodejs.desc": "Microsserviços event-driven e APIs REST",
    "skill.express": "Express",
    "skill.express.desc": "Framework HTTP baseado em middleware",
    "skill.nestjs": "NestJS",
    "skill.nestjs.desc": "Framework Node.js modular enterprise-grade",
    "skill.fastify": "Fastify",
    "skill.fastify.desc": "Framework web de alta performance e baixo overhead",
    "skill.prisma": "Prisma",
    "skill.prisma.desc": "ORM type-safe com queries auto-geradas",
    "skill.grpc": "gRPC",
    "skill.grpc.desc": "RPC de alta performance para comunicação entre serviços",
    "skill.jest": "Jest",
    "skill.jest.desc": "Testes unitários e de integração com cobertura",
    "skill.websocket": "WebSocket",
    "skill.websocket.desc": "Comunicação bidirecional em tempo real",
    "skill.nginx": "Nginx",
    "skill.nginx.desc": "Proxy reverso, balanceamento e terminação SSL",

    "skill.postgresql": "PostgreSQL",
    "skill.postgresql.desc": "Banco de dados relacional ACID-compliant",
    "skill.mongodb": "MongoDB",
    "skill.mongodb.desc": "NoSQL baseado em documentos com pipelines de agregação",
    "skill.redis": "Redis",
    "skill.redis.desc": "Cache em memória, pub/sub e session store",
    "skill.aurora": "Aurora",
    "skill.aurora.desc": "Banco gerenciado AWS compatível com MySQL e PostgreSQL",
    "skill.sqlite": "SQLite",
    "skill.sqlite.desc": "Banco relacional leve e embarcado",

    "skill.lambda": "AWS Lambda",
    "skill.lambda.desc": "Computação serverless para funções event-driven",
    "skill.dynamodb": "DynamoDB",
    "skill.dynamodb.desc": "Banco NoSQL key-value totalmente gerenciado",
    "skill.ecs": "ECS",
    "skill.ecs.desc": "Orquestração de containers com task definitions",
    "skill.fargate": "Fargate",
    "skill.fargate.desc": "Motor de computação serverless para containers",
    "skill.apigateway": "API Gateway",
    "skill.apigateway.desc": "Endpoints de API REST e WebSocket gerenciados",
    "skill.eks": "EKS",
    "skill.eks.desc": "Clusters Kubernetes gerenciados na AWS",
    "skill.rds": "RDS",
    "skill.rds.desc": "Bancos relacionais gerenciados (PostgreSQL, MySQL)",
    "skill.sqs": "SQS",
    "skill.sqs.desc": "Serviço de filas de mensagens totalmente gerenciado",
    "skill.sns": "SNS",
    "skill.sns.desc": "Mensageria pub/sub e notificações push",
    "skill.cloudwatch": "CloudWatch",
    "skill.cloudwatch.desc": "Monitoramento, logging e observabilidade",

    "skill.aws": "AWS",
    "skill.aws.desc": "EC2, S3, Lambda, SQS, CloudFront, RDS",
    "skill.kubernetes": "Kubernetes EKS",
    "skill.kubernetes.desc": "Orquestração de containers em escala",
    "skill.docker": "Docker",
    "skill.docker.desc": "Containerização e builds multi-stage",
    "skill.cicd": "CI/CD",
    "skill.cicd.desc": "GitHub Actions, Jenkins e pipelines automatizados",
    "skill.azure": "Azure",
    "skill.azure.desc": "Serviços cloud e pipelines DevOps",

    "skill.microservices": "Microsserviços",
    "skill.microservices.desc": "Contextos delimitados domain-driven",
    "skill.systemdesign": "System Design",
    "skill.systemdesign.desc": "Arquiteturas escaláveis e tolerantes a falhas",
    "skill.eventdriven": "Event-Driven",
    "skill.eventdriven.desc": "Mensageria assíncrona com filas e tópicos",
    "skill.ddd": "DDD",
    "skill.ddd.desc": "Domain-Driven Design com contextos delimitados",
    "skill.tdd": "TDD",
    "skill.tdd.desc": "Desenvolvimento orientado a testes para código confiável",
    "skill.cleanarch": "Clean Architecture",
    "skill.cleanarch.desc": "Design em camadas com inversão de dependência",

    "skill.rabbitmq": "RabbitMQ",
    "skill.rabbitmq.desc": "Message broker AMQP para workflows assíncronos",
    "skill.kafka": "Kafka",
    "skill.kafka.desc": "Plataforma distribuída de event streaming",
    "skill.githubworkflow": "GitHub Workflow",
    "skill.githubworkflow.desc": "CI/CD com GitHub Actions e automação",
    "skill.codepipeline": "CodePipeline",
    "skill.codepipeline.desc": "Pipeline de entrega contínua gerenciado pela AWS",

    // Experience
    "experience.title": "Experiência Profissional",

    "exp.dbc.title": "Engenheiro de Software Sênior",
    "exp.dbc.company": "DBC Company",
    "exp.dbc.period": "Mar 2022 - Presente",
    "exp.dbc.r1": "Liderou o design end-to-end de sistemas para fluxos de checkout de e-commerce de alto tráfego, conduzindo análise de requisitos, planejamento de capacidade e prototipagem arquitetural para suportar 10k+ sessões simultâneas.",
    "exp.dbc.r2": "Conduziu iniciativas de gestão de riscos documentando modos de falha (FMEA), estabelecendo estratégias de rollback e mantendo registros de decisões arquiteturais (ADRs) para mudanças críticas na plataforma.",
    "exp.dbc.r3": "Mentorou 5+ engenheiros através de sessões estruturadas de pair programming, code reviews e workshops de compartilhamento de conhecimento sobre melhores práticas de Node.js e padrões de clean architecture.",
    "exp.dbc.r4": "Liderou um squad multifuncional de checkout, coordenando com produto, QA e design para entregar features de carrinho, pagamento e gestão de pedidos com deploys zero-downtime.",
    "exp.dbc.r5": "Arquitetou e integrou gateways de pagamento de terceiros (provedores tipo Stripe), APIs de logística e conectores ERP usando padrões adapter e resiliência com circuit-breaker.",
    "exp.dbc.r6": "Construiu e manteve pipelines de CI/CD na AWS (ECS, S3, CloudFront) e Azure DevOps; criou Dockerfiles, scripts de automação bash e templates de IaC para ambientes reprodutíveis.",
    "exp.dbc.r7": "Projetou e desenvolveu microsserviços Node.js event-driven com GraphQL Federation, implementando limites de domínio, schema stitching e rastreamento distribuído com OpenTelemetry.",
    "exp.dbc.techs": "Node.js, GraphQL, TypeScript, AWS, Azure, Docker, Kubernetes, RabbitMQ, PostgreSQL, Redis",

    "exp.corebiz.title": "Engenheiro de Software",
    "exp.corebiz.company": "Corebiz",
    "exp.corebiz.period": "Ago 2021 - Mar 2022",
    "exp.corebiz.r1": "Liderou a implementação do VTEX FastStore para a plataforma de comércio digital do Grupo Carrefour, migrando o storefront legado para uma arquitetura headless React/Next.js com ISR para carregamento de página em sub-segundo.",
    "exp.corebiz.r2": "Responsável pela entrega do squad de checkout, coordenando sprint planning, refinamento de backlog e coordenação de releases para módulos de pagamento e carrinho em múltiplas marcas.",
    "exp.corebiz.r3": "Desenvolveu microsserviços Node.js + GraphQL para orquestração de pedidos, sincronização de inventário e engines de promoção, deployados na infraestrutura serverless do VTEX IO.",
    "exp.corebiz.techs": "React, Next.js, VTEX IO, Node.js, GraphQL, TypeScript",

    "exp.enext.title": "Desenvolvedor Frontend",
    "exp.enext.company": "Enext",
    "exp.enext.period": "Mai 2021 - Ago 2021",
    "exp.enext.r1": "Construiu storefronts de e-commerce responsivos na plataforma VTEX usando React, jQuery e Sass, implementando componentes de vitrine customizados, filtros de busca e layouts de página de produto otimizados para Core Web Vitals.",
    "exp.enext.r2": "Forneceu orientação técnica para desenvolvedores juniores sobre ferramentas do CMS VTEX, workflows Git e padrões de reuso de componentes, reduzindo o tempo de onboarding em ~30%.",
    "exp.enext.r3": "Desenvolveu e deployou landing pages de campanhas sazonais via Salesforce Marketing Cloud, integrando blocos de conteúdo dinâmico com testes A/B e rastreamento de analytics.",
    "exp.enext.techs": "React, jQuery, Sass, VTEX, Salesforce Marketing Cloud",

    "exp.ncs.title": "Desenvolvedor Web",
    "exp.ncs.company": "NCS Consultoria",
    "exp.ncs.period": "Jan 2019 - Jan 2021",
    "exp.ncs.r1": "Administrou e manteve servidores de email Linux (Postfix/Dovecot) e camadas de persistência de arquivos NFS, garantindo 99.5%+ de uptime para 200+ usuários corporativos.",
    "exp.ncs.r2": "Projetou e desenvolveu uma aplicação web full-stack para gestão de processos empresariais usando PHP, MySQL e JavaScript vanilla, automatizando workflows de documentos e cadeias de aprovação.",
    "exp.ncs.r3": "Construiu o site institucional da empresa do zero com design responsivo, otimização SEO e integração com CMS para editores de conteúdo não-técnicos.",
    "exp.ncs.techs": "PHP, MySQL, JavaScript, Linux, HTML/CSS",

    // Projects
    "projects.title": "Projetos em Destaque",
    "project.odontoprev.title": "Odontoprev",
    "project.odontoprev.desc": "Criação de uma nova plataforma de e-commerce usando VTEX IO com React e Node.",
    "project.comunix.title": "Comunix",
    "project.comunix.desc": "Criação de microsserviços para uma empresa de soluções de recursos humanos para o setor de seguros.",
    "project.carrefour.title": "Carrefour",
    "project.carrefour.desc": "Criação de soluções para a plataforma de e-commerce usando VTEX, incluindo checkout e processamento de pagamentos.",
    "project.sfera.title": "Sfera",
    "project.sfera.desc": "Desenvolvimento de novo site showcase com ReactJS e Strapi para uma empresa de engenharia e arquitetura.",

    // Education
    "education.title": "Educação & Certificados",
    "edu.unip.title": "Análise e Desenvolvimento de Sistemas",
    "edu.unip.institution": "UNIP",
    "edu.vtex1.title": "VTEX Implementation Specialist",
    "edu.vtex1.institution": "VTEX",
    "edu.vtex2.title": "VTEX IO Developer",
    "edu.vtex2.institution": "VTEX",
    "edu.clean.title": "Clean Code e Clean Architecture",
    "edu.clean.institution": "Rodrigo Branas",
    "edu.degree": "Graduação",
    "edu.certificate": "Certificado",

    // Contact
    "contact.title": "Vamos Conversar",
    "contact.subtitle": "Entre em Contato",
    "contact.description": "Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades de fazer parte da sua visão.",

    // Footer
    "footer.rights": "Todos os direitos reservados.",
  },
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en")

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "en" ? "pt" : "en"))
  }, [])

  const t = useCallback(
    (key: string) => {
      return translations[lang][key] || key
    },
    [lang]
  )

  return (
    <I18nContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
