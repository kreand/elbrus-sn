import { Col, Row, Card } from 'antd';
import { DollarOutlined, CloseOutlined } from '@ant-design/icons';
import Meta from 'antd/es/card/Meta';
import React from 'react';
import { useSelector } from 'react-redux';

const CardComponent = ({
  id,
  title,
  justify,
  width,
  margin,
  cover,
  buyCallback,
  deleteCallback,
  description,
}) => {
  const { user } = useSelector(state => state.profile);
  return (
    <Row justify={justify || 'center'}>
      <Col>
        <Card
          hoverable
          style={{
            width: `${width || '300px'}`,
            margin: `${margin || '10px'}`,
          }}
          cover={
            <img
              alt="your_img"
              src={
                cover ||
                'https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png'
              }
            />
          }
          actions={
            user.status === 'Ментор'
              ? [
                  <CloseOutlined
                    value={id || null}
                    onClick={deleteCallback || null}
                    style={{ color: 'var(--red_color)' }}
                  />,
                ]
              : user.status !== 'Гость'
              ? [
                  <DollarOutlined
                    value={id || null}
                    onClick={buyCallback || null}
                    style={{ color: 'green', fontSize: 22 }}
                  />,
                ]
              : null
          }
        >
          <Meta title={title || 'title'} description={description} />
        </Card>
      </Col>
    </Row>
  );
};

export default CardComponent;
