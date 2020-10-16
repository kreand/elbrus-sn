import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Menu, Col, Row} from 'antd';

const EmployerNav = () => {
  const [active, setActive] = useState({current: 'all-employers'})

  const handleClick = e => {
    setActive({ current: e.key });
  };

  return (
    <Row justify='center' style={{marginBottom: '20px'}}>
      <Col>
        <Menu onClick={handleClick} selectedKeys={[active.current]} mode="horizontal">
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
