import { handleActions } from 'redux-actions';
import * as api from '../lib/api';
import createRequestThunk from '../lib/createRequestThunk';

// 액션 타입 선언
// 한 요청당 3개
const GET_POST = 'sample/GET_POST';
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAILURE = 'sample/GET_POST_FAILURE';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAILURE = 'sample/GET_USERS_FAILURE';

// thunk 함수 생성
// thunk 함수 내부에서 시작, 성공, 실패 시 각각 다른 액션을 디스패치
export const getPost = createRequestThunk(GET_POST, api.getPost);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers);

// 초기 상태 선언
// 요청의 로딩중 상태는 loading 객체에서 관리
const initialState = {
  post: null,
  users: null,
};

const sample = handleActions(
  {
    // [GET_POST]: (state) => ({
    //   ...state,
    // }),
    [GET_POST_SUCCESS]: (state, action) => ({
      ...state,
      post: action.payload,
    }),
    // [GET_POST_FAILURE]: (state, action) => ({
    //   ...state,
    // }),
    // [GET_USERS]: (state) => ({
    //   ...state,
    // }),
    [GET_USERS_SUCCESS]: (state, action) => ({
      ...state,
      users: action.payload,
    }),
    // [GET_USERS_FAILURE]: (state, action) => ({
    //   ...state,
    // }),
  },
  initialState,
);

export default sample;
