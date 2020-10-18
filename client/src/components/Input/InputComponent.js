import React from 'react';
import { Col, Input, Row } from 'antd';

import style from './InputComponent.module.css';

const InputComponent = ({ name, type, placeholder, size, justify, offset, span, onChange }) => {
  return (
    <Row justify={justify || 'center'}>
      <Col span={span || 12} offset={offset || 0}>
        {
          type === 'password'
            ? <Input.Password name={name} className={style.input} placeholder={placeholder} size={size || 'middle'}/>
            : <Input
              name={name}
              className={style.input}
              type={type || 'text'}
              placeholder={placeholder}
              size={size || 'middle'}
              onChange={onChange || null}
            />
        }
      </Col>
    </Row>
  );
};

export default InputComponent;
