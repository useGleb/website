import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import StackSection from './StackSection';
import { DialogTitle } from '@radix-ui/react-dialog';
import TechSkillHorizontal from './TechSkillHorizontal';
import GlowingButton from '@/components/ui/GlowingButton/glowing_button';
import { useTranslations } from 'next-intl';

const StackDialog = () => {
  const t = useTranslations('SectionStackProjects');
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='flex flex-col justify-center gap-12'>
          <div className='grid grid-cols-1 lg:grid-cols-2 text-start gap-4'>
            <div className='w-full flex flex-col gap-4'>
              <TechSkillHorizontal
                title='JavaScript'
                techIconName='JavaScript'
              />
              <TechSkillHorizontal
                title='Typescript'
                techIconName='TypeScript'
              />
            </div>
            <div className='w-full flex flex-col gap-4'>
              <TechSkillHorizontal title='CSS 3' techIconName='CSS3' />
              <TechSkillHorizontal title='HTML 5' techIconName='HTML5' />
            </div>
          </div>
          <div className='flex justify-center'>
            <GlowingButton className='px-8 py-2 text-lg w-fit'>
              {t('buttonTitle')}
            </GlowingButton>
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className='p-4 lg:p-16 w-full max-w-[80vw] h-[80vh] gap-0 border-0'>
        <DialogTitle
          className='text-typography text-2xl lg:text-5xl font-bold pb-4'
          style={{ boxShadow: '0px 24px 10px -10px rgba(0,0,0,0.5)' }}>
          What I use
        </DialogTitle>
        <div className='grid grid-cols-1 lg:grid-cols-4 flex-wrap w-full h-full gap-12 overflow-auto p-4 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:transparent [&::-webkit-scrollbar-thumb]:bg-foreground-accent-2 [&::-webkit-scrollbar-thumb]:rounded-xl [&::-webkit-scrollbar-thumb]:opacity-50'>
          <div className='flex flex-col gap-12'>
            <StackSection title='Core'>
              <TechSkillHorizontal
                title='JavaScript'
                techIconName='JavaScript'
              />
              <TechSkillHorizontal
                title='Typescript'
                techIconName='TypeScript'
              />
              <TechSkillHorizontal title='CSS 3' techIconName='CSS3' />
              <TechSkillHorizontal title='HTML 5' techIconName='HTML5' />
            </StackSection>
            <StackSection title='Frameworks'>
              <TechSkillHorizontal title='React' techIconName='React' />
              <TechSkillHorizontal title='Next' techIconName='Next' />
            </StackSection>
          </div>
          <div className='flex flex-col gap-12'>
            <StackSection title='Testing'>
              <TechSkillHorizontal title='Jest' techIconName='Jest' />
              <TechSkillHorizontal title='Cypress' techIconName='Cypress' />
              <TechSkillHorizontal title='Selenium' techIconName='Selenium' />
            </StackSection>
            <StackSection title='API'>
              <TechSkillHorizontal title='GraphQL' techIconName='GraphQL' />
              <TechSkillHorizontal title='REST' techIconName='TypeScript' />
              <TechSkillHorizontal title='WebSocket' techIconName='WS' />
            </StackSection>
          </div>
          <div className='flex flex-col gap-12'>
            <StackSection title='Styling'>
              <TechSkillHorizontal title='Sass' techIconName='Sass' />
              <TechSkillHorizontal title='Less' techIconName='Less.js' />
              <TechSkillHorizontal
                title='Tailwind'
                techIconName='Tailwind CSS'
              />
            </StackSection>
            <StackSection title='Design'>
              <TechSkillHorizontal title='MUI' techIconName='Material UI' />
              <TechSkillHorizontal title='Storybook' techIconName='Storybook' />

              <TechSkillHorizontal title='Figma' techIconName='Figma' />
            </StackSection>
          </div>

          <div className='flex flex-col gap-12'>
            <StackSection title='Utility'>
              <TechSkillHorizontal title='Axios' techIconName='Axios' />
              <TechSkillHorizontal title='Redux/Toolkit' techIconName='Redux' />

              <TechSkillHorizontal
                title='React-Query'
                techIconName='TypeScript'
              />
            </StackSection>

            <StackSection title='Forms'>
              <TechSkillHorizontal title='yup' techIconName='TypeScript' />
              <TechSkillHorizontal title='Zod' techIconName='Zod' />
              <TechSkillHorizontal
                title='react-hook-form'
                techIconName='TypeScript'
              />
            </StackSection>
          </div>
          <div className='flex flex-col gap-12'>
            <StackSection title='Bundling'>
              <TechSkillHorizontal title='Webpack' techIconName='Webpack' />
              <TechSkillHorizontal title='Babel' techIconName='Babel' />
            </StackSection>
            <StackSection title='Monitoring'>
              <TechSkillHorizontal title='Sentry' techIconName='Sentry' />
              <TechSkillHorizontal title='DataDog' techIconName='DataDog' />
            </StackSection>
            <StackSection title='Version Control'>
              <TechSkillHorizontal title='Git' techIconName='Git' />
            </StackSection>
          </div>
          <StackSection title='Other'>
            <TechSkillHorizontal title='Firebase' techIconName='Firebase' />
            <TechSkillHorizontal title='Stripe' techIconName='Stripe' />
            <TechSkillHorizontal title='Keycloak' techIconName='Keycloak' />
            <TechSkillHorizontal title='Docker' techIconName='Docker' />
          </StackSection>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StackDialog;
