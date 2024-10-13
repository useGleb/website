const TopChevron = () => {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          borderTop: '10vw solid #21c8f4',
          borderLeft: '10vw solid transparent',
          borderBottom: '10vw solid transparent',
          borderRight: '10vw solid #21c8f4',
          zIndex: 5,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'transparent',
          boxShadow: 'inset 0px 0px 20px black',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      />
    </>
  );
};

export default TopChevron;
