import { Mail } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-accent font-mono text-sm mb-4">04. E agora?</p>
        <h2 className="text-4xl font-bold text-white mb-6">Vamos Conversar</h2>
        <p className="text-neutral-400 mb-8 leading-relaxed">
          Estou sempre aberto a novas oportunidades e projetos interessantes.
          Se você tem uma ideia, uma pergunta ou apenas quer dizer oi,
          minha caixa de entrada está sempre aberta!
        </p>
        <a
          href="mailto:gabrielfernandessilva.ba@gmail.com"
          className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white font-medium rounded hover:bg-accent/90 transition-colors"
        >
          <Mail size={20} />
          Diga Olá
        </a>
      </div>
    </section>
  )
}
