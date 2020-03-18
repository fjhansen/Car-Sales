import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import {
  addFeature
} from './actions/index'


import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { configureStore } from '@reduxjs/toolkit';

import {cars} from './reducers/index'


import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(cars, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)


// Log initial state

console.log("GET STATE: ", store.getState())

// Everytime state changes, log it!
//Unsubscribe is a state watcher

 const unsubscribe = store.subscribe(() => console.log("S P Y : ", store.getState()))

 // Dispatch actions

 store.dispatch(addFeature('Test Feature'))





const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
 rootElement
);
