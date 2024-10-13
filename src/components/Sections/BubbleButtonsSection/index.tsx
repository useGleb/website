import BubbleButton from '../../BubbleButton';

type BubbleButtonsSectionProps = {
  className?: string;
};

const BubbleButtonsSection = ({ className }: BubbleButtonsSectionProps) => {
  return (
    <div className={`flex justify-center gap-24 flex-wrap ${className}`}>
      <BubbleButton />
      <BubbleButton />
      <BubbleButton />
    </div>
  );
};

export default BubbleButtonsSection;
