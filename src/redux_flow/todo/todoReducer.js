import { handleActions } from 'redux-actions';
import types from './todoConstant';

const initialState = [];

export default handleActions({
  [types.ADD_TODO]: (state, { payload }) => [
    ...state,
    { text: payload },
  ],
  [types.REMOVE_TODO]: (state, { payload }) => [
    ...state.slice(0, payload),
    ...state.slice(payload + 1),
  ]
}, initialState);
