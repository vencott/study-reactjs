import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
  // useSelector를 이용해 connector의 mapStatteToProps 대체
  const number = useSelector((state) => state.counter.number);

  // useDispatch를 이용해 connector의 mapDispatchToProps 대체
  // 컴포넌트 내부에서 스토어의 내장함수 dispatch를 직접 사용
  // 컨테이너 컴포넌트에서 액션을 디스패치해야 한다면 이 Hook을 사용!
  const dispatch = useDispatch();
  // useCallback을 이용해 리렌더링 시 함수 재생성 방지
  // useDispatch를 사용할 때는 useCall과 함께 이용하는 습관을 들이자!
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

// connect 함수 제거
export default CounterContainer;
