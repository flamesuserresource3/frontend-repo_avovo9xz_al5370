import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="relative py-20 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <Briefcase className="w-6 h-6 text-cyan-400" />
          <h2 className="text-3xl md:text-4xl font-bold">Experience</h2>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
            <h3 className="text-xl font-semibold">Cyber Knight — Project Head</h3>
            <p className="text-white/70">04/2025 — Present</p>
          </div>
          <ul className="mt-4 list-disc list-inside space-y-2 text-white/90">
            <li>Led planning, coordination, and execution of club events; ensured smooth operations and high engagement.</li>
            <li>Spearheaded a Capture the Flag (CTF) competition, managing end-to-end event delivery.</li>
            <li>Led backend development and testing of CTF challenges using Node.js, Express, and MySQL with a focus on security.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
