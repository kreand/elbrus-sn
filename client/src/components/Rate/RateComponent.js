import {Col, Rate, Row} from 'antd';

import React from 'react';

const RateComponent = ({justify, title, name, changeRating}) => {

  return (
    <Row justify={justify || 'center'}>
      <Col>
        <p style={{marginTop: 8}}>{title}</p>
      </Col>
      <Col>
        <Rate
          name={name}
          allowHalf
          defaultValue={0}
          onChange={value => changeRating(value)}
        />
      </Col>
    </Row>
  );
};

export default RateComponent;
