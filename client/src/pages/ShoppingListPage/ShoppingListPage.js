import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Avatar, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { deleteOrder } from '../../redux/actionCreators/orderAC';
import style from './ShoppingListPage.module.css';

const ShoppingListPage = () => {
  const { shoppingList } = useSelector(state => state.order);
  const dispatch = useDispatch();

  return (
    <Row justify={'center'} style={{ marginTop: 20 }}>
      <Col span={20} className={style.item}>
        <h2 style={{ color: 'var(--purple_color)' }}>
          Список заказанных товаров
        </h2>
        <List
          itemLayout="horizontal"
          dataSource={shoppingList}
          renderItem={order => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src={order.product.link} />}
                title={<Link to="#">{order.buyer.name}</Link>}
                description={`Купил ${order.product.title}`}
              />
              <div>
                <Link
                  key={order._id}
                  to="#"
                  onClick={() => {
                    dispatch(deleteOrder(order._id));
                  }}
                >
                  Выполнить
                </Link>
              </div>
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
};

export default ShoppingListPage;
