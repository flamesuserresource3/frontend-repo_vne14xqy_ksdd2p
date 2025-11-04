import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Interactive 3D Landing',
    description: 'A playful WebGL landing experience integrated with Spline and smooth page transitions.',
    tags: ['React', 'Spline', 'Framer Motion'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Realtime Chat App',
    description: 'End-to-end chat with live presence, emojis, and message reactions.',
    tags: ['FastAPI', 'WebSockets', 'MongoDB'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Portfolio CMS',
    description: 'Markdown-powered portfolio with SEO, image optimization, and content scheduling.',
    tags: ['React', 'FastAPI', 'Tailwind'],
    link: '#',
    repo: '#',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Selected Projects</h2>
          <p className="mt-2 text-slate-300 max-w-2xl">A few things I’ve been building recently.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors"
            >
              <div className="p-5">
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-slate-300">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs text-cyan-300/90 bg-cyan-500/10 border border-cyan-500/20 px-2 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={p.link}
                    className="inline-flex items-center gap-1 text-sm text-white/90 hover:text-white"
                  >
                    Live <ExternalLink size={16} />
                  </a>
                  <a
                    href={p.repo}
                    className="inline-flex items-center gap-1 text-sm text-white/90 hover:text-white"
                  >
                    Code <Github size={16} />
                  </a>
                </div>
              </div>
              <div className="pointer-events-none absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 [mask-image:radial-gradient(200px_200px_at_var(--x)_var(--y),white,transparent)]" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
