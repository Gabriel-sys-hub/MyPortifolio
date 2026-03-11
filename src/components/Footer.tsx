import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-neutral-800">
      <div className="max-w-4xl mx-auto">
        {/* Mobile Social Links */}
        <div className="flex justify-center gap-6 mb-6 lg:hidden">
          <a
            href="https://github.com/Gabriel-sys-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/gabrielpfernandes/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:gabrielfernandessilva.ba@gmail.com"
            className="text-neutral-400 hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>

        <p className="text-center text-neutral-500 text-sm font-mono">
          Desenvolvido por{' '}
          <a
            href="https://github.com/Gabriel-sys-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-accent transition-colors"
          >
            Gabriel Fernandes
          </a>
        </p>
      </div>
    </footer>
  )
}
