import { Building, Calendar, Pin } from 'lucide-react';
import TechnologyIcon from './TechnologyIcon';
import { useTranslations } from 'next-intl';

type WorkExperienceBlockProps = {
  projectTranslationKey: string;
};

const WorkExperienceBlock = ({
  projectTranslationKey,
}: WorkExperienceBlockProps) => {
  const t = useTranslations(
    `SectionStackProjects.Projects.${projectTranslationKey}`
  );
  return (
    <div className='relative flex gap-16'>
      <div
        className='p-2 bg-background border-2 border-foreground absolute -translate-x-1/2 lg:block hidden'
        style={{ borderBottomLeftRadius: 6, borderTopRightRadius: 6 }}>
        <Building className='text-foreground-accent-2' />
      </div>
      <div className='h-full w-4 bg-foreground lg:block hidden'></div>
      <div className='pb-16'>
        <div className='text-xl font-bold mb-2 text-typography'>
          {t('title')}
        </div>
        <div className='flex lg:items-center justify-between lg:flex-row flex-col'>
          <div className='flex gap-2 items-center text-lg font-medium mb-2 text-foreground-accent'>
            <Pin size={20} /> {t('location')}
          </div>
          <div className='flex lg:flex-row items-center gap-2 text-typography-light text opacity-50'>
            <Calendar size={16} />
            {t('yearStart')} - {t('yearEnd')}
          </div>
        </div>
        <div className='text-typography-light'>{t('content')}</div>
        <div className='mt-4 flex gap-4'>
          <TechnologyIcon />
          <TechnologyIcon />
          <TechnologyIcon />
          <TechnologyIcon />
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceBlock;
