import ContactsSection from '../ContactsSection';

type AboutMeSectionProps = {
  className?: string;
};
const AboutMeSection = ({ className }: AboutMeSectionProps) => {
  return (
    <div className={className}>
      <div className='font-bold text-3xl lg:text-5xl text-typography mb-8'>
        ABOUT ME
      </div>
      <ContactsSection className='mb-8' />
      <div className='flex justify-start'>
        <div className='text-typography-light text-start lg:text-xl lg:max-w-[40vw]'>
          I am an experienced frontend developer with seven years of valuable
          contributions to teams of varying sizes and scopes, emphasizing
          scalable and well-documented code. Deeply passionate about integrating
          creativity with technical expertise in the development world. Eagerly
          seeking to join a dynamic team working on a stimulating and meaningful
          project that offers both challenge and fulfillment.
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
