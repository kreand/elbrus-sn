import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

import Main from './pages/Main/Main';
import { auth } from './redux/actionCreators/authAC'
import { useRoutes } from './routes'
import ProfilePage from './pages/ProfilePage/ProfilePage';
import RatingsPage from './pages/RatingsPage/RatingsPage';
import RatingOfOneStudent from './pages/RatingOfOneStudent/RatingOfOneStudent';

function App() {
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.auth)
  const router = useRoutes(isAuth)

  useEffect(() => {
    if (!!localStorage.length) {
      const user = JSON.parse(localStorage.userData).user
      return dispatch(auth())
    }
  },[dispatch])
  return (
    <BrowserRouter>
      <Main/>
      {router}
    </BrowserRouter>
  );
}

export default App;
