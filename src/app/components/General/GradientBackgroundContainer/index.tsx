const GradientBackgroundContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div
      className='px-32'
      style={{
        background:
          'linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(18,94,156,1) 31%, rgba(48,209,191,1) 70%, rgba(113,225,115,1) 100%)',
      }}>
      {children}
    </div>
  );
};

export default GradientBackgroundContainer;
