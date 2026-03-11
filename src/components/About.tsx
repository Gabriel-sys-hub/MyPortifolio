export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="flex items-center gap-4 text-2xl font-bold text-white mb-8">
          <span className="text-accent font-mono text-lg">01.</span>
          Sobre Mim
          <span className="h-px bg-neutral-800 flex-1 max-w-xs" />
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4">
            <p className="text-neutral-400 leading-relaxed">
              Olá! Sou o Gabriel, um desenvolvedor que transforma ideias em
              experiências digitais. Minha trajetória mistura código, criatividade
              e empreendedorismo — já fui fotógrafo, designer e dono de negócio,
              o que moldou minha forma de pensar produtos com foco no usuário.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              Hoje, meu foco está em construir aplicações web que sejam rápidas,
              acessíveis e agradáveis de usar. Acredito que bom código é aquele
              que resolve problemas reais de forma elegante — e é isso que busco
              entregar em cada projeto.
            </p>
            <p className="text-neutral-400 leading-relaxed">
              Tecnologias que tenho usado no dia a dia:
            </p>

            <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
              {[
                'JavaScript (ES6+)',
                'TypeScript',
                'React',
                'Node.js',
                'Next.js',
                'TailwindCSS',
              ].map((tech) => (
                <li key={tech} className="flex items-center gap-2 text-neutral-300">
                  <span className="text-accent">▹</span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group">
            <div className="relative z-10 rounded overflow-hidden">
              <img
                src="https://avatars.githubusercontent.com/u/77814658"
                alt="Gabriel Fernandes"
                className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-accent/20 hover:bg-transparent transition-colors" />
            </div>
            <div className="absolute inset-0 border-2 border-accent rounded translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
          </div>
        </div>
      </div>
    </section>
  )
}
