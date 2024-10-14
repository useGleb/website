import { useTranslations } from 'next-intl';
import ContactsSection from '../ContactsSection';

type AboutMeSectionProps = {
  className?: string;
};
const AboutMeSection = ({ className }: AboutMeSectionProps) => {
  const t = useTranslations('SectionAboutMe');
  return (
    <div className={className}>
      <div className='font-bold text-3xl lg:text-5xl text-typography mb-8'>
        {t('title')}
      </div>
      <ContactsSection className='mb-8' />
      <div className='flex justify-start'>
        <div className='text-typography-light text-start lg:text-xl lg:max-w-[40vw]'>
          {t('text')}
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
