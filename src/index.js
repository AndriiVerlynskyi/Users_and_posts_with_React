import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import './Users_and_posts_styles.css'
import App from './App';
import store from './Redux/store';


ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

