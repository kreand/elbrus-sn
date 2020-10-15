import { applyMiddleware, compose, createStore } from 'redux'
import createSaga from 'redux-saga'
import { rootReducer } from './reducers/rootReducer'

const sagaMiddleware = createSaga()

export const store = createStore(rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
