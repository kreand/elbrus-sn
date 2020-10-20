import { Col, Row, Card, Avatar } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import Meta from 'antd/es/card/Meta';
import React from 'react';

const CardComponent = ({ title, justify, width, margin, avatar, cover, buyCallback, deleteCallback }) => {
  return (
    <Row justify={justify || 'center'}>
      <Col>
        <Card
          hoverable
          style={{ width: `${width || '300px'}`, margin: `${margin || '10px'}` }}
          cover={<img alt="your_img" src={cover || 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'}/>}
          actions={[
            <CheckOutlined onClick={buyCallback || null} style={{color: 'var(--purple_color)'}}/>,
            <CloseOutlined onClick={deleteCallback || null} style={{color: 'var(--red_color)'}}/>
          ]}
        >
          <Meta avatar={<Avatar src={avatar || 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}/>}
                title={title || 'title'}/>
        </Card>
      </Col>
    </Row>
  );
};

export default CardComponent;
