import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      
      <main className="flex-grow w-[min(1180px,calc(100%-1.5rem))] mx-auto mt-12 md:mt-20">
        <section className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-[0_18px_50px_rgba(15,23,42,0.06)] flex flex-col lg:flex-row gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="flex-1">
            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-sky-600 mb-4">Contact US</p>
            <h2 className="font-[Fraunces] text-4xl md:text-5xl leading-tight tracking-[-0.02em] text-slate-900 mb-6">
              Book a consultation and get a response that matches your region.
            </h2>
            <p className="text-lg text-slate-600 leading-8">
              Connect with our team today to establish a secure, scalable accounting infrastructure.
            </p>
          </div>

          {/* Right Contact Card */}
          <div className="w-full lg:w-[400px] bg-slate-50 p-8 rounded-[2rem] border border-slate-100">
            <div className="flex items-center gap-3 mb-6 text-slate-900">
              <Mail className="text-sky-600" size={24} />
              <span className="font-bold text-lg">Email</span>
            </div>
            
            <p className="text-slate-600 mb-8 break-words font-medium">contact@evertrustfinancials.services</p>
            
            <a 
              href="mailto:contact@evertrustfinancials.services" 
              className="flex items-center justify-center gap-2 w-full bg-sky-600 hover:bg-sky-700 text-white font-bold py-4 px-6 rounded-2xl transition-all shadow-lg hover:shadow-sky-500/20"
            >
              Start the conversation <ArrowRight size={18} />
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}