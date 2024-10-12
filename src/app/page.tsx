import BubbleButton from './components/BubbleButton';
import GradientBackgroundContainer from './components/General/GradientBackgroundContainer';
import TopChevron from './components/General/TopChevron';
import TopChevronInner from './components/General/TopChevronInner';
import WorkExperienceBlock from './components/WorkHistory/WorkExperienceBlock';
import TopSection from './components/TopSection';
import Stack from './components/Stack';
import Image from 'next/image';
import { Mail } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='min-h-screen flex flex-row relative'>
      <TopChevron />
      <GradientBackgroundContainer>
        <main className='w-full h-full flex-grow bg-background px-44 py-24 shadow-mainBodyShadow relative'>
          <TopChevronInner />
          <TopSection />
          <div className='flex justify-center gap-48 mb-24'>
            <BubbleButton />
            <BubbleButton />
            <BubbleButton />
          </div>
          <div className='flex items-between gap-16'>
            <div className='w-full'>
              <div className='mb-16'>
                <h2 className='font-bold text-6xl text-typography'>STACK</h2>
                <div className='text-typography-light'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </div>
              </div>
              <Stack />
            </div>
            <div className='w-full flex flex-col'>
              <div className='mb-16'>
                <h2 className='font-bold text-6xl text-typography'>PROJECTS</h2>
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
          <div className='flex justify-center mt-20 gap-12'>
            <Link href='https://www.linkedin.com/in/gleb-kolosov-7818241ab/'>
              <Image
                src='/LinkedIn.svg'
                width={42}
                height={42}
                alt='Linkedin Icon'
                className='cursor-pointer transition-transform hover:scale-110'
              />
            </Link>
            <Link href='https://www.github.com/useGleb'>
              <Image
                src='/GitHub.svg'
                width={42}
                height={42}
                alt='Github Icon'
                className='cursor-pointer transition-transform hover:scale-110'
              />
            </Link>
            <Link href='mailto:it.gleb.kolosov@gmail.com'>
              <Mail
                width={42}
                height={42}
                className='cursor-pointer transition-transform hover:scale-110'
              />
            </Link>
          </div>
        </main>
      </GradientBackgroundContainer>
    </div>
  );
}

{
  /* <StackSection title='Frameworks'>
                <StackSectionTechIcon name='React' techIconName='React' />
                <StackSectionTechIcon name='Next' techIconName='Next' />
                <StackSectionTechIcon name='Nest' techIconName='Nest.js' />
              </StackSection>
              <StackSection title='Testing'>
                <StackSectionTechIcon name='Jest' techIconName='Jest' />
                <StackSectionTechIcon name='Cypress' techIconName='Cypress' />
                <StackSectionTechIcon name='Selenium' techIconName='Selenium' />
              </StackSection>
              <StackSection title='Styling'>
                <StackSectionTechIcon name='CSS3' techIconName='CSS3' />
                <StackSectionTechIcon name='Sass' techIconName='Sass' />
                <StackSectionTechIcon name='Less' techIconName='Less.js' />
                <StackSectionTechIcon name='MUI' techIconName='Material UI' />
                <StackSectionTechIcon
                  name='Storybook'
                  techIconName='Storybook'
                />
                <StackSectionTechIcon
                  name='Tailwind'
                  techIconName='Tailwind CSS'
                />
                <StackSectionTechIcon name='Figma' techIconName='Figma' />
              </StackSection>
              <StackSection title='Utility'>
                <StackSectionTechIcon name='React-Query' techIconName='React' />
                <StackSectionTechIcon name='Axios' techIconName='Axios' />
                <StackSectionTechIcon
                  name='Redux/Toolkit'
                  techIconName='Redux'
                />
              </StackSection> */
}
