import React from 'react';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <h2 className="text-2xl md:text-3xl font-bold text-white">About Rishav</h2>
            <p className="mt-2 text-slate-300">Enthusiastic and quick-learning BCA student focused on data analysis and backend development.</p>
          </div>
          <div className="md:col-span-2 space-y-6">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">Objective</h3>
              <p className="mt-2 text-slate-300">
                Enthusiastic and quick-learning 1st-year BCA student with a solid foundation in programming, backend development, and data analysis tools. Passionate about extracting insights from data using Python, SQL and Excel. Seeking an opportunity to apply analytical skills and contribute to impactful projects while growing into a proficient Data Analyst.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6 grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-white">Education</h3>
                <ul className="mt-3 space-y-2 text-slate-300">
                  <li>
                    <span className="font-medium text-white">Bachelor Of Computer Applications (BCA)</span>
                    <div className="text-sm">GGSIPU · Trinity Institute of Innovations in Professional Studies</div>
                    <div className="text-xs text-slate-400">Sep 2024 – June 202X</div>
                    <div className="text-xs text-slate-400">Secured Rank 1 in Semester 1 with an 8.5 SGPA</div>
                  </li>
                  <li className="pt-3 border-t border-white/10">
                    <div className="text-sm">12th · C.B.S.E Board (Apr 2023 – Mar 2024)</div>
                  </li>
                  <li>
                    <div className="text-sm">10th · C.B.S.E Board (Apr 2021 – Mar 2022)</div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Experience</h3>
                <ul className="mt-3 space-y-2 text-slate-300">
                  <li>
                    <span className="font-medium text-white">Cyber Knight · Project Head</span>
                    <div className="text-xs text-slate-400">04/2025 – Present</div>
                    <p className="mt-1">Led planning, coordination and delivery of CTF events; developed and tested backend challenges using Node.js, Express and MySQL; ensured secure, engaging participant experience.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-xl font-semibold text-white">Contact</h3>
              <ul className="mt-3 text-slate-300 space-y-1">
                <li>Phone: <a href="tel:+917678131456" className="hover:underline">+91 7678131456</a></li>
                <li>Email: <a href="mailto:Rishavjaiswal76781@gmail.com" className="hover:underline">Rishavjaiswal76781@gmail.com</a></li>
                <li>Location: New Delhi</li>
                <li>DOB: 21.11.2005</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
