// ./src/index.js

import React, { Component } from 'react'
import { render } from 'react-dom'
import ReactDOM from 'react-dom'
import { createStore } from 'redux' /* code change */
import { Provider } from 'react-redux'
import shoppingListItemReducer from './reducers/shoppingListItemReducer.js'
import App from './App'
import './index.css'

const store = createStore(shoppingListItemReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
);


ReactDOM,render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
