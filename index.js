import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'

// it creates store with reducer from reducers\index.js, initial empty state and with thunk middleware and logger
const store = configureStore()

//Provider component makes store available in connect method from redux API
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)