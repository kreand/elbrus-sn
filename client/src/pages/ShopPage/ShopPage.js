import { message } from 'antd';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ButtonComponent from '../../components/Button/ButtonComponent';
import CardComponent from '../../components/Card/CardComponent';
import InputComponent from '../../components/Input/InputComponent';
import {
  addDefaultShopItem,
  getDefaultAllShopItemsAC,
} from '../../redux/actionCreators/shpoAC';

const ShopPage = () => {
  const [link, setLink] = useState('');
  const errors = useSelector(state => state.app.errors);
  const loader = useSelector(state => state.app.isLoading);
  const shopItems = useSelector(state => state.shop);
  const dispatch = useDispatch();

  const uploadFiles = async e => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'shopGoods');
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/elbrus-coding-bootcamp/image/upload',
      {
        method: 'POST',
        body: data,
      },
    );
    const file = await res.json();
    const imgUrl = file.secure_url;
    setLink(imgUrl);
  };

  const addItemShopHandler = async e => {
    e.preventDefault();
    let { title, quantity, price } = e.target;
    dispatch(
      addDefaultShopItem({
        title: title.value,
        link,
        quantity: +quantity.value,
        price: +price.value,
      }),
    );
  };

  const info = useCallback(() => {
    message.error(errors.errorMessage, 1.5);
  }, [errors.errorMessage]);

  useEffect(() => {
    if (errors.errorMessage) info();
  }, [errors, info]);

  useEffect(() => {
    dispatch(getDefaultAllShopItemsAC());
  }, [dispatch]);

  return (
    <>
      <form onSubmit={addItemShopHandler}>
        <h2 style={{ textAlign: 'center', color: 'var(--purple_color)' }}>
          Добавить новый товар
        </h2>
        <InputComponent
          name="title"
          placeholder="Введите название товара"
          span={12}
        />
        <InputComponent
          onChange={uploadFiles}
          type="file"
          name="file"
          placeholder="Ссылка на фото товара"
          span={12}
        />
        <InputComponent
          name="quantity"
          placeholder="Количество имющегося товара"
          span={12}
        />
        <InputComponent name="price" placeholder="Цена товара" span={6} />
        {loader ? (
          <ButtonComponent title="Добавить" loading={true} />
        ) : (
          <ButtonComponent title="Добавить" />
        )}
      </form>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {shopItems.map(item => (
          <CardComponent
            key={item._id}
            id={item._id}
            title={item.title}
            value={item._id}
            cover={item.link}
            description={`Цена:${item.price} Количество: ${item.quantity}`}
          />
        ))}
      </div>
    </>
  );
};

export default ShopPage;
