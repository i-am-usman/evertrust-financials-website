import React from 'react';
import { Mail, Linkedin } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MeetTheTeamPage() {
  const team = [
    { name: "Syed Ghulam Hyder", role: "Fractional CFO", bio: "Financial leader specializing in Audit and ERP implementation with PwC experience.", link: "mailto:syed@evertrustfinancials.services", img: "/syed-ghulam.webp", icon: Mail },
    { name: "Hina Batool", role: "Financial Analyst", bio: "Delivering deep financial insight, risk analysis, and strategic forecasting.", link: "mailto:hina@evertrustfinancials.services", img: "/hina-batool.webp", icon: Mail },
    { name: "Muhammad Usman", role: "Technical Lead", bio: "Architecting secure infrastructure and custom automation solutions for reliability.", link: "https://www.linkedin.com/in/muhammad-usman-ai-ml/", img: "/muhammad-usman.webp", icon: Linkedin },
    { name: "Iqra Mirani", role: "Business Dev Rep ( BDO )", bio: "Dedicated to understanding client needs and crafting tailored solutions.", link: "mailto:sales@evertrustfinancials.services", img: "/iqra-mirani.webp", icon: Mail }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      <Header />

      <main className="mx-auto w-[min(1180px,calc(100%-1.5rem))] mt-8 md:mt-12">
        {/* Hero Section */}
        <section className="overflow-hidden rounded-[2.5rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr] items-center">
            {/* Left Column (Text) - Clamped max-width to fix scaling */}
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center max-w-2xl mx-auto lg:mx-0">
              <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.25em] text-sky-600">Meet the EverTrust Team</p>
              <h1 className="font-[Fraunces] text-3xl md:text-4xl lg:text-4xl xl:text-5xl leading-[1.1] tracking-[-0.02em] text-slate-900">
                Dedicated to keeping your business compliant, profitable, and stress-free.
              </h1>
              <p className="mt-6 max-w-xl text-base md:text-lg leading-8 text-slate-600">
                EverTrust Financials brings modern systems, automation, and responsive support to outsourced bookkeeping, payroll, and cross-border finance operations.
              </p>
            </div>

            {/* Right Column (Logo) - Fixed layout bounds */}
            <div className="relative bg-gradient-to-br from-sky-50 via-white to-teal-50 flex items-center justify-center p-12 min-h-[300px] lg:min-h-full self-stretch">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.14),transparent_28%),radial-gradient(circle_at_75%_35%,rgba(20,184,166,0.16),transparent_24%)]" />
              
              {/* Visual Asset Container */}
              <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 flex items-center justify-center">
                <img 
                  src="/logo.webp"
                  alt="EverTrust Financials Logo"
                  className="max-w-full max-h-full object-contain drop-shadow-[0_20px_40px_rgba(15,23,42,0.15)]" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Team Grid Section */}
        <section className="mt-16 md:mt-24">
          <div className="mb-12 text-center">
            <h2 className="font-[Fraunces] text-3xl md:text-5xl tracking-[-0.02em] text-slate-900">The people behind the service.</h2>
          </div>

          {/* Founding Partner Section */}
          <div className="mb-16 flex justify-center">
            <article className="group bg-white p-10 rounded-[2rem] border-2 border-sky-100 shadow-xl max-w-lg w-full flex flex-col items-center text-center transition-all duration-300 hover:shadow-2xl">
              <div className="mb-6 h-40 w-40 rounded-full border-4 border-slate-50 bg-slate-100 overflow-hidden shadow-inner">
                <img src="/zafarullah.webp" alt="Zafar Ullah" className="h-full w-full object-cover" />
              </div>
              <h3 className="font-[Fraunces] text-2xl text-slate-900">Zafar Ullah</h3>
              <p className="text-xs font-bold uppercase tracking-wider text-sky-600 mt-1 mb-4">Founding Partner</p>
              <p className="text-sm leading-7 text-slate-600 mb-6"> Our UAE-based Founding Partner, Zafarullah, bridges local presence with global capability. Backed by a strong track record of supporting businesses across the UAE, US, UK, and Canada, he brings premier financial insights and strategic leadership to our firm.</p>
              <a href="mailto:founder@evertrustfinancials.services" className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-sky-600 transition">
                <Mail size={16} /> Contact
              </a>
            </article>
          </div>

          {/* Other Team Members Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <article key={i} className="group bg-white p-8 rounded-[2rem] border border-slate-200 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,23,42,0.15)] flex flex-col items-center text-center">
                <div className="mb-6 h-32 w-32 rounded-full border-4 border-slate-50 bg-slate-100 overflow-hidden shadow-inner">
                  <img src={member.img} alt={member.name} className="h-full w-full object-cover" />
                </div>
                <h3 className="font-[Fraunces] text-xl text-slate-900">{member.name}</h3>
                <p className="text-xs font-bold uppercase tracking-wider text-sky-600 mt-1 mb-4">{member.role}</p>
                <p className="text-sm leading-7 text-slate-600 mb-6 flex-grow">{member.bio}</p>
                <a href={member.link} target={member.role === "Technical Lead" ? "_blank" : "_self"} className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-sky-600 transition">
                  <member.icon size={16} /> Contact
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}