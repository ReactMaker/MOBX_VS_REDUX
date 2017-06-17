import { createStore, combineReducers } from 'redux';

import todoReducer from './todo/todoReducer';

const rootReducer = combineReducers({
  todoReducer,
});

export default createStore(rootReducer,
  window.devToolsExtension ? window.devToolsExtension() : undefined);
