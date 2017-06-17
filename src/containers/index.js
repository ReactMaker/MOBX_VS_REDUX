import React from 'react';
// import package
import { Provider } from 'react-redux';
import { Router, Route, hashHistory } from 'react-router';
import store from 'redux_flow/store';
// import relative path
import Home from './Home';
import NotFound from './NotFound';

// add router key to fix this issue
// https://github.com/reactjs/react-router-redux/issues/179#issuecomment-275576250
const Main = () => (
  <Provider store={store}>
    <Router key={Math.random()} history={hashHistory}>
      <Route path="/" component={Home} />
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>
);

export default Main;
