import {Row, Col, message} from 'antd';
import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import ButtonComponent from '../../components/Button/ButtonComponent';
import CardComponent from '../../components/Card/CardComponent';
import InputComponent from '../../components/Input/InputComponent';
import {
  addDefaultShopItem,
  getDefaultAllShopItemsAC,
} from '../../redux/actionCreators/shpoAC';
import style from './ShopPage.module.css';
import {DownloadOutlined} from '@ant-design/icons';

const ShopPage = () => {
  const [link, setLink] = useState('');
  const errors = useSelector(state => state.app.errors);
  const loader = useSelector(state => state.app.isLoading);
  const shopItems = useSelector(state => state.shop);
  const [fileInput, setFileInput] = useState('Файл не выбран');
  const dispatch = useDispatch();

  const uploadFiles = async e => {
    const {files} = e.target;
    const fileName = files[0].name;
    setFileInput(fileName.length > 30 ? `${fileName.slice(0, 30)}...` : fileName);
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
    let {title, quantity, price} = e.target;
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
      <Row justify='center'>
        <Col span={12}>
          <form onSubmit={addItemShopHandler}>
            <h2 style={{textAlign: 'center', color: 'var(--purple_color)'}}>
              Добавить новый товар
            </h2>
            <InputComponent
              name="title"
              placeholder="Введите название товара"
            />
            <div className={style.label}>
              <label htmlFor='file' className={style.inputFile}>
                {'Выберите фото товара '}{<DownloadOutlined/>}
              </label>
              <div className={style.fileinfo}>{fileInput}</div>
            </div>
            <input
              style={{display: 'none'}}
              onChange={uploadFiles}
              type="file"
              name="file"
              id="file"
            />
            <InputComponent
              name="quantity"
              placeholder="Количество имеющегося товара"
            />
            <InputComponent name="price" placeholder="Цена товара" span={6}/>
            {loader ? (
              <ButtonComponent title="Добавить" loading={true}/>
            ) : (
              <ButtonComponent title="Добавить"/>
            )}
          </form>
        </Col>
      </Row>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>
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
