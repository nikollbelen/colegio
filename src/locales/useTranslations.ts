import { useState, useEffect } from 'react';
import type { Locale } from './config';
import { getTranslation } from './utils';

export interface Translation {
  [key: string]: string | Translation;
}

export function useTranslations(locale: Locale) {
  const [translations, setTranslations] = useState<Translation>({});

  useEffect(() => {
    import(`./${locale}.json`).then((module) => {
      const data = module.default as Record<string, Translation>;
      setTranslations(data);
    });
  }, [locale]);

  return (key: string, defaultValue = '') => 
    getTranslation(translations, key, defaultValue);
}
