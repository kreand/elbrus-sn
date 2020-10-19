import React from 'react';
import {Col, Rate, Row} from 'antd';
import style from './RateComponent.module.css';

const RateComponent = ({justify, title, changeRating, rate, disabled}) => {

  return (
    <Row justify={justify || 'center'}>
      <Col className={style.text}>
        {title && <p style={{marginTop: 8, marginRight: 10}}>{title}</p>}
      </Col>
      <Col>
        <Rate
          className={style.rate}
          allowHalf
          disabled={disabled || false}
          defaultValue={rate ? parseFloat(rate) : 0}
          onChange={changeRating && (value => changeRating(value))}
        />
      </Col>
    </Row>
  );
};

export default RateComponent;
