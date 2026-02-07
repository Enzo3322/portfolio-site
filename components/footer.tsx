"use client"

import { Github, Mail } from "lucide-react"
import { useI18n } from "@/lib/i18n"

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="py-10 border-t border-gray-100">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-500 text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Enzo. {t("footer.rights")}
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="mailto:enzo.spag14@gmail.com"
            className="text-gray-500 hover:text-violet-600 transition-colors duration-200"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/Enzo3322"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-violet-600 transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
