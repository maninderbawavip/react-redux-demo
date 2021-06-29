import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Counter from './components/Counter';
// import App from './App';
// import App from './AppClass';
import { Provider } from 'react-redux'
import { store } from './redux/store';

//make my redux store accessible to my whole app
ReactDOM.render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  document.getElementById('root')
);


