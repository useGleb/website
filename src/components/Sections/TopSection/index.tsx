import { useTranslations } from 'next-intl';
import LanguageBar from '../../LanguageBar';
import Image from 'next/image';

type TopSectionProps = {
  className?: string;
};

const TopSection = ({ className }: TopSectionProps) => {
  const t = useTranslations();
  return (
    <div className={className}>
      <LanguageBar />
      <Image src='assets/test.jpg' width={100} height={100} alt='123123' />
      <Image src='test.jpg' width={100} height={100} alt='123123' />
      <div className='font-bold text-3xl lg:text-7xl text-typography'>
        {t('titleFirstLine')}
      </div>
      <div className='font-extrabold text-4xl lg:text-8xl mb-2 text-typography'>
        {t('titleSecondLine')}
      </div>
      <div className='flex gap-4'>
        <div className='font-medium lg:text-xl text-foreground-accent'>
          Modern
        </div>
        <div className='font-medium lg:text-xl text-foreground-accent'>
          Adaptive
        </div>
        <div className='font-medium lg:text-xl text-foreground-accent'>
          Professional
        </div>
      </div>
    </div>
  );
};

export default TopSection;
