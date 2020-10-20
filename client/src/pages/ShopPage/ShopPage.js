import React from 'react';
import { useDispatch } from 'react-redux';
import ButtonComponent from '../../components/Button/ButtonComponent';
import InputComponent from '../../components/Input/InputComponent';
import { addDefaultShopItem } from '../../redux/actionCreators/shpoAC';

const ShopPage = () => {
  const dispatch = useDispatch();
  const addItemShopHandler = async (e) => {
    e.preventDefault();
    const { title, link, quantity, price } = e.target;
    dispatch(addDefaultShopItem({
      title: title.value,
      link: link.value,
      quantity: quantity.value,
      price: price.value
    }));
  };

  return (
    <>
      <form onSubmit={addItemShopHandler}>
        <h2 style={{ textAlign: 'center' }}>Добавить новый товар</h2>
        <InputComponent name='title' placeholder='Введите название товара' span={12}/>
        <InputComponent name='link' placeholder='Ссылка на фото товара' span={12}/>
        <InputComponent name='quantity' placeholder='Количество имющегося товара' span={12}/>
        <InputComponent name='price' placeholder='Цена товара' span={6}/>
        <ButtonComponent title='Добавить'/>
      </form>
    </>
  );
};

export default ShopPage;
