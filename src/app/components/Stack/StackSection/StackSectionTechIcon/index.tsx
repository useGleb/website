import { Library } from 'lucide-react';
import Image from 'next/image';

type StackSectionTechIconProps = {
  name: string;
  techIconName?: string;
};

const StackSectionTechIcon = ({
  name,
  techIconName,
}: StackSectionTechIconProps) => {
  return (
    <div className='flex justify-center items-center flex-col gap-2'>
      <div className='p-4 border-2 aspect-square w-fit h-fit border-foreground rounded-md transition-all hover:scale-110 hover:border-foreground-accent-2'>
        {techIconName ? (
          <Image
            src={`/${techIconName}.svg`}
            width={32}
            height={32}
            alt='React Icon'
          />
        ) : (
          <Library className='text-foreground w-[32px] h-[32px]' />
        )}
      </div>
      <div className='text-typography-foreground text-md text-nowrap'>
        {name}
      </div>
    </div>
  );
};

export default StackSectionTechIcon;
