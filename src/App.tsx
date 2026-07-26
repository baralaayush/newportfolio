/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import BlogSection from './components/BlogSection';
import ProjectSection from './components/ProjectSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const handleHashScroll = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    // Scroll immediately if hash present on load
    handleHashScroll();

    // Retries to account for DOM rendering & dynamic content load
    const timer1 = setTimeout(handleHashScroll, 100);
    const timer2 = setTimeout(handleHashScroll, 500);
    const timer3 = setTimeout(handleHashScroll, 1000);

    window.addEventListener('hashchange', handleHashScroll);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      window.removeEventListener('hashchange', handleHashScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-stone-100 font-sans text-gray-900">
      <Navbar />
      <main className="pt-16">
        <About />
        <BlogSection />
        <ProjectSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
