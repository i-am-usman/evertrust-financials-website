import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import { services } from '../data/content';

export default function ServicesPage() {
  return (
    <div className="site">
      <Header />
      <main id="top" className="bg-slate-50 min-h-screen py-16">
        <section className="mx-auto w-[min(1180px,calc(100%-1.5rem))]">
          <SectionTitle
            eyebrow="Services"
            title="Everything organized into clear, scannable finance support blocks."
            copy="Simple service cards so you understand what is handled at a glance."
          />
          
          {/* Grid with hover effects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <article 
                  key={service.title} 
                  className="group bg-white p-8 rounded-[2rem] border border-slate-200 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]"
                >
                  {/* Vivid, Colorful Icon Container */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 transition-colors group-hover:bg-sky-600 group-hover:text-white">
                    <Icon size={28} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 leading-7">{service.description}</p>
                </article>
              );
            })}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}