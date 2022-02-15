import { act } from 'react-dom/test-utils';

// 미들웨어 기본 구조
const loggerMiddleware = (store) => (next) => (action) => {
  console.group(action && action.type); // 액션 타입으로 로그를 그룹화함
  console.log('이전 상태', store.getState());
  console.log('액션', action);
  next(action); // 다음 미들웨어 or 리듀서에게 전달
  console.log('다음 상태', store.getState()); // 업데이트된 상태
  console.groupEnd();
};

export default loggerMiddleware;
