import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Router, hashHistory } from 'react-router'
import 'bootstrap/dist/js/bootstrap'
import reducers from './reducers'
import routes from './routes'

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
  document.querySelector('#main'),
)

if (module.hot) {
  module.hot.accept()
}
