import { Layout } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import style from './components/Layout/LayoutComponent.module.css';
import LoaderComponent from './components/Loader/LoaderComponent';
import defaultCheckTokenAC from './redux/actionCreators/profileAC';
import { useRoutes } from './routes';

function App () {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth);
  const router = useRoutes(isAuth);
  const loading = useSelector(state => state.app.checkTokenLoading);

  useEffect(() => {
    if (!!localStorage.length) {
      const token = JSON.parse(localStorage.userData).token;
      dispatch(defaultCheckTokenAC(token));
    }
  }, [dispatch]);

  const { Header, Footer } = Layout;

  if (loading) {
    return (
      <Layout className={style.body}>
        <Header className={style.header}>
          <h1>Elbrus Social Network</h1>
        </Header>
        <LoaderComponent size='large'/>
        <Footer className={style.footer}><a href="https://github.com/NickBGor/elbrus-sn">GitHub</a></Footer>
      </Layout>
    );
  }
  return (
    <BrowserRouter>
      {router}
    </BrowserRouter>
  );
}

export default App;
