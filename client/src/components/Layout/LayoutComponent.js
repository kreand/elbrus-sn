import React from 'react';
import { Layout, Menu } from 'antd';
import { useDispatch } from 'react-redux';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import {
  DollarCircleOutlined,
  LogoutOutlined, NotificationOutlined,
  OrderedListOutlined,
  UserOutlined
} from '@ant-design/icons';

import EmployersPage from '../../pages/EmployersPage/EmployersPage';
import EventsPage from '../../pages/EventsPage/EventsPage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import RatingOfOneStudent from '../../pages/RatingOfOneStudent/RatingOfOneStudent';
import RatingsPage from '../../pages/RatingsPage/RatingsPage';
import { logout } from '../../redux/actionCreators/authAC';
import { clearEmployersAC } from '../../redux/actionCreators/employerAC';
import { clearUserAC } from '../../redux/actionCreators/profileAC';
import style from './LayoutComponent.module.css';
import StudentProfilePage from '../../pages/StudentProfilePage/StudentProfilePage'

const LayoutComponent = () => {
  const { Header, Footer, Sider, Content } = Layout;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(clearUserAC());
    dispatch(clearEmployersAC());
    localStorage.clear();
  };
  return (
    <Layout className={style.body}>
      <Header className={style.header}>
        <h1>Elbrus Social Network</h1>
      </Header>
      <div className={style.container}>
        <Layout>
          <Sider className={style.sidebar}>
            <Menu defaultSelectedKeys={['1']}>
              <Menu.Item key="1" icon={<UserOutlined className={style.iconColor}/>}>
                <Link to='/profile'>Профиль</Link>
              </Menu.Item>
              <Menu.Item key="2" icon={<DollarCircleOutlined className={style.iconColor}/>}>
                <Link to='/employers'>Работодатели</Link>
              </Menu.Item>
              <Menu.Item key="3" icon={<OrderedListOutlined className={style.iconColor}/>}>
                <Link to='/ratings'>Рейтинг студентов</Link>
              </Menu.Item>
              <Menu.Item key="4" icon={<NotificationOutlined className={style.iconColor}/>}>
                <Link to='/events'>Эвенты</Link>
              </Menu.Item>
              <Menu.Divider style={{backgroundColor: 'var(--purple_color)', opacity: '.5', margin: '10px'}}/>
              <Menu.Item key="5" icon={<LogoutOutlined className={style.iconColor}/>}>
                <Link onClick={logoutHandler} to='/auth'>Logout</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content className={style.content}>
            <Switch>
              <Route path="/employers" exact>
                <EmployersPage/>
              </Route>
              <Route path="/events" exact>
                <EventsPage/>
              </Route>
              <Route path="/ratings" exact>
                <RatingsPage/>
              </Route>
              <Route path="/profile" exact>
                <ProfilePage/>
              </Route>
              <Route path="/student/:id" exact>
                {/* <RatingOfOneStudent/> */}
                <StudentProfilePage/>
              </Route>
              <Redirect to="/profile" exact/>
            </Switch>
          </Content>
        </Layout>
      </div>
      <Footer className={style.footer}><a href="https://github.com/NickBGor/elbrus-sn">GitHub</a></Footer>
    </Layout>
  );
};

export default LayoutComponent;
