import SectionHeader from '@/components/ui/SectionHeader';
import { useTranslations } from 'next-intl';

type LanguagesSectionProps = {
  className?: string;
};

const LanguageChip = ({
  language,
  level,
}: {
  language: string;
  level: string;
}) => {
  return (
    <div className='flex flex-col gap-2 justify-center text-center bg-background-light p-8 rounded-xl w-full'>
      <div className='text-typography text-xl font-bold'>{language}</div>
      <div className='text-typography-light'>{level}</div>
    </div>
  );
};

const LanguagesSection = ({ className }: LanguagesSectionProps) => {
  const t = useTranslations('SectionLanguages');
  return (
    <div className={className}>
      <SectionHeader title={t('title')} />
      <div className='flex flex-row w-full gap-4  flex-wrap lg:flex-nowrap'>
        <LanguageChip language={t('language1')} level={t('level1')} />
        <LanguageChip language={t('language2')} level={t('level2')} />
        <LanguageChip language={t('language3')} level={t('level3')} />
      </div>
    </div>
  );
};

export default LanguagesSection;
