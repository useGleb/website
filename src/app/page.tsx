import GradientBackgroundContainer from '../components/General/GradientBackgroundContainer';
import TopChevron from '../components/General/TopChevron';
import TopChevronInner from '../components/General/TopChevronInner';
import TopSection from '../components/Sections/TopSection';

import { Metadata } from 'next';
import StackProjectsSection from '../components/Sections/StackProjectsSection';
import AboutMeSection from '../components/Sections/AboutMeSection';
import BottomChevronInner from '../components/General/BottomChevronInner';
import BottomChevron from '../components/General/BottomChevron';
import AnimatedShadeGradient from '@/components/General/AnimatedShadeGradient';

export const metadata: Metadata = {
  title: 'useGleb - Senior Frontend Dev',
  description:
    'I am an experienced frontend developer with seven years of valuable contributions to teams of varying sizes and scopes, emphasizing scalable and well-documented code. Deeply passionate about integrating creativity with technical expertise in the development world. Eagerly seeking to join a dynamic team working on a stimulating and meaningful project that offers both challenge and fulfillment.',
};

export default function Home() {
  return (
    <div className='min-h-screen min-w-full flex flex-row relative'>
      <TopChevron />
      <GradientBackgroundContainer>
        <main className='w-full h-full flex-grow bg-background px-[10vw] py-24 pb-44 shadow-mainBodyShadow relative'>
          <AnimatedShadeGradient />
          <TopChevronInner />
          <TopSection className='mb-24' />
          <AboutMeSection className='mb-24' />
          <StackProjectsSection className='mb-24' />
          <BottomChevronInner />
        </main>
      </GradientBackgroundContainer>
      <BottomChevron />
    </div>
  );
}
