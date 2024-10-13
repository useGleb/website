type StackSectionProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
};

const StackSection = ({ title, children, className }: StackSectionProps) => {
  return (
    <div className={className}>
      <div className='font-bold text-typography text-xl mb-1'>{title}</div>
      <div className='text-typography-light text-md mb-4'>
        Lorem ipsum verbatum
      </div>
      <div className='flex gap-4 flex-row flex-wrap'>{children}</div>
    </div>
  );
};

export default StackSection;
