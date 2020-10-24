import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { changeActiveEmpBtn } from '../../redux/actionCreators/employerAC';
import style from './EmployersNav.module.css';

const EmployerNav = () => {
  const { activeTab } = useSelector(state => state.employers);
  const { user } = useSelector(state => state.profile);
  const dispatch = useDispatch();

  const handleClick = e => {
    dispatch(changeActiveEmpBtn(e.target.name));
  };

  return (
    <>
      <Row justify="center" style={{ marginBottom: 40, marginTop: 10 }}>
        {user.status === 'Гость' ? (
          <Col> </Col>
        ) : (
          <Col>
            <Link
              to={'/employers'}
              name="all-employers"
              onClick={handleClick}
              className={
                activeTab === 'all-employers' ? style.active : style.navElement
              }
            >
              Все работодатели
            </Link>
            <Link
              to={'/add-employer'}
              name="add-employer"
              onClick={handleClick}
              className={
                activeTab === 'add-employer' ? style.active : style.navElement
              }
            >
              Добавить работодателя
            </Link>
          </Col>
        )}
      </Row>
    </>
  );
};

export default EmployerNav;
