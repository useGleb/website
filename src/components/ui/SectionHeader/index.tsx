type SectionHeaderProps = {
  title: string;
};

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className='mb-16'>
      <h3 className='font-bold text-3xl lg:text-5xl text-typography'>
        {title}
      </h3>
      <div className='text-typography-light'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </div>
    </div>
  );
};

export default SectionHeader;
