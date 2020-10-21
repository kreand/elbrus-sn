import { Alert, Col, Row } from 'antd';
import React from 'react';
import style from './AlertComponent.module.css';

const AlertComponent = ({ title, text, type, justify, span, onClose }) => {
  return (
    <Row justify={justify || 'center'} className={style.alert}>
      <Col span={span || 12}>
        <Alert message={title} description={text} type={type} closable />
      </Col>
    </Row>
  );
};

export default AlertComponent;
