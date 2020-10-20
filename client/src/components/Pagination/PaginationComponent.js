import React from 'react';
import {Pagination, Col, Row} from 'antd';
import style from './PaginationComponent.module.css';

const PaginationComponent = ({page, totalPages, justify, onChange, defaultPageSize = 10}) => {
  return (
    <Row justify={justify || 'center'} className={style.pagination}>
      <Col>
        {totalPages > defaultPageSize &&
        <Pagination
          defaultCurrent={page || 1}
          onChange={onChange ? onChange : () => {}}
          total={totalPages}
          defaultPageSize={defaultPageSize}
        />}
      </Col>
    </Row>
  );
};

export default PaginationComponent;
