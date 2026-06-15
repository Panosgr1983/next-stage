import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Phone } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleDarkMode, darkMode }) => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const language = i18n.resolvedLanguage || i18n.language;
  const isGreek = language.startsWith('el');
  const isEnglish = language.startsWith('en');
  const iconTextColor = scrolled && !darkMode ? 'text-slate-900' : 'text-white';
  const iconButtonBg = scrolled && !darkMode
    ? 'bg-slate-100/90 hover:bg-slate-200'
    : 'bg-white/10 hover:bg-slate-200 dark:bg-slate-900/40 dark:hover:bg-slate-700';
  const logoTextClass = scrolled && !darkMode ? 'text-slate-900 dark:text-white' : 'text-white dark:text-white';

  const navLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.gallery'), href: '#gallery' },
    { name: t('nav.testimonials'), href: '#testimonials' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Logo textClass={logoTextClass} />

        <div className="hidden md:flex items-center justify-between flex-1 space-x-6 min-w-0">
          <nav className="min-w-0 overflow-hidden">
            <ul className="flex items-center gap-4 whitespace-nowrap overflow-x-auto">
              {navLinks.map((link) => (
                <li key={link.name} className="min-w-max">
                  <a
                    href={link.href}
                    className={`font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6ab04c] focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                      scrolled
                        ? 'text-slate-700 dark:text-slate-200 hover:text-[#6ab04c] dark:hover:text-[#6ab04c]'
                        : 'text-white hover:text-[#6ab04c]'
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => i18n.changeLanguage('el')}
              className={`p-2 rounded-full ${
                isGreek ? 'bg-[#6ab04c] text-white' : ''
              }`}
              aria-label="Ελληνικά"
            >
              🇬🇷
            </button>
            <button
              onClick={() => i18n.changeLanguage('en')}
              className={`p-2 rounded-full ${
                isEnglish ? 'bg-[#6ab04c] text-white' : ''
              }`}
              aria-label="English"
            >
              🇬🇧
            </button>

            <button
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors duration-200 ${iconButtonBg}`}
              aria-label={darkMode ? t('accessibility.lightMode') : t('accessibility.darkMode')}
            >
              {darkMode ? (
                <Sun size={20} className={iconTextColor} />
              ) : (
                <Moon size={20} className={iconTextColor} />
              )}
            </button>

            <a
              href="tel:2102116016"
              className="flex items-center space-x-2 text-[#6ab04c] font-semibold"
            >
              <Phone size={18} />
              <span>210 21 16 016</span>
            </a>
          </div>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-full transition-colors duration-200 ${iconButtonBg}`}
            aria-label={darkMode ? t('accessibility.lightMode') : t('accessibility.darkMode')}
          >
            {darkMode ? (
              <Sun size={20} className={iconTextColor} />
            ) : (
              <Moon size={20} className={iconTextColor} />
            )}
          </button>

          <button
            onClick={toggleMenu}
            className={`p-2 rounded-full transition-colors duration-200 ${iconButtonBg}`}
            aria-label={isMenuOpen ? t('accessibility.closeMenu') : t('accessibility.openMenu')}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X size={24} className={iconTextColor} />
            ) : (
              <Menu size={24} className={iconTextColor} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-950/95 shadow-2xl shadow-slate-900/10 dark:shadow-black/40 border-t border-slate-200/80 dark:border-slate-700/80 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ backdropFilter: 'blur(18px)' }}
      >
        <nav className="container mx-auto px-4 py-5 max-h-[calc(100vh-5rem)] overflow-y-auto">
          <ul className="space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block rounded-xl px-4 py-3 font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-[#6ab04c] transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="flex flex-wrap items-center gap-3 pt-2 border-t border-slate-200 dark:border-slate-700">
              <button
                onClick={() => {
                  i18n.changeLanguage('el');
                  setIsMenuOpen(false);
                }}
                className={`p-2 rounded-full transition-colors duration-200 ${
                  language.startsWith('el') ? 'bg-[#6ab04c] text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200'
                }`}
                aria-label="Ελληνικά"
              >
                🇬🇷
              </button>
              <button
                onClick={() => {
                  i18n.changeLanguage('en');
                  setIsMenuOpen(false);
                }}
                className={`p-2 rounded-full transition-colors duration-200 ${
                  language.startsWith('en') ? 'bg-[#6ab04c] text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200'
                }`}
                aria-label="English"
              >
                🇬🇧
              </button>
            </li>
            <li className="pt-2 border-t border-slate-200 dark:border-slate-700">
              <a
                href="tel:2102116016"
                className="inline-flex items-center space-x-2 rounded-xl px-4 py-3 text-[#6ab04c] font-semibold bg-slate-50 dark:bg-slate-900/70 transition-colors duration-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <Phone size={18} />
                <span>210 21 16 016</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
