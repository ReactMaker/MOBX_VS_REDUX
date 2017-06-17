import React from 'react';
// import package
import { useStrict } from 'mobx';
import { Provider } from 'mobx-react';
import { Router, Route, hashHistory } from 'react-router';
// import relative path
import todoStore from 'mobx_flow/TodoStore';
import Home from './Home';
import NotFound from './NotFound';

const store = {
  todoStore,
};

// useStrict(true);

// add router key to fix this issue
// https://github.com/reactjs/react-router-redux/issues/179#issuecomment-275576250
const Main = () => (
  <Provider {...store}>
    <Router key={Math.random()} history={hashHistory}>
      <Route path="/" component={Home} />
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>
);

export default Main;
