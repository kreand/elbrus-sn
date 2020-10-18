import { Layout } from 'antd';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AuthPage from '../../pages/AuthPage/AuthPage';
import style from '../Layout/LayoutComponent.module.css';

const AuthLayoutComponent = () => {
  const { Header, Footer } = Layout;
  return (
    <>
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
    </>
  );
};

export default AuthLayoutComponent;
