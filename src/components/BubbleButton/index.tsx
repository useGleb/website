import { Camera } from 'lucide-react';

const BubbleButton = () => {
  return (
    <div className='hover:scale-110 transition-transform duration-500 ease-in-out'>
      <div className='rounded-full p-4 bg-gradient-to-tl from-background ease-in-out to-foreground-accent transition-shadow duration-500 cursor-pointer shadow-bubbleButtonBackgroundUnhovered hover:shadow-bubbleButtonBackgroundHovered'>
        <div className='rounded-full bg-background p-2'>
          <div className='rounded-full bg-foreground p-2 bg-gradient-to-tl from-background to-foreground-accent'>
            <div className='rounded-full bg-background aspect-square min-w-[200px] flex justify-center items-center'>
              <Camera size={84} className='text-foreground' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BubbleButton;
