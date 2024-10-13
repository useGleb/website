const BottomChevron = () => {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          backgroundColor: 'rgba(113,225,115,1)',
          width: '20vw',
          height: '20vw',
          zIndex: 5,
          clipPath: 'polygon(0% 0, 0% 100%, 100% 100%)',
        }}
      />
    </>
  );
};

export default BottomChevron;
