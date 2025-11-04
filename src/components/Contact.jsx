import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Let’s build something together</h2>
          <p className="mt-2 text-slate-300 max-w-2xl">
            I’m open to freelance work, collaborations, and full‑time opportunities.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          <a
            href="mailto:you@example.com"
            className="group rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-cyan-500/15 p-2 text-cyan-300"><Mail /></div>
              <div>
                <div className="font-semibold text-white">Email</div>
                <div className="text-sm text-slate-300">you@example.com</div>
              </div>
            </div>
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="group rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-cyan-500/15 p-2 text-cyan-300"><Github /></div>
              <div>
                <div className="font-semibold text-white">GitHub</div>
                <div className="text-sm text-slate-300">Follow my code</div>
              </div>
            </div>
          </a>

          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="group rounded-xl border border-white/10 bg-white/[0.02] p-6 hover:bg-white/[0.04] transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-cyan-500/15 p-2 text-cyan-300"><Linkedin /></div>
              <div>
                <div className="font-semibold text-white">LinkedIn</div>
                <div className="text-sm text-slate-300">Let’s connect</div>
              </div>
            </div>
          </a>
        </div>

        <p className="mt-10 text-xs text-slate-400">© {new Date().getFullYear()} Alex Doe. All rights reserved.</p>
      </div>
    </section>
  );
}
