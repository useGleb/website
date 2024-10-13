import SectionHeader from '@/components/ui/SectionHeader';
import { Calendar } from 'lucide-react';

type EducationSectionProps = {
  className?: string;
};

type DegreeChipProps = {
  university: string;
  degree: string;
  yearStart: number;
  yearEnd: number;
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
  return (
    <div className={className}>
      <div>
        <SectionHeader title='EDUCATION' />
        <DegreeChip
          university='University of Economics - Varna'
          degree='Mobile and Web technologies'
          yearStart={2019}
          yearEnd={2023}
        />
        <DegreeChip
          university='Bauman Moscow Technical State'
          degree='Automatic Information Systems'
          yearStart={2017}
          yearEnd={2019}
        />
      </div>
    </div>
  );
};

export default EductaionSection;
