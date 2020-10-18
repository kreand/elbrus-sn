import { applyMiddleware, compose, createStore } from 'redux';
import createSaga from 'redux-saga';
import { rootReducer } from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';

const sagaMiddleware = createSaga();

export const store = createStore(rootReducer,
  compose(
    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(rootSaga);
