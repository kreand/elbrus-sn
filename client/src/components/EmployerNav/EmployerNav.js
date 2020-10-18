import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Menu, Col, Row} from 'antd';
import {useDispatch, useSelector} from 'react-redux';
import {changeActiveEmpBtn} from '../../redux/actionCreators/employerAC';

const EmployerNav = () => {
  const {activeTab} = useSelector(state => state.employers);
  const dispatch = useDispatch();
  const handleClick = e => {
    dispatch(changeActiveEmpBtn(e.key))
  };

  return (
    <Row justify='center' style={{marginBottom: '20px'}}>
      <Col>
        <Menu onClick={handleClick} selectedKeys={[activeTab]} mode="horizontal">
          <Menu.Item key="all-employers">
            <Link to={'/employers'}>
              Все работодатели
            </Link>
          </Menu.Item>
          <Menu.Item key="add-employer">
            <Link to={'/add-employer'}>
              Добавить работодателя
            </Link>
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
};

export default EmployerNav;
