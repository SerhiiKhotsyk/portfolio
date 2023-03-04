import { createContext, useState } from 'react';
import { en } from './locales/en';
import { ua } from './locales/ua';

export const LangContext = createContext(null);

export const LangProvider = ({ children }) => {
  const [langMode, setLangMode] = useState(window.localStorage.getItem('language') || 'en');

  // returns a value, according to the given key and the selected language
  const t = (langTextKey) => {
    switch (langMode) {
      case 'en':
        return en[langTextKey];
      case 'ua':
        return ua[langTextKey];
    }
  };

  return (
    <LangContext.Provider value={{ langMode, setLangMode, t }}>{children}</LangContext.Provider>
  );
};
