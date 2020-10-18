import React from 'react';
import { Button, Col, Row } from 'antd';
import style from './ButtonComponent.module.css';

const ButtonComponent = ({ onClick, title, color, justify, loading, size, type }) => {
  return (
    <Row justify={justify || 'center'}>
      <Col>
        <Button onClick={onClick ? () => onClick() : null}
                htmlType={type || 'submit'}
                size={size || 'middle'}
                loading={loading}
                className={style[color] || style.button}
                type="primary">{title}
        </Button>
      </Col>
    </Row>
  );
};

export default ButtonComponent;
