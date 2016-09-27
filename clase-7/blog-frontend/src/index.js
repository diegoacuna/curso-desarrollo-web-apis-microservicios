import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Post from './Post';
import { Router, Route, browserHistory } from 'react-router'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';

ReactDOM.render(
  (
      <Router history={browserHistory}>
          <Route path="/" component={App}/>
          <Route path="/post/:postId" component={Post}/>
      </Router>
  ), document.getElementById('root')
);
