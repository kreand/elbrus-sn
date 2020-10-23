import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import {
  DollarCircleOutlined,
  LogoutOutlined,
  NotificationOutlined,
  OrderedListOutlined,
  ShopOutlined,
  UserOutlined,
  EyeOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import EventsPage from '../../pages/EventsPage/EventsPage';
import ProfilePage from '../../pages/ProfilePage/ProfilePage';
import RatingsPage from '../../pages/RatingsPage/RatingsPage';
import ShopPage from '../../pages/ShopPage/ShopPage';
import { logout } from '../../redux/actionCreators/authAC';
import { clearEmployersAC } from '../../redux/actionCreators/employerAC';
import { clearUserAC } from '../../redux/actionCreators/profileAC';
import style from './LayoutComponent.module.css';
import AboutPage from '../../pages/AboutPage/AboutPage';
import StudentProfilePage from '../../pages/StudentProfilePage/StudentProfilePage';
import EmployerNav from '../EmployerNav/EmployerNav';
import AddEmployerForm from '../AddEmployerForm/AddEmployerForm';
import AllEmployers from '../AllEmployers/AllEmployers';
import AddReviewAboutEmployer from '../AddReviewAboutEmployer/AddReviewAboutEmployer';
import EmployerProfile from '../EmployerProfile/EmployerProfile';
import AdminPage from '../../pages/AdminPage/AdminPage';
import AdminEditStudentPage from '../../pages/AdminEditStudentPage/AdminEditStudentPage';
import ShoppingListPage from '../../pages/ShoppingListPage/ShoppingListPage';

const LayoutComponent = () => {
  const [about, setAbout] = useState(false);
  const { user } = useSelector(state => state.profile);
  const { Header, Sider, Content } = Layout;
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    dispatch(clearUserAC());
    dispatch(clearEmployersAC());
    localStorage.clear();
  };

  if (about) {
    return <AboutPage setAbout={setAbout} />;
  }
  return (
    <Layout className={style.body}>
      <Header className={style.header}>
        <h1>Elbrus Social Network</h1>
      </Header>
      <div className={style.container}>
        <Layout>
          <Sider className={style.sidebar}>
            <Menu defaultSelectedKeys={['1']}>
              <Menu.Item
                key="1"
                icon={<UserOutlined className={style.iconColor} />}
              >
                <Link to="/profile">Профиль</Link>
              </Menu.Item>
              <Menu.Item
                key="2"
                icon={<DollarCircleOutlined className={style.iconColor} />}
              >
                <Link to="/employers">Работодатели</Link>
              </Menu.Item>
              <Menu.Item
                key="3"
                icon={<OrderedListOutlined className={style.iconColor} />}
              >
                <Link to="/students">Рейтинг студентов</Link>
              </Menu.Item>
              <Menu.Item
                key="4"
                icon={<NotificationOutlined className={style.iconColor} />}
              >
                <a
                  href={`${process.env.REACT_APP_URL_DEFAULT}:4000/events?role=${user.status}`}
                >
                  Эвенты
                </a>
              </Menu.Item>
              {user.status === 'Гость' ? null : (
                <Menu.Item
                  key="5"
                  icon={<ShopOutlined className={style.iconColor} />}
                >
                  <Link to="/shop">Магазин</Link>
                </Menu.Item>
              )}
              <Menu.Divider
                style={{
                  backgroundColor: 'var(--purple_color)',
                  opacity: '.5',
                  margin: '10px',
                }}
              />
              {user.status === 'Ментор' ? (
                <>
                  <Menu.Item
                    key="6"
                    icon={<EyeOutlined className={style.iconColor} />}
                  >
                    <Link to="/admin">Ментор</Link>
                  </Menu.Item>
                  <Menu.Item
                    key="7"
                    icon={<ShoppingCartOutlined className={style.iconColor} />}
                  >
                    <Link to="/shopping-list">Список заказов</Link>
                  </Menu.Item>
                </>
              ) : null}
              <Menu.Item
                key="8"
                icon={<LogoutOutlined className={style.iconColor} />}
              >
                <Link onClick={logoutHandler} to="/auth">
                  Выход
                </Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Content className={style.content}>
            <Switch>
              <Route exact path={'/employer/add-review-about-employer/:id'}>
                <AddReviewAboutEmployer />
              </Route>
              <Route path="/admin/edit-student/:id" exact>
                <AdminEditStudentPage />
              </Route>
              <Route exact path={'/employer/:id'}>
                <EmployerProfile />
              </Route>
              <Route path="/student/:id" exact>
                <StudentProfilePage />
              </Route>
              <Route exact path={'/add-employer'}>
                <EmployerNav />
                <AddEmployerForm />
              </Route>
              <Route exact path={'/employers'}>
                <EmployerNav />
                <AllEmployers />
              </Route>
              <Route path="/shop" exact>
                <ShopPage />
              </Route>
              <Route path="/events" exact>
                <EventsPage />
              </Route>
              <Route path="/students" exact>
                <RatingsPage />
              </Route>
              <Route path="/profile" exact>
                <ProfilePage />
              </Route>
              <Route path="/admin" exact>
                <AdminPage />
              </Route>
              <Route path="/shopping-list" exact>
                <ShoppingListPage />
              </Route>
              <Redirect to="/profile" exact />
            </Switch>
          </Content>
        </Layout>
      </div>
      <footer className={style.footer}>
        <a href="https://github.com/NickBGor/elbrus-sn">GitHub</a>
        <Link onClick={() => setAbout(true)} to="/about">
          About us
        </Link>
      </footer>
    </Layout>
  );
};

export default LayoutComponent;
