import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => setLanguage('en')}
        className={`px-2 py-1 rounded-md transition-colors ${
          language === 'en'
            ? 'bg-highlight text-white'
            : 'hover:bg-gray-100'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('fr')}
        className={`px-2 py-1 rounded-md transition-colors ${
          language === 'fr'
            ? 'bg-highlight text-white'
            : 'hover:bg-gray-100'
        }`}
      >
        FR
      </button>
    </div>
  );
}