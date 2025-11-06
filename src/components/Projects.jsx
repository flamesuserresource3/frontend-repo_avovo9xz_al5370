import React from 'react';

const projects = [
  {
    title: 'CTF Backend Challenges',
    period: '2025',
    desc: 'Designed and tested secure Capture the Flag challenges. Built backend services with Node.js, Express, and MySQL to handle submissions and scoring.',
    tags: ['Node.js', 'Express', 'MySQL', 'Security'],
  },
  {
    title: 'Data Insights Mini-Lab',
    period: '2024',
    desc: 'Exploratory data analyses using Python, Pandas, and Excel across academic datasets. Focus on cleaning, feature discovery, and visual storytelling.',
    tags: ['Python', 'Pandas', 'Excel'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl font-bold text-white">Highlighted Work</h2>
          <a href="#contact" className="text-indigo-300 hover:text-indigo-200">Let’s collaborate →</a>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/[0.08] transition">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                <span className="text-xs text-slate-400">{p.period}</span>
              </div>
              <p className="mt-2 text-slate-300">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full bg-indigo-600/10 text-indigo-300 border border-indigo-500/20">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
