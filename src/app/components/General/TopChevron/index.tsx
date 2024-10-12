const TopChevron = () => {
  return (
    <>
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          borderTop: '13rem solid #21c8f4',
          borderLeft: '13rem solid transparent',
          borderBottom: '13rem solid transparent',
          borderRight: '13rem solid #21c8f4',
          boxShadow: 'inset 500px 500px black',
          zIndex: 100,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
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
