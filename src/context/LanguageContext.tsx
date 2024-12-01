import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { getCookie, setCookie } from "../../helpers"
import en from '../dictionnaries/en';
import fr from '../dictionnaries/fr';
type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en,
  fr
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };
  
  useEffect(function () {
    setLanguage(getCookie("lang") || language)
  }, [])

  return (
    <LanguageContext.Provider value={{
      language, setLanguage: function (lang: Language) {
        setLanguage(lang)
        setCookie("lang", lang)
      }, t
    }}>
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