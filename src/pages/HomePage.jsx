import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import { benefits, proofPoints, steps, testimonials } from '../data/content';

export default function HomePage() {
  return (
    <div className="site">
      <Header />
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
              <a className="button button-primary" href="/contact">
                Book a Consultation
                <ArrowRight size={18} />
              </a>
              <a className="button button-secondary" href="/why-us">
                Why Choose Us
              </a>
            </div>

            <div className="benefit-list">
              {benefits.map((benefit) => (
                <div key={benefit} className="benefit-pill">
                  {/* ADDED: Background container for color */}
                  <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-sky-100 text-sky-600 mr-3">
                    <CheckCircle2 size={22} />
                  </div>
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="visual-stack">
              {/* Local WebP images with explicit dimensions to prevent layout shift */}
              <img 
                src="/images/EverTrust-5.webp" 
                alt="Business meeting in a bright office" 
                className="hero-image hero-image-small hero-image-a" 
                width="500" 
                height="333" 
                loading="eager"
              />
              <img 
                src="/images/EverTrust-1.webp" 
                alt="Finance team reviewing reports" 
                className="hero-image hero-image-main" 
                width="800" 
                height="533" 
                loading="eager"
              />
              <img 
                src="/images/EverTrust-3.webp" 
                alt="Person working on a laptop with charts" 
                className="hero-image hero-image-small hero-image-b" 
                width="500" 
                height="333" 
                loading="eager"
              />
            </div>
            <div className="hero-metric-card">
              {/* Added bg-amber-50 and text-amber-500 for a warm, premium feel */}
              <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-amber-50 text-amber-500">
                <Sparkles size={22} />
              </div>
              <div>
                <strong>Outsourcing that feels in-house</strong>
                <p>Clean workflows, fast response, and a calm handoff for busy teams.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-strip reveal" aria-label="Trust signals">
          {proofPoints.map((point, index) => {
            const Icon = point.icon;
            
            // Define an array of colors to rotate through
            const colors = ["bg-sky-50 text-sky-600", "bg-teal-50 text-teal-600", "bg-indigo-50 text-indigo-600"];
            
            return (
              <div key={point.title} className="flex items-center gap-4">
                {/* ADDED: Rounded container with dynamic color */}
                <div className={`h-14 w-14 flex items-center justify-center rounded-2xl ${colors[index % colors.length]}`}>
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <strong>{point.title}</strong>
                  <div>{point.copy}</div>
                </div>
              </div>
            );
          })}
        </section>  

        <section className="content-section reveal">
          <SectionTitle 
            eyebrow="How we work" 
            title="A simple process that keeps the lead journey calm and fast." 
          />
          
          {/* Modern 3-column grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {steps.map((step, index) => (
              <article 
                key={step.step} 
                className="group relative bg-white p-8 rounded-[2rem] border border-slate-200 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
              >
                {/* Step Number in a colored bubble */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 font-[Fraunces] text-xl font-bold group-hover:scale-110 transition-transform">
                  {index + 1}
                </div>
                
                <h3 className="text-xl font-[Fraunces] text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-7 text-base">{step.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section reveal mt-24">
          <SectionTitle 
            eyebrow="Proof" 
            title="Trusted by business owners scaling globally." 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.author} 
                className="flex flex-col bg-white p-8 rounded-[2rem] border border-slate-200 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
              >
                {/* Star Rating */}
                <div className="flex gap-1 mb-6 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-slate-600 italic mb-8 flex-grow leading-relaxed">
                  “{testimonial.quote}”
                </p>
                
                {/* Client Info */}
                <div className="flex items-center gap-4 mt-auto border-t border-slate-100 pt-6">
                  <img 
                    src={testimonial.image || `https://ui-avatars.com/api/?name=${testimonial.author.replace(' ', '+')}&background=random`} 
                    alt={testimonial.author} 
                    className="h-12 w-12 rounded-full object-cover border border-slate-200"
                  />
                  <div>
                    <p className="font-bold text-slate-900">{testimonial.author}</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Verified Client</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}