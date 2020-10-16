import {Col, Rate, Row} from 'antd';

import React from 'react';

const RateComponent = ({justify, title}) => {
  return (
    <Row justify={justify || 'center'}>
      <Col>
        <p style={{marginTop: 8}}>{title}</p>
      </Col>
      <Col>
        <Rate
          allowHalf
          defaultValue={0} />
      </Col>
    </Row>
  );
};

export default RateComponent;
