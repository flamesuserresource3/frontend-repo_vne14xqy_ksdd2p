import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Gradient overlays (do not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/20 to-slate-950" />
      <div className="pointer-events-none absolute -inset-x-20 -top-20 h-72 blur-3xl [mask-image:radial-gradient(closest-side,white,transparent)] bg-[conic-gradient(at_top_left,theme(colors.cyan.500)_0%,theme(colors.blue.500)_20%,transparent_60%)] opacity-40" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center min-h-[80vh]">
        <div className="max-w-2xl">
          <p className="text-cyan-400 mb-3 font-medium">Hi, I’m Alex</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Building modern, playful experiences for the web
          </h1>
          <p className="mt-4 text-slate-300 max-w-xl">
            I’m a full‑stack developer crafting interactive products — blending performant code, delightful motion, and thoughtful design.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-cyan-400 transition-colors"
            >
              View Projects
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/10 px-5 py-3 text-sm font-semibold text-white hover:bg-white/5"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
