import StackSectionTechIcon from '../StackSection/StackSectionTechIcon';

const TechSkills = () => {
  return (
    <div className='grid grid-cols-6 gap-4 w-full'>
      <div className='col-span-3'>
        <div className='text-typography font-bold text-xl'>Core</div>
        <div className='text-typography-light'>Lorem ipsum verbatum</div>
      </div>
      <div className='col-span-3'>
        <div className='text-typography font-bold text-xl'>Frameworks</div>
        <div className='text-typography-light'>Lorem ipsum verbatum</div>
      </div>
      <StackSectionTechIcon name='JavaScript' techIconName='JavaScript' />
      <StackSectionTechIcon name='CSS 3' techIconName='CSS3' />
      <StackSectionTechIcon name='HTML 5' techIconName='HTML5' />
      <StackSectionTechIcon name='React' techIconName='React' />
      <StackSectionTechIcon name='Next' techIconName='Next' />
      <StackSectionTechIcon name='Nest' techIconName='Nest.js' />
    </div>
  );
};

export default TechSkills;
