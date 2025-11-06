import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative w-full min-h-[90vh] overflow-hidden bg-slate-950">
      <div className="absolute inset-0 opacity-50">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(99,102,241,0.25),transparent_50%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10 py-16 grid md:grid-cols-2 gap-8 items-center relative">
        <div className="relative z-10">
          <span className="inline-block rounded-full bg-indigo-600/10 text-indigo-300 border border-indigo-500/30 px-3 py-1 text-xs font-medium tracking-wide">
            Rishav · Aspiring Data Analyst
          </span>
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Turning data into insights for real-world impact
          </h1>
          <p className="mt-4 text-slate-300 md:text-lg">
            1st-year BCA student with a solid foundation in backend development and data analysis tools.
            Passionate about Python, SQL, and Excel to discover patterns and drive decisions.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#about" className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 transition text-white px-5 py-3 font-semibold shadow-lg shadow-indigo-600/30">
              Explore Profile
            </a>
            <a href="#skills" className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/20 transition text-white px-5 py-3 font-semibold border border-white/20">
              View Skills
            </a>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6 text-slate-300 max-w-md">
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400">Based in</p>
              <p className="font-medium">New Delhi, India</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-slate-400">Contact</p>
              <a href="mailto:Rishavjaiswal76781@gmail.com" className="font-medium hover:underline">Rishavjaiswal76781@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="relative aspect-video md:aspect-auto md:h-[560px] rounded-2xl overflow-hidden ring-1 ring-white/10">
          <Spline
            scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-slate-900/20" />
        </div>
      </div>
    </section>
  );
}
