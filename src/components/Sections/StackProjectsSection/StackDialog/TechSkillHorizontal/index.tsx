import Image from 'next/image';

type TechSkillHorizontalProps = {
  title: string;
  techIconName: string;
};

export const TechSkillHorizontal = ({
  title,
  techIconName,
}: TechSkillHorizontalProps) => {
  return (
    <div className='flex w-full justify-between bg-background-light py-4 px-4 rounded-[8px] items-center'>
      <div className='font-bold text-typography'>{title}</div>
      <Image
        src={`/${techIconName}.svg`}
        alt='Tech skill icon'
        width={32}
        height={32}
      />
    </div>
  );
};

export default TechSkillHorizontal;
