import { Layout } from 'antd';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import LayoutComponent from './components/Layout/LayoutComponent';
import style from './components/Layout/LayoutComponent.module.css';

import AuthPage from './pages/AuthPage/AuthPage';

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <LayoutComponent/>
    );
  }

  const { Header, Footer } = Layout;

  return (
    <Layout className={style.body}>
      <Header className={style.header}>
        <h1>Elbrus Social Network</h1>
      </Header>
      <Switch>
        <Route path="/auth" exact>
          <AuthPage/>
        </Route>
        <Redirect to="/auth"/>
      </Switch>
      <Footer className={style.footer}>Footer</Footer>
    </Layout>
  );
};
