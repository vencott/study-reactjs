import { createContext, useState } from 'react';

// 새 Context를 만들 땐 createContext() 사용
// 기본값은 Provider의 value 내에 넣는 객체의 형태와 일치시키는 것이 좋다
const ColorContext = createContext({
  state: { color: 'black', subcolor: 'red' },
  actions: {
    setColor: () => {},
    setSubColor: () => {},
  },
});

// ColorProvider 컴포넌트
const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('black');
  const [subcolor, setSubcolor] = useState('red');

  // value에서 상태는 state, 업데이트 함수는 actions로 묶어서 전달
  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;
