import React from 'react';
import {Pagination, Col, Row} from 'antd';
import style from './PaginationComponent.module.css';

const PaginationComponent = ({page, totalPages, justify, onChange}) => {
  return (
    <Row justify={justify || 'center'} className={style.pagination}>
      <Col>
        {totalPages > 10 && <Pagination defaultCurrent={page || 1} onChange={onChange ? onChange : () => {
        }} total={totalPages}/>}
      </Col>
    </Row>
  );
};

export default PaginationComponent;
