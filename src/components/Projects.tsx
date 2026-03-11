import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Study Tracker',
    description:
      'Plataforma de acompanhamento de estudos com planos estruturados por mês/semana, tracking de progresso, materiais de estudo integrados e sugestões via IA.',
    techs: ['React', 'Vite', 'Python', 'JavaScript'],
    github: 'https://github.com/Gabriel-sys-hub/study-tracker',
    live: 'https://gabriel-sys-hub.github.io/study-tracker/',
    image: 'https://github.com/user-attachments/assets/ef11e083-cd3c-4283-aa1e-a15f6462fbce',
  },
  {
    title: 'Docs AI',
    description:
      'Plataforma inteligente para análise e processamento de documentos utilizando Inteligência Artificial para extração e organização de informações.',
    techs: ['TypeScript', 'JavaScript', 'AI/ML', 'HTML'],
    github: 'https://github.com/Gabriel-sys-hub/docsai',
    live: null,
    image: null,
  },
  {
    title: 'Ebytr - Task Manager',
    description:
      'Aplicação full-stack de gerenciamento de tarefas com autenticação, CRUD completo e interface responsiva. Backend em Node.js/Express com MongoDB.',
    techs: ['React', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    github: 'https://github.com/Gabriel-sys-hub/Ebytr',
    live: null,
    image: 'https://user-images.githubusercontent.com/77814658/141337479-fb403b78-aa02-4eec-ace7-9af11e8763a9.png',
  },
  {
    title: 'Corebiz - E-commerce',
    description:
      'Layout responsivo de e-commerce com carousel de produtos consumindo API externa, carrinho de compras funcional.',
    techs: ['React', 'TypeScript', 'REST API', 'CSS'],
    github: 'https://github.com/Gabriel-sys-hub/corebiz',
    live: null,
    image: 'https://user-images.githubusercontent.com/77814658/141337489-cf9528cf-04ec-4c9d-848f-1cf6109806bf.png',
  },
  {
    title: 'Let Me Ask',
    description:
      'Aplicação de Q&A em tempo real com autenticação Google, criação de salas, sistema de likes e gerenciamento de perguntas.',
    techs: ['React', 'Firebase', 'TypeScript', 'SASS'],
    github: 'https://github.com/Gabriel-sys-hub',
    live: 'https://let-me-ask-5f558.web.app/',
    image: null,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="flex items-center gap-4 text-2xl font-bold text-white mb-12">
          <span className="text-accent font-mono text-lg">03.</span>
          Projetos
          <span className="h-px bg-neutral-800 flex-1 max-w-xs" />
        </h2>

        <div className="grid gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-secondary/50 rounded-xl border border-neutral-800 hover:border-neutral-700 overflow-hidden transition-all hover:-translate-y-1"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {/* Project Image */}
                <a
                  href={project.live || project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden"
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    />
                  ) : (
                    <div className="w-full h-full min-h-[200px] bg-gradient-to-br from-accent/20 to-secondary flex items-center justify-center">
                      <span className="text-6xl font-bold text-neutral-700">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}
                </a>

                {/* Project Info */}
                <div className="p-6 flex flex-col justify-center">
                  <p className="text-accent font-mono text-xs mb-2">Projeto em Destaque</p>
                  <h3 className="text-xl font-bold text-white mb-3">
                    <a
                      href={project.live || project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-accent transition-colors"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-2 mb-4">
                    {project.techs.map((tech) => (
                      <li
                        key={tech}
                        className="px-3 py-1 bg-primary/50 rounded-full font-mono text-xs text-neutral-400"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-accent transition-colors"
                        aria-label="GitHub"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-accent transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Link */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Gabriel-sys-hub"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors font-mono text-sm"
          >
            Ver mais no GitHub
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  )
}
