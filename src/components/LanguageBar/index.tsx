'use client';

import { setUserLocale } from '@/lib/locale';
import { Globe } from 'lucide-react';
import { startTransition } from 'react';

type LanguageBarProps = {
  className?: string;
};
const LanguageBar = ({ className }: LanguageBarProps) => {
  const onChange = (value: string) => {
    startTransition(() => {
      setUserLocale(value);
    });
  };

  return (
    //Could have used cn, but will do for our use case
    <div className={`flex flex-row gap-2 text-xl ${className} absolute top-4`}>
      <Globe />
      <button onClick={() => onChange('en')} className='hover:underline'>
        EN
      </button>
      <button onClick={() => onChange('ru')} className='hover:underline'>
        RU
      </button>
      <button onClick={() => onChange('bg')} className='hover:underline'>
        BG
      </button>
    </div>
  );
};

export default LanguageBar;
