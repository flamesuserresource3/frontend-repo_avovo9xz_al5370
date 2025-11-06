import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="relative py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="w-6 h-6 text-cyan-400" />
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h3 className="text-xl font-semibold">Bachelor of Computer Applications (BCA)</h3>
            <p className="text-white/80 mt-1">Trinity Institute of Innovations in Professional Studies</p>
            <p className="text-white/60 text-sm">Guru Gobind Singh Indraprastha University</p>
            <p className="text-white/70 mt-2">Sep 2024 — June 202X</p>
            <div className="mt-3 flex items-center gap-2 text-emerald-300">
              <Award className="w-4 h-4" />
              <span>Rank 1 in Semester 1 • 8.5 SGPA</span>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur space-y-2">
            <p className="text-white/90">12th passed — C.B.S.E Board (Apr 2023 — Mar 2024)</p>
            <p className="text-white/90">10th passed — C.B.S.E Board (Apr 2021 — Mar 2022)</p>
            <p className="text-white/60 text-sm">DOB: 21.11.2005</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
