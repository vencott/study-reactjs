import React, { useContext } from 'react';
import ColorContext from '../contexts/color';

const ColorBox = () => {
  // 함수형 컴포넌트에서 useContext를 통해 간단하게 Context 조회 가능!
  const { state } = useContext(ColorContext);

  return (
    <>
      <div
        style={{
          width: '64px',
          height: '64px',
          background: state.color,
        }}
      />
      <div
        style={{
          width: '32px',
          height: '32px',
          background: state.subcolor,
        }}
      />
    </>
  );
};

export default ColorBox;
