import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.diffusion': 'Diffusion',
    'nav.team': 'Team',
    'nav.reviews': 'Reviews',
    'nav.contact': 'Contact Us',
    'nav.partners': 'Partners',
    'nav.about': 'About Us'
  },
  fr: {
    'nav.services': 'Services',
    'nav.projects': 'Projets',
    'nav.diffusion': 'Diffusion',
    'nav.team': 'Équipe',
    'nav.reviews': 'Avis',
    'nav.contact': 'Contactez-nous',
    'nav.partners': 'Partenaires',
    'nav.about': 'À Propos'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}