import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import { services } from '../data/content';

export default function ServicesPage() {
  return (
    <div className="site">
      <Header />
      <main id="top">
        <section className="content-section reveal">
          <SectionTitle
            eyebrow="Services"
            title="Everything organized into clear, scannable finance support blocks."
            copy="Simple service cards so you understand what is handled at a glance."
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
      </main>
      <Footer />
    </div>
  );
}