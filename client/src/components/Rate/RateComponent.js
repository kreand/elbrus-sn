import React from 'react';
import {Col, Rate, Row} from 'antd';
import style from './RateComponent.module.css'

const RateComponent = ({justify, title, changeRating, rate, disabled}) => {

  return (
    <Row justify={justify || 'center'}>
      <Col>
        <p style={{marginTop: 8}}>{title}</p>
      </Col>
      <Col>
        <Rate
          className={style.rate}
          allowHalf
          disabled={disabled}
          defaultValue={rate || 0}
          onChange={value => changeRating(value)}
        />
      </Col>
    </Row>
  );
};

export default RateComponent;
