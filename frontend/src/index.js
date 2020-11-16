import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; // Our provider to work with Redux on React
import store from './store.js'; // Our Redux store
import './bootstrap.min.css'; // Flatly Bootswatch template
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
