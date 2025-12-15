'use client';

import { useState, useEffect } from 'react';

// Static imports with JSON assertions for Turbopack compatibility
import enTranslations from '../../locales/en.json' assert { type: 'json' };
import deTranslations from '../../locales/de.json' assert { type: 'json' };
import esTranslations from '../../locales/es.json' assert { type: 'json' };
import frTranslations from '../../locales/fr.json' assert { type: 'json' };
import itTranslations from '../../locales/it.json' assert { type: 'json' };
import jaTranslations from '../../locales/ja.json' assert { type: 'json' };
import hiTranslations from '../../locales/hi.json' assert { type: 'json' };
import mrTranslations from '../../locales/mr.json' assert { type: 'json' };

// Available translations map
const availableTranslations: Record<string, any> = {
  'en': enTranslations,
  'de': deTranslations,
  'es': esTranslations,
  'fr': frTranslations,
  'it': itTranslations,
  'ja': jaTranslations,
  'hi': hiTranslations,
  'mr': mrTranslations,
};

export function useTranslation() {
  const [locale, setLocale] = useState('en');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Get preferred language from localStorage or default to 'en'
    const preferredLanguage = localStorage.getItem('preferred-language') || 'en';
    setLocale(preferredLanguage);
    setIsLoaded(true);
  }, []);

  const t = (key: string): string => {
    // Always use English translations to ensure SSR/CSR consistency
    const currentTranslations = availableTranslations['en'];
    
    // Split the key by dots to navigate nested objects
    const keys = key.split('.');
    let value: any = currentTranslations;
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Return the last part of the key if translation not found
        return keys[keys.length - 1] || key;
      }
    }
    
    // Return the value if it's a string, otherwise return the key
    return typeof value === 'string' ? value : key.split('.').pop() || key;
  };

  const changeLanguage = (newLocale: string) => {
    if (availableTranslations[newLocale]) {
      setLocale(newLocale);
      localStorage.setItem('preferred-language', newLocale);
    } else {
      console.log(`Translation not available for ${newLocale}`);
    }
  };

  return { t, locale, changeLanguage, isLoaded };
}