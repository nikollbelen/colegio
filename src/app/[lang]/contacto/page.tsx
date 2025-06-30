'use client';

import { useTranslations } from '@/locales/useTranslations';
import { useParams } from 'next/navigation';

export default function Contacto() {
  const params = useParams();
  const t = useTranslations(params.lang as 'es' | 'en');

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4">{t('NB001')}</h1>
        <p className="text-xl">{t('NB003')}</p>
        <p className="mt-4">{t('NB004')} {t('NB002')}</p>
      </div>
    </div>
  );
}