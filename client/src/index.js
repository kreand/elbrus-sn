import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import 'antd/dist/antd.css';
import './styles/styleConst.css';
import App from './App';
import {store} from './redux/store';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
