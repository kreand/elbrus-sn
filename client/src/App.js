import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { auth } from './redux/actionCreators/authAC';
import { authUserAC } from './redux/actionCreators/profileAC';
import { useRoutes } from './routes';

function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth);
  const router = useRoutes(isAuth);

  useEffect(() => {
    if (!!localStorage.length) {
      const user = JSON.parse(localStorage.userData).user;
      dispatch(auth());
      dispatch(authUserAC(user));
    }
  },[dispatch]);
  return (
    <BrowserRouter>
      {router}
    </BrowserRouter>
  );
}

export default App;
