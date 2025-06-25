'use client';

import { ReactNode } from 'react';
import { useParams } from 'next/navigation';

export default function LangLayout({
  children,
}: {
  children: ReactNode;
}) {
  const params = useParams();
  const lang = params.lang as 'es' | 'en';

  return (
    <div lang={lang}>
      {children}
    </div>
  );
}
