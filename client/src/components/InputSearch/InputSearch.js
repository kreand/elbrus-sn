import React from 'react';
import {Col, Row} from 'antd';
import Search from 'antd/es/input/Search';
import style from './InputSearch.module.css'

const InputSearch = ({span, offset, placeholder}) => {
  return (
    <Row justify='center'>
      <Col span={span || 12} offset={offset || 0}>
        <Search className={style.input} placeholder={placeholder} onSearch={value => console.log(value)} />
      </Col>
    </Row>
  );
};

export default InputSearch;
