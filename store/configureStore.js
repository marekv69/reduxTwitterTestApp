import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import tweetsReducer from '../reducers'

export default function configureStore(initialState) {
  const store = createStore(
    tweetsReducer,
    initialState,
    applyMiddleware(thunkMiddleware, createLogger())
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
