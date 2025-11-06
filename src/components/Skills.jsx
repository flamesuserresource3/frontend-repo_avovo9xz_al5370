import React from 'react';

const skills = {
  "Programming": ["Python", "C Language", "Java", "Node.js", "Express", "SQL", "Django", "HTML & CSS"],
  "Data Tools": ["MS Excel"],
  "Foundations": ["DSA using C", "Problem Solving", "Slide Presentation"],
};

const certifications = [
  'Web Development Fundamentals - IBM',
  'MS Excel - Lernx',
  'Python 3 - Lernx',
  'MEAN Full Stack - Lernx',
  'Volunteering in TechSamaaroh 5.0 - Cyber Heist',
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <h2 className="text-3xl font-bold text-white">Skills & Certifications</h2>
        <p className="mt-2 text-slate-300 max-w-2xl">A blend of analytical thinking and backend know-how, with hands-on practice across languages and tools.</p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">{group}</h3>
              <ul className="mt-3 text-slate-300 space-y-2">
                {items.map((s) => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-indigo-400" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-xl border border-white/10 bg-gradient-to-br from-indigo-600/10 to-fuchsia-600/10 p-6">
          <h3 className="text-xl font-semibold text-white">Certifications</h3>
          <div className="mt-3 grid md:grid-cols-2 gap-3 text-slate-200">
            {certifications.map((c) => (
              <div key={c} className="flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-fuchsia-400" />
                {c}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
