import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle: React.FC = () => {
  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage || i18n.language;
  const isEnglish = language.startsWith('en');

  const toggleLanguage = () => {
    const newLang = isEnglish ? 'el' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-8 left-8 z-40 p-2 bg-white dark:bg-slate-800 rounded-full shadow-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-200"
      aria-label="Toggle language"
    >
      <img 
        src={isEnglish ? '/gr.svg' : '/uk.svg'} 
        alt={isEnglish ? 'Ελληνικά' : 'English'}
        className="w-6 h-6"
      />
    </button>
  );
};

export default LanguageToggle;