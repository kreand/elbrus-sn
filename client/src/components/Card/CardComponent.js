import { Col, Row, Card, Avatar } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import Meta from 'antd/es/card/Meta';
import React from 'react';

const CardComponent = ({ title, description, justify, width, margin, avatar, cover }) => {
  return (
    <Row justify={justify || 'center'}>
      <Col>
        <Card
          hoverable
          style={{ width: `${width || '300px'}`, margin: `${margin || '10px'}` }}
          cover={<img alt="your_img" src={cover || 'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'}/>}
          actions={[
            <PlusCircleOutlined />
          ]}
        >
          <Meta avatar={<Avatar src={avatar || 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'}/>}
                title={title || 'title'}
                description={description || 'description'}/>
        </Card>
      </Col>
    </Row>
  );
};

export default CardComponent;
