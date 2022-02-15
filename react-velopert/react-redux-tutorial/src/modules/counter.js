import { createAction, handleActions } from 'redux-actions';
// Action 타입
// Action 타입은 대문자로, 문자열 내용은 '모듈이름/액션이름' 형태
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// Action 생성 함수
// redux-actions를 통해 간편하게 작성
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// 초기 상태 세팅
const initialState = { number: 0 };

// Reducer
// redux-actions를 통해 간편하게 작성
const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);

// export는 여러개를 내보낼 수 있지만 export default는 1개만 내보낼 수 있다
// 1. import counter from './counter'
// 2. import { increse, decrease } from './counter'
export default counter;
