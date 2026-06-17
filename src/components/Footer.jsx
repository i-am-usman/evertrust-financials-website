import React from 'react';
import { Mail, MapPin, ArrowRight, Facebook, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-slate-200 bg-white">
      <div className="mx-auto w-[min(1180px,calc(100%-1.5rem))] py-16">
        
        {/* Top Footer Section */}
        <div className="grid gap-12 lg:grid-cols-3 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center gap-3 mb-4">
              <img src="/logo.webp" alt="EverTrust Logo" className="h-12 w-auto" />
              <span className="font-[Fraunces] text-lg font-bold text-slate-900">EverTrust Financials</span>
            </a>
            <p className="text-slate-600 leading-relaxed text-sm max-w-xs">
              Modern financial workflows for high-growth businesses in the UK, US, and Canada. Outsourced bookkeeping that feels in-house.
            </p>
          </div>

          {/* Links Column */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Explore</h4>
              <ul className="space-y-3 text-sm text-slate-600">
                <li><a href="/" className="hover:text-sky-600 transition">Home</a></li>
                <li><a href="/services" className="hover:text-sky-600 transition">Services</a></li>
                <li><a href="/why-us" className="hover:text-sky-600 transition">Why Choose Us</a></li>
              </ul>
            </div>
            
            {/* Contact & Vivid Social Icons Column */}
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Contact</h4>
              <ul className="space-y-3 text-sm text-slate-600 mb-6">
                <li className="flex items-center gap-2">
                  <Mail size={16} className="text-rose-600" /> 
                  contact@evertrustfinancials.services
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={16} className="text-teal-600" /> 
                  London | Toronto | New York | Remote
                </li>
              </ul>

              {/* Colorful Clickable Social Icons */}
              <div className="flex gap-4">
                <a href="https://www.facebook.com/share/18tuQsrtRp/" target="_blank" aria-label="Visit our Facebook page" rel="noopener noreferrer" className="text-[#1877F2] hover:opacity-80 transition-opacity">
                  <Facebook size={24} fill="currentColor" />
                </a>
                <a href="https://www.linkedin.com/company/evertrust-financials/" target="_blank" aria-label="Visit our LinkedIn page" rel="noopener noreferrer" className="text-[#0A66C2] hover:opacity-80 transition-opacity">
                  <Linkedin size={24} fill="currentColor" />
                </a>
                <a href="https://www.instagram.com/evertrust.financials?igsh=MWJjdTgydGN0cDFobA==" target="_blank" aria-label="Visit our Instagram page"   rel="noopener noreferrer" className="text-[#E4405F] hover:opacity-80 transition-opacity">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100 gap-6">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} EverTrust Financials. All rights reserved.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-sky-600 hover:text-sky-700 transition">
            Let's get started <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}