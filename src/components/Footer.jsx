import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="w-full bg-slate-950 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 md:px-10 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-semibold">Rishav • Portfolio</p>
            <p className="text-slate-400 text-sm">Built with React, Tailwind and a playful 3D touch.</p>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <a href="mailto:Rishavjaiswal76781@gmail.com" className="hover:underline">Email</a>
            <a href="tel:+917678131456" className="hover:underline">Call</a>
            <a href="#home" className="hover:underline">Back to top</a>
          </div>
        </div>
        <p className="mt-6 text-center text-xs text-slate-500">© {new Date().getFullYear()} Rishav. All rights reserved.</p>
      </div>
    </footer>
  );
}
