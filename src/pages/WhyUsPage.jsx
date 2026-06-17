import React from 'react';
import { ShieldCheck, Globe2, Zap } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function WhyUsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-12 flex flex-col">
      <Header />

      <main className="mx-auto w-[min(1180px,calc(100%-1.5rem))] mt-8 md:mt-12 flex-grow">
        
       
        {/* Hero Text Section */}
        <div className="flex flex-col items-center justify-center text-center mb-12 px-4">
        <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.18em] text-sky-600">Why EverTrust</p>
        <h2 className="font-[Fraunces] text-4xl leading-tight tracking-[-0.02em] text-slate-900 md:text-6xl max-w-3xl mx-auto">
            Precision, Security, and Global Expertise.
        </h2>
        <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
            We don't just balance books. We architect modern financial workflows that give you total clarity and peace of mind.
        </p>
        </div>

        {/* WHY US IMAGES - Set B (Completely different from Home Page) */}
        
        <div className="mb-16 flex flex-col md:flex-row gap-6 items-stretch justify-center">
          {/* Large Main Image */}
          <img 
            src="/images/EverTrust-6.webp" 
            alt="Global finance team collaborating" 
            className="w-full md:w-7/12 min-h-[300px] object-cover rounded-[2rem] shadow-[0_18px_50px_rgba(15,23,42,0.06)] border border-slate-200"
            width="1200"
            height="600"
            loading="lazy"
          />
          
          {/* Side Stack of Images */}
          <div className="flex flex-col gap-6 w-full md:w-5/12">
            <img 
              src="/images/EverTrust-2.webp" 
              alt="Businessman working at office desk" 
              className="w-full h-[220px] object-cover rounded-[2rem] shadow-[0_18px_50px_rgba(15,23,42,0.06)] border border-slate-200"
              width="1000"
              height="220"
              loading="lazy"
            />
            <img 
              src="/images/EverTrust-4.webp" 
              alt="Modern team discussing business in office" 
              className="w-full h-[220px] object-cover rounded-[2rem] shadow-[0_18px_50px_rgba(15,23,42,0.06)] border border-slate-200 object-center"
              width="1000"
              height="220"
              loading="lazy"
            />
          </div>
        </div>
        

        <div className="grid gap-8 lg:grid-cols-3">
          
          <section className="group rounded-[2rem] border border-slate-200 bg-white p-8 md:p-10 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50 text-sky-600">
              <Zap size={32} strokeWidth={1.5} />
            </div>
            <h2 className="font-[Fraunces] text-2xl tracking-[-0.02em] text-slate-900 mb-4">Our Value</h2>
            <p className="text-base leading-7 text-slate-600">
              We eliminate manual data entry through custom automation solutions. By streamlining your financial workflows, we ensure faster reporting, zero discrepancies, and a deeply reliable experience that lets you focus entirely on scaling your business.
            </p>
          </section>

          <section className="group rounded-[2rem] border border-slate-200 bg-white p-8 md:p-10 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-50 text-teal-600">
              <ShieldCheck size={32} strokeWidth={1.5} />
            </div>
            <h2 className="font-[Fraunces] text-2xl tracking-[-0.02em] text-slate-900 mb-4">Bank-Level Security</h2>
            <p className="text-base leading-7 text-slate-600">
              Your financial data is protected by secure web infrastructure. We utilize enterprise-grade encryption, secure document portals, and rigorous access controls to ensure your sensitive compliance and payroll information never falls into the wrong hands.
            </p>
          </section>

          <section className="group rounded-[2rem] border border-slate-200 bg-white p-8 md:p-10 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
              <Globe2 size={32} strokeWidth={1.5} />
            </div>
            <h2 className="font-[Fraunces] text-2xl tracking-[-0.02em] text-slate-900 mb-4">Global Regions</h2>
            <p className="text-base leading-7 text-slate-600">
              We specialize in cross-border accounting. Whether navigating VAT in the UK, handling complex GST/HST filings in Canada, or managing multi-state payroll in the US, our team ensures 100% regional compliance.
            </p>
          </section>

        </div>
      </main>
      
      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
}