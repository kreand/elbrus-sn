import React from 'react';
import Search from 'antd/es/input/Search';
import {Col, Row} from 'antd';

const AllEmployers = () => {
  return (
    <>
      <Row justify='center'>
        <Col span={12} offset={0}>
          <Search placeholder='Найти работодателя' onSearch={value => console.log(value)} enterButton />
        </Col>
      </Row>
    </>
  );
};

export default AllEmployers;
