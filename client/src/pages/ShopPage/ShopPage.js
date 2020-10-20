import { message } from 'antd';
import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonComponent from '../../components/Button/ButtonComponent';
import CardComponent from '../../components/Card/CardComponent';
import InputComponent from '../../components/Input/InputComponent';
import { addDefaultShopItem, deleteItemShopAC, getDefaultAllShopItemsAC } from '../../redux/actionCreators/shpoAC';

const ShopPage = () => {
  const errors = useSelector(state => state.app.errors);
  const loader = useSelector(state => state.app.isLoading);
  const shopItems = useSelector(state => state.shop);
  const dispatch = useDispatch();
  const addItemShopHandler = async (e) => {
    e.preventDefault();
    const { title, link, quantity, price } = e.target;
    dispatch(addDefaultShopItem({
      title: title.value,
      link: link.value,
      quantity: +quantity.value,
      price: +price.value
    }));
  };

  const info = useCallback(() => {
    message.error(errors.errorMessage, 1.5);
  }, [errors.errorMessage]);

  useEffect(() => {
    if (errors.errorMessage)
      info();
  }, [errors, info]);

  useEffect(() => {
    dispatch(getDefaultAllShopItemsAC());
  }, [dispatch]);

  const deleteItemHandler = (e) => {
    console.log(e.target.value);
    // dispatch(deleteItemShopAC());
  };

  const buyCallback = () => {

  };

  return (
    <>
      <form onSubmit={addItemShopHandler}>
        <h2 style={{ textAlign: 'center', color: 'var(--purple_color)' }}>Добавить новый товар</h2>
        <InputComponent name='title' placeholder='Введите название товара' span={12}/>
        <InputComponent name='link' placeholder='Ссылка на фото товара' span={12}/>
        <InputComponent name='quantity' placeholder='Количество имющегося товара' span={12}/>
        <InputComponent name='price' placeholder='Цена товара' span={6}/>
        {
          loader
            ? <ButtonComponent title='Добавить' loading={true}/>
            : <ButtonComponent title='Добавить'/>
        }
      </form>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {
          shopItems.map(item => <CardComponent
            key={item._id}
            title={item.title}
            cover={item.link}
            deleteCallback={deleteItemHandler}
            buyCallback={buyCallback}
          />)
        }
      </div>
    </>
  );
};

export default ShopPage;
