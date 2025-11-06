import React from 'react';
import { BadgeCheck, Code, Database, BarChart3 } from 'lucide-react';

const badge = 'inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium bg-white/5 border border-white/10';

const SkillsCerts = () => {
  const skills = [
    'Python', 'SQL', 'MS Excel', 'C', 'HTML', 'CSS', 'Node.js', 'Express', 'MySQL', 'Java', 'Django', 'DSA using C', 'Problem Solving', 'Slide Presentation'
  ];

  const certs = [
    'Web Development Fundamentals — IBM',
    'MS Excel — Lernx',
    'Python 3 — Lernx',
    'MEAN Full Stack — Lernx',
    'Volunteering — TechSamaaroh 5.0 (Cyber Heist)'
  ];

  return (
    <section id="skills" className="relative py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Code className="w-6 h-6 text-cyan-400" />
              <h2 className="text-3xl md:text-4xl font-bold">Skills</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span key={s} className={badge}>{s}</span>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <BadgeCheck className="w-6 h-6 text-emerald-400" />
              <h2 className="text-3xl md:text-4xl font-bold">Certifications</h2>
            </div>
            <ul className="space-y-3">
              {certs.map((c) => (
                <li key={c} className="flex items-start gap-3">
                  <span className="mt-1 w-2 h-2 rounded-full bg-emerald-400" />
                  <span className="text-white/90">{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="flex items-center gap-3 mb-4">
            <BarChart3 className="w-5 h-5 text-cyan-300" />
            <h3 className="text-xl font-semibold">Evaluation</h3>
          </div>
          <ul className="grid md:grid-cols-2 gap-3 text-white/90">
            <li>Strong communication and interpersonal skills</li>
            <li>Effective team player under pressure and tight deadlines</li>
            <li>Quick learner with a positive, professional attitude</li>
            <li>Good organizational and leadership capabilities</li>
            <li>Confident in public speaking and presentations</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsCerts;
