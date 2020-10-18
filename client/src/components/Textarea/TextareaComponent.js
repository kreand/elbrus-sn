import React from 'react';
import {Col, Row} from 'antd';
import TextArea from 'antd/es/input/TextArea';
import style from './TextAreaComponent.module.css';

const TextareaComponent = ({span, offset, minRows, placeholder, name, justify}) => {
  return (
    <Row justify={justify || 'center'}>
      <Col span={span || 12} offset={offset || 0}>
        <TextArea name={name} className={style.input} autoSize={{minRows}} placeholder={placeholder}/>
      </Col>
    </Row>
  );
};

export default TextareaComponent;
