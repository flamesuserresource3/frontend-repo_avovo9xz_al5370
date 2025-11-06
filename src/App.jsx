import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/50 border-b border-white/10">
      <nav className="mx-auto max-w-7xl px-6 md:px-10 h-14 flex items-center justify-between">
        <a href="#home" className="text-white font-semibold tracking-tight">Rishav</a>
        <div className="hidden md:flex items-center gap-6 text-slate-300">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
        <a href="mailto:Rishavjaiswal76781@gmail.com" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition text-white px-3 py-1.5 text-sm font-semibold shadow shadow-indigo-600/30">
          Get in touch
        </a>
      </nav>
    </header>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main className="pt-14">
        <Hero />
        <About />
        <Skills />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
