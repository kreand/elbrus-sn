import React from 'react';
import ButtonComponent from '../../components/Button/ButtonComponent';
import InputComponent from '../../components/Input/InputComponent';

const ShopPage = () => {
  const addItemShopHandler = async (e) => {
    e.preventDefault();
    const { title, link, quantity, price } = e.target;
    const response = await fetch('/shop/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title.value,
        link: link.value,
        quantity: quantity.value,
        price: price.value,
      })
    });
    const res = await response.json();
    console.log(res);
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
