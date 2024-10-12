import { Globe, Server, Smartphone } from 'lucide-react';
import StackSection from './StackSection';
import StackSectionTechIcon from './StackSection/StackSectionTechIcon';

const Stack = () => {
  return (
    <div className='flex flex-col w-full gap-24'>
      <div>
        {/* <div className='flex text-3xl items-center gap-2 font-bold text-typography mb-10 border-b-2 pb-4 border-foreground'>
          <Globe size={32} /> Frontend
        </div> */}
        <div className='grid grid-cols-1 flex-wrap w-full gap-12'>
          <StackSection title='Core'>
            <StackSectionTechIcon name='JavaScript' techIconName='JavaScript' />
            <StackSectionTechIcon name='Typescript' techIconName='Typescript' />
            <StackSectionTechIcon name='CSS 3' techIconName='CSS3' />
            <StackSectionTechIcon name='HTML 5' techIconName='HTML5' />
          </StackSection>
          <StackSection title='Frameworks'>
            <StackSectionTechIcon name='React' techIconName='React' />
            <StackSectionTechIcon name='Next' techIconName='Next' />
          </StackSection>
          <StackSection title='Styling'>
            <StackSectionTechIcon name='Sass' techIconName='Sass' />
            <StackSectionTechIcon name='Less' techIconName='Less.js' />
            <StackSectionTechIcon name='MUI' techIconName='Material UI' />
            <StackSectionTechIcon name='Storybook' techIconName='Storybook' />
            <StackSectionTechIcon name='Tailwind' techIconName='Tailwind CSS' />
            <StackSectionTechIcon name='Figma' techIconName='Figma' />
          </StackSection>
          <StackSection title='Testing'>
            <StackSectionTechIcon name='Jest' techIconName='Jest' />
            <StackSectionTechIcon name='Cypress' techIconName='Cypress' />
            <StackSectionTechIcon name='Selenium' techIconName='Selenium' />
          </StackSection>
          <StackSection title='Utility'>
            <StackSectionTechIcon
              name='React-Query'
              techIconName='Typescript'
            />
            <StackSectionTechIcon name='Axios' techIconName='Axios' />
            <StackSectionTechIcon name='Redux/Toolkit' techIconName='Redux' />
            <StackSectionTechIcon
              name='react-hook-form'
              techIconName='Typescript'
            />
            <StackSectionTechIcon name='yup' techIconName='Typescript' />
            <StackSectionTechIcon name='Zod' techIconName='Zod' />
          </StackSection>
          <StackSection title='Bundling'>
            <StackSectionTechIcon name='Webpack' techIconName='Webpack' />
            <StackSectionTechIcon name='Babel' techIconName='Babel' />
          </StackSection>
          <StackSection title='API'>
            <StackSectionTechIcon name='GraphQL' techIconName='GraphQL' />
            <StackSectionTechIcon name='REST' />
            <StackSectionTechIcon name='WebSocket' techIconName='WS' />
          </StackSection>
          <StackSection title='Misc'>
            <StackSectionTechIcon name='Firebase' techIconName='Firebase' />
            <StackSectionTechIcon name='Stripe' techIconName='Stripe' />
            <StackSectionTechIcon name='Keycloak' techIconName='Keycloak' />
            <StackSectionTechIcon name='Docker' techIconName='Docker' />
          </StackSection>
          <StackSection title='Monitoring'>
            <StackSectionTechIcon name='Sentry' techIconName='Sentry' />
            <StackSectionTechIcon name='DataDog' techIconName='DataDog' />
          </StackSection>
          <StackSection title='Version Control'>
            <StackSectionTechIcon name='Git' techIconName='Git' />
          </StackSection>
        </div>
      </div>
      {/* <div>
        <div className='flex text-3xl items-center gap-2 font-bold text-typography mb-10 border-b-2 pb-4 border-foreground'>
          <Smartphone size={32} /> Mobile
        </div>
      </div> */}
      {/* <div>
        <div className='flex text-3xl items-center gap-2 font-bold text-typography mb-10 border-b-2 pb-4 border-foreground'>
          <Server size={32} /> Backend
        </div>
        <div className='flex flex-col w-full gap-8'>
          <StackSection title='Core'>
            <StackSectionTechIcon name='Node' techIconName='Node.js' />
            <StackSectionTechIcon name='Express' techIconName='Express' />
            <StackSectionTechIcon name='Nest' techIconName='Nest.js' />
          </StackSection>
          <StackSection title='Databases'>
            <StackSectionTechIcon name='Postgres' techIconName='PostgresSQL' />
            <StackSectionTechIcon name='MySQL' techIconName='MySQL' />
          </StackSection>
          <StackSection title='Utility'>
            <StackSectionTechIcon name='Typeorm' />
            <StackSectionTechIcon name='Typeorm' />
          </StackSection>
        </div>
      </div> */}
    </div>
  );
};

export default Stack;
