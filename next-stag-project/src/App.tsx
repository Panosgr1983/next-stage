  import { useState, useEffect } from 'react';
  import { useTranslation } from 'react-i18next';
  import Header from './components/Header';
  import Hero from './sections/Hero';
  import Services from './sections/Services';
  import About from './sections/About';
  import Gallery from './sections/Gallery';
  import Testimonials from './sections/Testimonials';
  import Contact from './sections/Contact';
  import Footer from './components/Footer';
  import LanguageToggle from './components/LanguageToggle';
  import ScrollToTop from './components/ScrollToTop';
function App() {
  useTranslation();
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('darkMode');
      if (saved !== null) return saved === 'true';
      return typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    // Initialize dark mode preference from localStorage or system preference
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(savedMode === 'true' || (savedMode === null && prefersDark));
    // empty deps => run once on mount
  }, []);

  useEffect(() => {
    // Apply dark mode class to document and persist preference
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-slate-900 text-slate-100' : 'bg-white text-slate-900'}`}>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <main>
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <LanguageToggle />
      <ScrollToTop />
    </div>
  );
}

export default App;