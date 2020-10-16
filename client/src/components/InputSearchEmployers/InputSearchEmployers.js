import React from 'react';
import {Col, Row} from 'antd';
import Search from 'antd/es/input/Search';
import style from './InputSearchEmployers.module.css'

const InputSearchEmployers = ({span, offset, placeholder}) => {
  return (
    <Row justify='center'>
      <Col span={span || 12} offset={offset || 0}>
        <Search className={style.input} placeholder={placeholder} onSearch={value => console.log(value)} />
      </Col>
    </Row>
  );
};

export default InputSearchEmployers;
