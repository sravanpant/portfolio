import { Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 bg-secondary/5">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm  text-blue-500">
              © {new Date().getFullYear()} Sravan Pant. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-4 ">
            <a
              href="https://github.com/sravanpant"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="h-5 w-5 text-blue-500" />
            </a>
            <a
              href="https://twitter.com/sravanpant"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Twitter className="h-5 w-5 text-blue-500" />
            </a>
            <a
              href="https://linkedin.com/in/sravanpant"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="h-5 w-5 text-blue-500" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}