import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import {
  increasePrice
} from './actions/index'


import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';

import cars from './reducers/index'


import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(cars)


// Log initial state

console.log("GET STATE: ", store.getState())

// Everytime state changes, log it!
//Unsubscribe is a state watcher

 const unsubscribe = store.subscribe(() => console.log("S P Y : ", store.getState()))

 // Dispatch actions

 store.dispatch(cars('Test Feature'))





const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
 rootElement
);
