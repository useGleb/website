import StackDialog from '@/components/Sections/StackProjectsSection/StackDialog';
import WorkExperienceBlock from '../../WorkHistory/WorkExperienceBlock';
import EductaionSection from '../EducationSection';
import LanguagesSection from '../LanguagesSection';
import SectionHeader from '@/components/ui/SectionHeader';
import { useTranslations } from 'next-intl';

type StackProjectsSectionProps = {
  className?: string;
};

const StackProjectsSection = ({ className }: StackProjectsSectionProps) => {
  const t = useTranslations('SectionStackProjects');
  return (
    <div
      className={`flex items-between gap-16 flex-wrap lg:flex-row flex-row-reverse lg:flex-nowrap ${className}`}>
      <div className='w-full'>
        <SectionHeader title={t('title1')} />
        <StackDialog />
        <EductaionSection className='mb-24 mt-24' />
        <LanguagesSection className='mb-8' />
      </div>
      <div className='w-full flex flex-col'>
        <SectionHeader title={t('title2')} />
        <WorkExperienceBlock
          projectTranslationKey='FuturistLabs'
          icons={['Next', 'TypeScript', 'WS', 'Tailwind CSS', 'HTML5', 'Zod']}
        />
        <WorkExperienceBlock
          projectTranslationKey='Regate'
          icons={[
            'React',
            'TypeScript',
            'Storybook',
            'Cypress',
            'CSS3',
            'HTML5',
          ]}
        />
        <WorkExperienceBlock
          projectTranslationKey='Finanztip'
          icons={['React', 'TypeScript', 'Storybook', 'Jest']}
        />
        <WorkExperienceBlock
          projectTranslationKey='Mentessa'
          icons={['Vue.js', 'TypeScript', 'Nest.js', 'Cypress', 'Storybook']}
        />
        <WorkExperienceBlock
          projectTranslationKey='Temedica'
          icons={['React', 'TypeScript', 'Cypress']}
        />
        <WorkExperienceBlock
          projectTranslationKey='Feverguard'
          icons={['Next', 'TypeScript', 'Selenium']}
        />
      </div>
    </div>
  );
};

export default StackProjectsSection;
