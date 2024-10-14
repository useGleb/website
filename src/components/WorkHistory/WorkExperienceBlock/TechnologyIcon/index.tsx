import Image from 'next/image';

const TechnologyIcon = ({ techName }: { techName: string }) => {
  return (
    <div className='aspect-square w-fit h-fit p-2 border-foreground bg-background-light rounded-md'>
      <Image
        src={`/${techName}.svg`}
        width={64}
        height={64}
        alt='Tech Icon'
        className='w-6 h-6 text-foreground'
      />
    </div>
  );
};

export default TechnologyIcon;
