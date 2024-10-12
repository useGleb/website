const TopChevronInner = () => {
  return (
    <>
      <div
        className='absolute top-0 right-0 w-[400px] h-[400px]'
        style={{
          background:
            'linear-gradient(210deg, rgba(2,0,36,0) 30%, rgba(18,94,156,1) 100%)',
          clipPath: 'polygon(0% 0, 100% 0%, 100% 100%)',
        }}
      />
      <div
        className='absolute top-0 right-0 w-[424px] h-[424px]'
        style={{
          background:
            'linear-gradient(210deg, rgba(2,0,36,0) 30%, #21c8f4 100%)',
          clipPath: 'polygon(0% 0, 100% 0%, 100% 100%)',
        }}
      />
    </>
  );
};

export default TopChevronInner;
