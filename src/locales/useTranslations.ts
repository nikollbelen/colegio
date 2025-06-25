import { useState, useEffect } from 'react';
import type { Locale } from './config';
import { getTranslation } from './utils';

export function useTranslations(locale: Locale) {
  const [translations, setTranslations] = useState<any>({});

  useEffect(() => {
    import(`./${locale}.json`).then((module) => {
      const data = module.default as Record<string, any>;
      setTranslations(data);
    });
  }, [locale]);

  return (key: string, defaultValue = '') => 
    getTranslation(translations, key, defaultValue);
}
