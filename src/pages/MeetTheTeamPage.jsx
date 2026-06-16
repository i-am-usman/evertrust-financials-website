import React from 'react';
import { ArrowRight, Mail, Linkedin } from 'lucide-react';
import Header from '../components/Header'; // <-- We import the new shared header here!

export default function MeetTheTeamPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-12">
      
      {/* We use the shared component here so it matches every other page */}
      <Header />

      <main className="mx-auto w-[min(1180px,calc(100%-1.5rem))] mt-8 md:mt-12">
        <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-7 md:p-10 lg:p-12">
              <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-sky-600">Meet the EverTrust Team</p>
              <h2 className="font-[Fraunces] text-4xl leading-[0.95] tracking-[-0.02em] text-slate-900 md:text-6xl">
                Dedicated to keeping your business compliant, profitable, and stress-free across borders.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                EverTrust Financials brings modern systems, automation, and responsive support to outsourced bookkeeping, payroll, and cross-border finance operations.
              </p>
            </div>

            <div className="relative min-h-[280px] bg-gradient-to-br from-sky-50 via-white to-teal-50 p-6 md:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.14),transparent_28%),radial-gradient(circle_at_75%_35%,rgba(20,184,166,0.16),transparent_24%)]" />
              <div className="relative flex h-full items-center justify-center">
                <img 
                    src="/logo.png" 
                    alt="EverTrust Financials logo" 
                    className="w-full h-auto max-w-[290px] object-contain drop-shadow-[0_18px_40px_rgba(15,23,42,0.14)]" 
                />
                </div>
            </div>
          </div>
        </section>

        {/* I un-commented your founder section so Saif appears correctly! */}
        {/* <section className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-slate-50 p-7 md:p-10 lg:p-12">
              <div className="mx-auto flex h-56 w-56 items-center justify-center rounded-full border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                <img src="/founder.png" alt="Saif Joyo headshot" className="h-48 w-48 rounded-full object-cover" />
              </div>    
            </div>
            <div className="p-7 md:p-10 lg:p-12">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sky-600">Founder Highlight</p>
              <h2 className="mt-3 font-[Fraunces] text-3xl tracking-[-0.02em] text-slate-900 md:text-4xl">Saif Joyo</h2>
              <p className="mt-2 text-lg font-semibold text-sky-700">Founder & Principal Consultant</p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
                With a strong foundation in modern technology and data management, I founded EverTrust Financials to bring precision, automation, and total transparency to cross-border accounting.
              </p>
              <a className="mt-7 inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-sky-600/20 transition hover:-translate-y-0.5 hover:bg-sky-700" href="mailto:founder@evertrustfinancials.services">
                Contact Saif
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section> */}

        <section className="mt-8">
          <div className="mb-6">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sky-600">Team Grid</p>
            <h2 className="mt-3 font-[Fraunces] text-3xl tracking-[-0.02em] text-slate-900 md:text-4xl">Meet the people behind the service.</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.14)]">
              <div className="flex justify-center">
                <div className="flex h-36 w-36 items-center justify-center rounded-full border-4 border-slate-100 bg-slate-50 shadow-inner">
                  <img src="/iqra-mirani.png" alt="Iqra Mirani, Business Development Representative" className="h-32 w-32 rounded-full object-cover" />
                </div>
              </div>
              <div className="mt-5 text-center">
                <h3 className="font-[Fraunces] text-2xl tracking-[-0.02em] text-slate-900">Iqra Mirani</h3>
                <p className="mt-2 text-sm font-bold text-sky-700">Business Development Representative</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Dedicated to understanding client needs and crafting tailored financial solutions that drive growth.
                </p>
                <a className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-sky-700 transition hover:text-sky-800" href="mailto:sales@evertrustfinancials.services">
                  <Mail size={16} /> sales@evertrustfinancials.services
                </a>
              </div>
            </article>

            <article className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.14)]">
              <div className="flex justify-center">
                <div className="flex h-36 w-36 items-center justify-center rounded-full border-4 border-slate-100 bg-slate-50 shadow-inner">
                  <img src="/PP.jpeg" alt="Muhammad Usman, Technical Lead & Automation Engineer" className="h-32 w-32 rounded-full object-cover" />
                </div>
              </div>
              <div className="mt-5 text-center">
                <h3 className="font-[Fraunces] text-2xl tracking-[-0.02em] text-slate-900">Muhammad Usman</h3>
                <p className="mt-2 text-sm font-bold text-sky-700">Technical Lead & Automation Engineer</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Architecting secure web infrastructure and custom automation solutions to ensure a fast, seamless, and deeply reliable experience for our clients.
                </p>
                <a className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-sky-700 transition hover:text-sky-800" href="https://www.linkedin.com/in/muhammad-usman-ai-ml/" target="_blank" rel="noreferrer">
                  <Linkedin size={16} /> View LinkedIn
                </a>
              </div>
            </article>

            <article className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.14)]">
              <div className="flex justify-center">
                <div className="flex h-36 w-36 items-center justify-center rounded-full border-4 border-slate-100 bg-slate-50 shadow-inner">
                  <img src="/hina-batool.jpg" alt="Hina Batool, Financial Analyst" className="h-32 w-32 rounded-full object-cover" />
                </div>
              </div>
              <div className="mt-5 text-center">
                <h3 className="font-[Fraunces] text-2xl tracking-[-0.02em] text-slate-900">Hina Batool</h3>
                <p className="mt-2 text-sm font-bold text-sky-700">Financial Analyst</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Bringing specialized expertise from one of the top global accounting firms to deliver deep financial insight, risk analysis, and strategic forecasting.
                </p>
                <a className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-sky-700 transition hover:text-sky-800" href="mailto:hina@evertrustfinancials.services">
                  <Mail size={16} /> Contact Hina
                </a>
              </div>
            </article>

            <article className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.14)]">
              <div className="flex justify-center">
                <div className="flex h-36 w-36 items-center justify-center rounded-full border-4 border-slate-100 bg-slate-50 shadow-inner">
                  <img src="/syed-ghulam.jpeg" alt="Syed Ghulam Hyder Shah, Fractional CFO" className="h-32 w-32 rounded-full object-cover" />
                </div>
              </div>
              <div className="mt-5 text-center">
                <h3 className="font-[Fraunces] text-2xl tracking-[-0.02em] text-slate-900">Syed Ghulam Hyder Shah</h3>
                <p className="mt-2 text-sm font-bold text-sky-700">Fractional CFO</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  An experienced financial leader specializing in Audit and ERP implementation with a proven track record at PwC, one of the top accounting firms in the world.
                </p>
                <a className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-sky-700 transition hover:text-sky-800" href="mailto:syed@evertrustfinancials.services">
                  <Mail size={16} /> Contact Syed
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}