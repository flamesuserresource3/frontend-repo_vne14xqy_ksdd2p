import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <main>
        <Hero />

        {/* Divider */}
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent" />
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="h-px bg-white/10" />
          </div>
        </div>

        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
