import {
  FileText, ReceiptText, Banknote, Wallet, CalendarDays, ShieldCheck,
  Building2, BadgeCheck, Clock3, Users
} from 'lucide-react';

export const services = [
  { title: 'Day-to-day bookkeeping', description: 'Keep records organized, current, and ready for reporting without the admin burden.', icon: FileText },
  { title: 'Invoices and bills', description: 'Generate invoices, record bills, and maintain a clean paper trail.', icon: ReceiptText },
  { title: 'Bank categorization', description: 'Classify transactions accurately so your reporting and tax prep stay reliable.', icon: Banknote },
  { title: 'AR and AP management', description: 'Track receivables and payables with structured follow-up and fewer delays.', icon: Wallet },
  { title: 'Payroll and reconciliation', description: 'Run payrolls and reconcile bank accounts with a predictable monthly cadence.', icon: CalendarDays },
  { title: 'VAT, GST, and HST support', description: 'Prepare and submit returns with a compliance-first workflow.', icon: ShieldCheck },
];

export const benefits = [
  'Cost-efficient outsourcing instead of in-house overhead',
  'Certified in QuickBooks Pro, Xero, and Sage 50',
  'Built for UK, US, and Canadian clients',
  'Time-zone-aware scheduling and lead capture',
];

export const proofPoints = [
  { title: 'Cost-efficient', copy: ' Lower overhead than hiring internally', icon: Building2 },
  { title: 'Certified team', copy: ' QuickBooks Pro, Xero, Sage 50', icon: BadgeCheck },
  { title: 'Fast response', copy: ' Scheduling built for multiple time zones', icon: Clock3 },
  { title: 'Regional fit', copy: ' UK, US, and Canadian client focus', icon: Users },
];

export const regions = [
  { name: 'United Kingdom', copy: 'VAT-ready bookkeeping and cloud finance admin for UK clients.' },
  { name: 'United States', copy: 'Clear accounting support tailored to business operations and reporting.' },
  { name: 'Canada', copy: 'GST/HST support with practical bookkeeping and payroll workflows.' },
];

export const securityPoints = [
  'Secure cloud workflows for records and reports',
  'Controlled file transfer for statements and payroll data',
  'Privacy-aware handling aligned with regional expectations',
];

export const steps = [
  { step: '01', title: 'Book a consultation', copy: 'Choose a time that matches your region and time zone.' },
  { step: '02', title: 'Share your current setup', copy: 'Use a focused intake to reduce back-and-forth.' },
  { step: '03', title: 'Receive tailored next steps', copy: 'Get routed to the right regional or service path.' },
];

export const testimonials = [
  {
    author: "Sarah Jenkins",
    quote: "EverTrust transformed our messy bookkeeping into a streamlined, automated system. Total game changer.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80" 
  },
  {
    author: "Mark Thompson",
    quote: "Finally, I have peace of mind knowing my cross-border filings are handled by actual experts.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
  },
  {
    author: "Elena Rodriguez",
    quote: "Their responsiveness is incredible. Outsourcing with them feels exactly like having an in-house team.",
    // No image? The code will generate a beautiful avatar for you!
  }
];