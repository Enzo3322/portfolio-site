import { Github, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-10 border-t border-gray-800">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-400 mb-4 md:mb-0">© {new Date().getFullYear()} Enzo. All rights reserved.</div>

        <div className="flex space-x-6">
          <a
            href="mailto:enzo@example.com"
            className="text-gray-400 hover:text-purple-400 transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  )
}
