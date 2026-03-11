import { Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      {/* Social Links - Fixed Left */}
      <div className="hidden lg:flex fixed left-8 bottom-0 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-neutral-700">
        <a
          href="https://github.com/Gabriel-sys-hub"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-accent hover:-translate-y-1 transition-all"
          aria-label="GitHub"
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/gabrielpfernandes/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-accent hover:-translate-y-1 transition-all"
          aria-label="LinkedIn"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="mailto:gabriel@email.com"
          className="text-neutral-400 hover:text-accent hover:-translate-y-1 transition-all"
          aria-label="Email"
        >
          <Mail size={20} />
        </a>
      </div>

      {/* Email - Fixed Right */}
      <div className="hidden lg:flex fixed right-8 bottom-0 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-neutral-700">
        <a
          href="mailto:gabriel@email.com"
          className="text-neutral-400 hover:text-accent transition-colors text-sm tracking-widest"
          style={{ writingMode: 'vertical-rl' }}
        >
          gabriel@email.com
        </a>
      </div>

      {/* Hero Content */}
      <div className="max-w-3xl">
        <p className="text-accent font-mono text-sm mb-4 animate-fade-in">
          Olá, meu nome é
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4">
          Gabriel Fernandes.
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-neutral-400 mb-6">
          Eu construo experiências digitais.
        </h2>
        <p className="text-neutral-400 text-lg max-w-xl mb-8 leading-relaxed">
          Desenvolvedor Full Stack focado em criar aplicações web modernas,
          performáticas e com excelente experiência de usuário.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-8 py-3 bg-accent text-white font-medium rounded hover:bg-accent/90 transition-colors"
          >
            Ver Projetos
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-neutral-700 text-neutral-300 font-medium rounded hover:border-accent hover:text-accent transition-colors"
          >
            Entrar em Contato
          </a>
        </div>

        {/* Mobile Social Links */}
        <div className="flex lg:hidden gap-6 mt-8">
          <a
            href="https://github.com/Gabriel-sys-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-accent transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/gabrielpfernandes/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-400 hover:text-accent transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:gabriel@email.com"
            className="text-neutral-400 hover:text-accent transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
