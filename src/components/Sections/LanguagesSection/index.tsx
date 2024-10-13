type LanguagesSectionProps = {
  className?: string;
};

const LanguageChip = ({
  language,
  level,
}: {
  language: string;
  level: string;
}) => {
  return (
    <div className='flex flex-col gap-2 justify-center text-center bg-background-light p-8 rounded-xl w-full'>
      <div className='text-typography text-xl font-bold'>{language}</div>
      <div className='text-typography-light'>{level}</div>
    </div>
  );
};

const LanguagesSection = ({ className }: LanguagesSectionProps) => {
  return (
    <div className={className}>
      <div className='mb-16'>
        <h3 className='font-bold text-5xl text-typography'>LANGUAGES</h3>
        <div className='text-typography-light'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </div>
      </div>
      <div className='flex flex-row w-full gap-4  flex-wrap lg:flex-nowrap'>
        <LanguageChip language='ENGLISH' level='Fluent' />
        <LanguageChip language='BULGARIAN' level='Fluent' />
        <LanguageChip language='RUSSIAN' level='Native' />
      </div>
    </div>
  );
};

export default LanguagesSection;
