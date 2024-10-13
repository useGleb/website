import StackDialog from '@/components/Sections/StackProjectsSection/StackDialog';
import WorkExperienceBlock from '../../WorkHistory/WorkExperienceBlock';
import EductaionSection from '../EducationSection';
import LanguagesSection from '../LanguagesSection';

type StackProjectsSectionProps = {
  className?: string;
};

const StackProjectsSection = ({ className }: StackProjectsSectionProps) => {
  return (
    <div
      className={`flex items-between gap-16 flex-wrap lg:flex-row flex-row-reverse lg:flex-nowrap ${className}`}>
      <div className='w-full'>
        <div className='mb-16'>
          <h3 className='font-bold text-5xl text-typography'>STACK</h3>
          <div className='text-typography-light'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
        <StackDialog />
        <EductaionSection className='mb-24 mt-24' />
        <LanguagesSection className='mb-8' />
      </div>
      <div className='w-full flex flex-col'>
        <div className='mb-16'>
          <h3 className='font-bold text-5xl text-typography'>PROJECTS</h3>
          <div className='text-typography-light'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
        <WorkExperienceBlock
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          title='Futurist-Labs'
          location='Sofia, Bulgaria'
        />
        <WorkExperienceBlock
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          title='Regate'
          location='Varna, Bulgaria'
        />
        <WorkExperienceBlock
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          title='Finanztip'
          location='Sofia, Bulgaria'
        />
        <WorkExperienceBlock
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          title='Mentessa'
          location='Sofia, Bulgaria'
        />
        <WorkExperienceBlock
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          title='Temedica'
          location='Sofia, Bulgaria'
        />
        <WorkExperienceBlock
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          title='Feverguard'
          location='Sofia, Bulgaria'
        />
        <WorkExperienceBlock
          description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          title='Comitex'
          location='Sofia, Bulgaria'
        />
      </div>
    </div>
  );
};

export default StackProjectsSection;
