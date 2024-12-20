const BottomChevronInner = () => {
  return (
    <>
      <div
        className='absolute bottom-0 left-0 w-[21vw] h-[21vw]'
        style={{
          background:
            'linear-gradient(30deg, rgba(2,0,36,0) 30%, rgba(18,94,156,1) 100%)',
          clipPath: 'polygon(0% 0, 0% 100%, 100% 100%)',
        }}
      />
      <div
        className='absolute bottom-0 left-0 w-[22vw] h-[22vw]'
        style={{
          background:
            'linear-gradient(30deg, rgba(2,0,36,0) 30%, #21c8f4 100%)',
          clipPath: 'polygon(0% 0, 0% 100%, 100% 100%)',
        }}
      />
    </>
  );
};

export default BottomChevronInner;
