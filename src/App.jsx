import React from 'react';

// 1. Cleaned up imports (no more duplicates or deleted pages)
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import WhyUsPage from './pages/WhyUsPage';
import MeetTheTeamPage from './pages/MeetTheTeamPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  // 2. Bulletproof URL cleaner! This removes trailing slashes AND hidden .html extensions
  const currentPath = window.location.pathname.replace(/\/+$/, '').replace('.html', '') || '/';

  // 3. Clean, precise routing
  switch (currentPath) {
    case '/services':
      return <ServicesPage />;
      
    case '/why-us':
      return <WhyUsPage />; // This will now successfully load your new page!
      
    case '/meet-the-team':
      return <MeetTheTeamPage />;
      
    case '/contact':
      return <ContactPage />;
      
    case '/':
    default:
      // If the URL doesn't match anything above, it safely falls back to the Home page
      return <HomePage />;
  }
}