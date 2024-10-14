import SectionHeader from '@/components/ui/SectionHeader';
import { Calendar } from 'lucide-react';
import { useTranslations } from 'next-intl';

type EducationSectionProps = {
  className?: string;
};

type DegreeChipProps = {
  university: string;
  degree: string;
  yearStart: string;
  yearEnd: string;
};

const DegreeChip = ({
  university,
  degree,
  yearStart,
  yearEnd,
}: DegreeChipProps) => {
  return (
    <div className='w-full flex  flex-col lg:flex-row lg:justify-between items-start mb-8 bg-background-light p-6 rounded-xl'>
      <div>
        <div className='text-typography-light mb-4'>{university}</div>
        <div className='text-xl lg:text-2xl font-bold text-typography mb-4'>
          {degree}
        </div>
      </div>
      <div className='flex gap-2 items-center text-typography-light'>
        <Calendar size={18} />
        {yearStart} - {yearEnd}
      </div>
    </div>
  );
};

const EductaionSection = ({ className }: EducationSectionProps) => {
  const t = useTranslations('SectionEducation');
  return (
    <div className={className}>
      <div>
        <SectionHeader title={t('title')} />
        <DegreeChip
          university={t('university1')}
          degree={t('degree1')}
          yearStart={t('startYear1')}
          yearEnd={t('endYear1')}
        />
        <DegreeChip
          university={t('university2')}
          degree={t('degree2')}
          yearStart={t('startYear2')}
          yearEnd={t('endYear2')}
        />
      </div>
    </div>
  );
};

export default EductaionSection;
