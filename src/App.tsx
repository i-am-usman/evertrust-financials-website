import React from 'react';
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  Globe2,
  LineChart,
  LockKeyhole,
  Linkedin,
  Mail,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
  type LucideIcon,
} from 'lucide-react';

const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';

const services = [
  {
    title: 'Day-to-day bookkeeping',
    description: 'Keep records organized, current, and ready for reporting without the admin burden.',
    icon: FileText,
  },
  {
    title: 'Invoices and bills',
    description: 'Generate invoices, record bills, and maintain a clean paper trail.',
    icon: ReceiptText,
  },
  {
    title: 'Bank categorization',
    description: 'Classify transactions accurately so your reporting and tax prep stay reliable.',
    icon: Banknote,
  },
  {
    title: 'AR and AP management',
    description: 'Track receivables and payables with structured follow-up and fewer delays.',
    icon: Wallet,
  },
  {
    title: 'Payroll and reconciliation',
    description: 'Run payrolls and reconcile bank accounts with a predictable monthly cadence.',
    icon: CalendarDays,
  },
  {
    title: 'VAT, GST, and HST support',
    description: 'Prepare and submit returns with a compliance-first workflow.',
    icon: ShieldCheck,
  },
];

const benefits = [
  'Cost-efficient outsourcing instead of in-house overhead',
  'Certified in QuickBooks Pro, Xero, and Sage 50',
  'Built for UK, US, and Canadian clients',
  'Time-zone-aware scheduling and lead capture',
];

const proofPoints = [
  { title: 'Cost-efficient', copy: 'Lower overhead than hiring internally', icon: Building2 },
  { title: 'Certified team', copy: 'QuickBooks Pro, Xero, Sage 50', icon: BadgeCheck },
  { title: 'Fast response', copy: 'Scheduling built for multiple time zones', icon: Clock3 },
  { title: 'Regional fit', copy: 'UK, US, and Canadian client focus', icon: Users },
];

const regions = [
  { name: 'United Kingdom', copy: 'VAT-ready bookkeeping and cloud finance admin for UK clients.' },
  { name: 'United States', copy: 'Clear accounting support tailored to business operations and reporting.' },
  { name: 'Canada', copy: 'GST/HST support with practical bookkeeping and payroll workflows.' },
];

const securityPoints = [
  'Secure cloud workflows for records and reports',
  'Controlled file transfer for statements and payroll data',
  'Privacy-aware handling aligned with regional expectations',
];

const steps = [
  { step: '01', title: 'Book a consultation', copy: 'Choose a time that matches your region and time zone.' },
  { step: '02', title: 'Share your current setup', copy: 'Use a focused intake to reduce back-and-forth.' },
  { step: '03', title: 'Receive tailored next steps', copy: 'Get routed to the right regional or service path.' },
];

const testimonials = [
  { quote: 'Very professional, quick to respond, and easy to work with.', author: 'Client testimonial placeholder' },
  { quote: 'A reliable outsourced finance partner that saved us time and overhead.', author: 'Case study placeholder' },
];

type SectionTitleProps = {
  eyebrow: string;
  title: string;
  copy?: string;
};

function SectionTitle({ eyebrow, title, copy }: SectionTitleProps) {
  return (
    <div className="section-title">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {copy ? <p>{copy}</p> : null}
    </div>
  );
}

function HomePage() {
  return (
    <div className="site">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="EverTrust Financials home">
          <img src="/evertrust-logo.svg" alt="EverTrust Financials logo" className="brand-logo" />
          <span>
            <strong>EverTrust Financials</strong>
            <small>Outsourced bookkeeping that scales with you</small>
          </span>
        </a>

        <nav className="nav">
          <a href="#services">Services</a>
          <a href="/meet-the-team.html">Meet the Team</a>
          <a href="#roi">Value</a>
          <a href="#security">Security</a>
          <a href="#regions">Regions</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="button button-primary" href="#contact">
          Book a Consultation
          <ArrowRight size={18} />
        </a>
      </header>

      <main id="top">
        <section className="hero">
          <div className="hero-copy reveal">
            <p className="eyebrow">UK, US & Canadian clients</p>
            <h2>Your trusted partner for seamless global accounting.</h2>
            <p className="lede">
              EverTrust Financials handles bookkeeping, invoicing, payroll, bank reconciliation,
              and return prep so your business stays accurate, organized, and ready to grow.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Book a Consultation
                <ArrowRight size={18} />
              </a>
              <a className="button button-secondary" href="#roi">
                See the ROI
              </a>
            </div>

            <div className="benefit-list">
              {benefits.map((benefit) => (
                <div key={benefit} className="benefit-pill">
                  <CheckCircle2 size={18} />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="visual-stack">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80"
                alt="Finance team reviewing reports"
                className="hero-image hero-image-main"
              />
              <img
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1000&q=80"
                alt="Business meeting in a bright office"
                className="hero-image hero-image-small hero-image-a"
              />
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80"
                alt="Person working on a laptop with charts"
                className="hero-image hero-image-small hero-image-b"
              />
            </div>

            <div className="hero-metric-card">
              <Sparkles size={18} />
              <div>
                <strong>Outsourcing that feels in-house</strong>
                <p>Clean workflows, fast response, and a calm handoff for busy teams.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip reveal" aria-label="Trust signals">
          {proofPoints.map((point) => {
            const Icon: LucideIcon = point.icon;
            return (
              <div key={point.title}>
                <Icon size={18} />
                <div>
                  <strong>{point.title}</strong>
                  <span>{point.copy}</span>
                </div>
              </div>
            );
          })}
        </section>

        <section className="content-section reveal" id="services">
          <SectionTitle
            eyebrow="Services"
            title="Everything organized into clear, scannable finance support blocks."
            copy="The homepage uses simple service cards so prospects can understand what is handled at a glance."
          />

          <div className="service-grid">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article className="card service-card" key={service.title}>
                  <span className="icon-badge">
                    <Icon size={20} />
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="content-section split-layout reveal" id="roi">
          <div>
            <SectionTitle
              eyebrow="Value & ROI"
              title="Outsourcing is the cleaner financial choice for many growing businesses."
              copy="Use this section to show why a flexible service model is often more efficient than a single in-house hire."
            />
            <div className="comparison-card">
              <div>
                <h3>
                  <Building2 size={18} />
                  In-house bookkeeper
                </h3>
                <ul>
                  <li>Higher salary, benefits, and overhead</li>
                  <li>Single point of failure when someone is absent</li>
                  <li>Limited flexibility as your workload changes</li>
                </ul>
              </div>
              <div>
                <h3>
                  <LineChart size={18} />
                  EverTrust Financials
                </h3>
                <ul>
                  <li>Cost-efficient outsourced support</li>
                  <li>Scalable service based on actual workload</li>
                  <li>Structured processes and responsive delivery</li>
                </ul>
              </div>
            </div>
          </div>

          <aside className="side-photo glass-card">
            <img
              src="https://images.unsplash.com/photo-1554224154-26032fced8bd?auto=format&fit=crop&w=1200&q=80"
              alt="Team discussing financial strategy in a bright office"
            />
            <div className="side-photo-copy">
              <Sparkles size={18} />
              <p>Outsourcing that feels in-house, but stays lean and cost-efficient.</p>
            </div>
          </aside>
        </section>

        <section id="security" className="content-section security-layout reveal">
          <div>
            <SectionTitle
              eyebrow="Data Security & Compliance"
              title="Secure handling of financial data is part of the service, not an afterthought."
              copy="International clients need confidence that records are stored and transferred safely, with processes that respect privacy and regional requirements."
            />
            <div className="security-list">
              {securityPoints.map((item, index) => (
                <article key={item} className="glass-card small-card">
                  {index === 0 ? <LockKeyhole size={18} /> : index === 1 ? <Mail size={18} /> : <ShieldCheck size={18} />}
                  <div>
                    <h3>{item}</h3>
                    <p>Built to reassure teams outsourcing sensitive finance work.</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="security-photo glass-card">
            <img
              src="https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?auto=format&fit=crop&w=1200&q=80"
              alt="Laptop with finance dashboards and a plant on a bright desk"
            />
            <div className="security-photo-tags">
              <span>
                <Clock3 size={14} /> Fast response across time zones
              </span>
              <span>
                <CalendarDays size={14} /> Smart scheduling support
              </span>
            </div>
          </div>
        </section>

        <section id="regions" className="content-section reveal">
          <SectionTitle
            eyebrow="Regional pages"
            title="Dedicated landing pages can speak directly to each market."
            copy="Keep the homepage global, then use regional landing pages for country-specific trust and terminology."
          />

          <div className="region-grid">
            {regions.map((region) => (
              <article key={region.name} className="card region-card">
                <Globe2 size={20} />
                <h3>{region.name}</h3>
                <p>{region.copy}</p>
                <span>
                  {region.name === 'United Kingdom'
                    ? '/uk-bookkeeping'
                    : region.name === 'United States'
                      ? '/us-accounting'
                      : '/canada-bookkeeping'}
                </span>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section reveal">
          <SectionTitle eyebrow="How we work" title="A simple process that keeps the lead journey calm and fast." />
          <div className="steps-grid">
            {steps.map((step) => (
              <article key={step.step} className="card step-card">
                <span>{step.step}</span>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section reveal">
          <SectionTitle eyebrow="Proof" title="Trust signals that help visitors feel comfortable reaching out." />
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.author} className="card quote-card">
                <div className="stars">
                  <Sparkles size={16} />
                  <Sparkles size={16} />
                  <Sparkles size={16} />
                  <Sparkles size={16} />
                  <Sparkles size={16} />
                </div>
                <p>“{testimonial.quote}”</p>
                <footer>{testimonial.author}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section id="contact" className="content-section contact-section reveal">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Book a consultation and get a response that matches your region.</h2>
            <p>
              The live version can connect to a calendar flow and a region-aware intake form for faster scheduling.
            </p>
          </div>

          <div className="contact-card card">
            <div>
              <Mail size={20} />
              <h3>Email</h3>
              <a href="mailto:contact@evertrustfinancials.services">contact@evertrustfinancials.services</a>
            </div>
            <a className="button button-primary" href="mailto:contact@evertrustfinancials.services">
              Start the conversation
              <ArrowRight size={18} />
            </a>
          </div>
        </section>

        <footer className="footer">
          <p>EverTrust Financials</p>
          <p>Outsourced bookkeeping, payroll, and compliance support for UK, US, and Canadian clients.</p>
        </footer>
      </main>
    </div>
  );
}

function MeetTheTeamPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="mx-auto flex w-[min(1180px,calc(100%-1.5rem))] flex-wrap items-center justify-between gap-4 rounded-3xl border border-slate-200/80 bg-white/90 px-5 py-4 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl sticky top-3 z-20">
        <a className="flex items-center gap-3" href="/">
          <img src="/evertrust-logo.svg" alt="EverTrust Financials logo" className="h-12 w-12 rounded-2xl bg-white object-contain shadow-sm" />
          <span className="grid leading-tight">
            <strong className="font-[Fraunces] text-[1.05rem] tracking-[-0.02em]">EverTrust Financials</strong>
            <small className="text-slate-500">Outsourced bookkeeping that scales with you</small>
          </span>
        </a>

        <nav className="flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-600">
          <a href="/" className="hover:text-sky-600">
            Home
          </a>
          <a href="/#services" className="hover:text-sky-600">
            Services
          </a>
          <a href="/meet-the-team.html" className="text-sky-700">
            Meet the Team
          </a>
        </nav>

        <a className="inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-sky-600/20 transition hover:-translate-y-0.5 hover:bg-sky-700" href="mailto:contact@evertrustfinancials.services">
          Book a Consultation
          <ArrowRight size={18} />
        </a>
      </header>

      <main className="mx-auto w-[min(1180px,calc(100%-1.5rem))] py-8 md:py-12">
        <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-7 md:p-10 lg:p-12">
              <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.18em] text-sky-600">Meet the EverTrust Team</p>
              <h1 className="font-[Fraunces] text-4xl leading-[0.95] tracking-[-0.02em] text-slate-900 md:text-6xl">
                Dedicated to keeping your business compliant, profitable, and stress-free across borders.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                EverTrust Financials brings modern systems, automation, and responsive support to outsourced bookkeeping, payroll, and cross-border finance operations.
              </p>
            </div>

            <div className="relative min-h-[280px] bg-gradient-to-br from-sky-50 via-white to-teal-50 p-6 md:p-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(14,165,233,0.14),transparent_28%),radial-gradient(circle_at_75%_35%,rgba(20,184,166,0.16),transparent_24%)]" />
              <div className="relative flex h-full items-center justify-center">
                <img src="/evertrust-logo.svg" alt="EverTrust Financials logo" className="w-full max-w-[290px] drop-shadow-[0_18px_40px_rgba(15,23,42,0.14)]" />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
          <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="bg-slate-50 p-7 md:p-10 lg:p-12">
              <div className="mx-auto flex h-56 w-56 items-center justify-center rounded-full border border-slate-200 bg-white shadow-[0_16px_40px_rgba(15,23,42,0.08)]">
                <img
                  src="/founder.png"
                  alt="Muhammad Usman headshot"
                  className="h-48 w-48 rounded-full object-cover"
                />
              </div>    
            </div>

            <div className="p-7 md:p-10 lg:p-12">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sky-600">Founder Highlight</p>
              <h2 className="mt-3 font-[Fraunces] text-3xl tracking-[-0.02em] text-slate-900 md:text-4xl">Saif Joyo</h2>
              <p className="mt-2 text-lg font-semibold text-sky-700">Founder & Principal Consultant</p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600">
                With a strong foundation in modern technology and data management, I founded EverTrust Financials to bring precision, automation, and total transparency to cross-border accounting.
              </p>
              <a
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-sky-600 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-sky-600/20 transition hover:-translate-y-0.5 hover:bg-sky-700"
                href="mailto:founder@evertrustfinancials.services"
              >
                Contact Saif
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </section>

        <section className="mt-8">
          <div className="mb-6">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-sky-600">Team Grid</p>
            <h2 className="mt-3 font-[Fraunces] text-3xl tracking-[-0.02em] text-slate-900 md:text-4xl">Meet the people behind the service.</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.14)]">
              <div className="flex justify-center">
                <div className="flex h-36 w-36 items-center justify-center rounded-full border-4 border-slate-100 bg-slate-50 shadow-inner">
                  <img
                    src="/iqra-mirani.png"
                    alt="Iqra Mirani, Business Development Representative"
                    className="h-32 w-32 rounded-full object-cover"
                  />
                </div>
              </div>

              <div className="mt-5 text-center">
                <h3 className="font-[Fraunces] text-2xl tracking-[-0.02em] text-slate-900">Iqra Mirani</h3>
                <p className="mt-2 text-sm font-bold text-sky-700">Business Development Representative</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Dedicated to understanding client needs and crafting tailored financial solutions that drive growth.
                </p>
                <a
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-sky-700 transition hover:text-sky-800"
                  href="mailto:sales@evertrustfinancials.services"
                >
                  <Mail size={16} />
                  sales@evertrustfinancials.services
                </a>
              </div>
            </article>

            <article className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.14)]">
              <div className="flex justify-center">
                <div className="flex h-36 w-36 items-center justify-center rounded-full border-4 border-slate-100 bg-slate-50 shadow-inner">
                  <img
                    src="/PP.jpeg"
                    alt="Muhammad Usman, Technical Lead & Automation Engineer"
                    className="h-32 w-32 rounded-full object-cover"
                  />
                </div>
              </div>

              <div className="mt-5 text-center">
                <h3 className="font-[Fraunces] text-2xl tracking-[-0.02em] text-slate-900">Muhammad Usman</h3>
                <p className="mt-2 text-sm font-bold text-sky-700">Technical Lead & Automation Engineer</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  Architecting secure web infrastructure and custom automation solutions to ensure a fast, seamless, and deeply reliable experience for our clients.
                </p>
                <a
                  className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-sky-700 transition hover:text-sky-800"
                  href="https://www.linkedin.com/in/muhammad-usman-ai-ml/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={16} />
                  View LinkedIn
                </a>
              </div>
            </article>
          </div>
        </section>
      </main>
    </div>
  );
}

export default function App() {
  if (currentPath === '/meet-the-team' || currentPath === '/meet-the-team.html') {
    return <MeetTheTeamPage />;
  }

  return <HomePage />;
}
