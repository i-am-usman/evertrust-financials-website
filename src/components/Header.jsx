import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Header() {
  const cleanPath = window.location.pathname.replace(/\/+$/, '').replace('.html', '') || '/';

  const isActive = (path) => {
    return cleanPath === path;
  };

  return (
    <header className="mx-auto mt-4 flex w-[min(1180px,calc(100%-1.5rem))] flex-col items-center justify-between gap-4 rounded-3xl border border-slate-200/80 bg-white/95 px-5 py-4 shadow-[0_24px_70px_rgba(15,23,42,0.12)] backdrop-blur-xl sticky top-4 z-[999] xl:flex-row">
      
      <a className="flex items-center gap-3" href="/">
        <img src="/logo.png" alt="EverTrust Financials logo" className="h-13 w-13 rounded-2xl bg-white object-contain shadow-sm" />
        <span className="grid leading-tight text-center xl:text-left">
          <strong className="font-[Fraunces] text-[1.05rem] tracking-[-0.02em] text-slate-900">
            EverTrust Financials
          </strong>
          <small className="hidden text-slate-500 lg:block">
            Outsourced bookkeeping that scales with you
          </small>
        </span>
      </a>

      {/* The brand new, streamlined navigation bar */}
      <nav className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 text-sm font-semibold">
        <a href="/" className={`transition hover:text-sky-600 ${isActive('/') ? 'text-sky-700' : 'text-slate-600'}`}>
          Home
        </a>
        <a href="/services" className={`transition hover:text-sky-600 ${isActive('/services') ? 'text-sky-700' : 'text-slate-600'}`}>
          Services
        </a>
        <a href="/why-us" className={`transition hover:text-sky-600 ${isActive('/why-us') ? 'text-sky-700' : 'text-slate-600'}`}>
          Why Choose Us
        </a>
        <a href="/meet-the-team" className={`transition hover:text-sky-600 ${isActive('/meet-the-team') ? 'text-sky-700' : 'text-slate-600'}`}>
          Meet the Team
        </a>
        <a href="/contact" className={`transition hover:text-sky-600 ${isActive('/contact') ? 'text-sky-700' : 'text-slate-600'}`}>
          Contact
        </a>
      </nav>

      <a className="inline-flex w-full justify-center items-center gap-2 rounded-full bg-sky-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-sky-600/20 transition hover:-translate-y-0.5 hover:bg-sky-700 md:w-auto" href="/contact">
        Book a Consultation
        <ArrowRight size={18} />
      </a>
    </header>
  );
}