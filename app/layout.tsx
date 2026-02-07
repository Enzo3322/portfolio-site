import type React from "react"
import type { Metadata } from "next"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { I18nProvider } from "@/lib/i18n"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

const siteUrl = "https://spag.dev"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Enzo Spagnolli | Senior Software Engineer",
    template: "%s | Enzo Spagnolli",
  },
  description:
    "Portfolio of Enzo Spagnolli, a Senior Software Engineer specializing in scalable web applications, Node.js microservices, React, TypeScript, and cloud architecture.",
  keywords: [
    "Senior Software Engineer",
    "Full-Stack Developer",
    "Node.js",
    "React",
    "TypeScript",
    "GraphQL",
    "AWS",
    "Microservices",
    "System Design",
    "Next.js",
    "Portfolio",
    "Enzo Spagnolli",
    "Software Engineer",
    "Web Developer",
    "VTEX",
    "E-commerce Developer",
  ],
  authors: [{ name: "Enzo Spagnolli", url: siteUrl }],
  creator: "Enzo Spagnolli",
  publisher: "Enzo Spagnolli",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "pt_BR",
    url: siteUrl,
    siteName: "Enzo Spagnolli | Senior Software Engineer",
    title: "Enzo Spagnolli | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in scalable web applications, Node.js microservices, React, TypeScript, and cloud architecture.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enzo Spagnolli | Senior Software Engineer",
    description:
      "Senior Software Engineer specializing in scalable web applications, Node.js microservices, React, TypeScript, and cloud architecture.",
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
      "pt-BR": `${siteUrl}?lang=pt`,
    },
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Enzo Spagnolli",
    url: siteUrl,
    jobTitle: "Senior Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "DBC Company",
    },
    knowsAbout: [
      "Node.js",
      "React",
      "TypeScript",
      "GraphQL",
      "AWS",
      "Docker",
      "Kubernetes",
      "Microservices",
      "System Design",
      "Next.js",
      "PostgreSQL",
      "Redis",
    ],
    sameAs: ["https://github.com/Enzo3322"],
    email: "enzo.spag14@gmail.com",
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "UNIP",
    },
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  )
}
