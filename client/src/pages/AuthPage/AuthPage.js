import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { message } from 'antd';

import ButtonComponent from '../../components/Button/ButtonComponent';
import InputComponent from '../../components/Input/InputComponent';
import { hideErrorAC } from '../../redux/actionCreators/appAC';
import {
  getDefaultUserAC,
  registrationDefaultUserAC,
} from '../../redux/actionCreators/profileAC';
import style from './AuthPage.module.css';

const AuthPage = () => {
  const [registration, setRegistration] = useState(false);
  const dispatch = useDispatch();
  const errors = useSelector(state => state.app.errors);
  const loading = useSelector(state => state.app.isLoading);

  const authHandler = e => {
    e.preventDefault();
    const { email, password } = e.target;
    const user = {
      email: email.value,
      password: password.value,
    };
    dispatch(getDefaultUserAC(user));
  };

  const registrationHandler = e => {
    e.preventDefault();
    const { name, email, password } = e.target;
    const user = {
      name: name.value,
      email: email.value,
      password: password.value,
    };
    dispatch(registrationDefaultUserAC(user));
  };

  const changeRegistrationHandler = () => {
    setRegistration(!registration);
  };

  if (errors.isError) {
    setTimeout(() => {
      dispatch(hideErrorAC());
    }, 1500);
  }

  const info = useCallback(() => {
    message.error(errors.errorMessage, 1.5);
  }, [errors.errorMessage]);

  useEffect(() => {
    if (errors.errorMessage) info();
  }, [errors, info]);

  if (registration) {
    return (
      <div className={style.container}>
        <h1 className={style.title}>Регистрация</h1>
        <form onSubmit={registrationHandler}>
          <InputComponent
            name="name"
            type="text"
            placeholder="Ваше имя"
            span={6}
            size="large"
          />
          <InputComponent
            name="email"
            type="email"
            placeholder="Ваш email"
            span={6}
            size="large"
          />
          <div style={{ marginBottom: '20px' }}>
            <InputComponent
              name="password"
              type="password"
              placeholder="Ваш пароль"
              span={6}
              size="large"
            />
          </div>
          {loading ? (
            <ButtonComponent
              title="Зарегистрироваться"
              size="large"
              loading={true}
            />
          ) : (
            <ButtonComponent title="Зарегистрироваться" size="large" />
          )}
        </form>
        <div style={{ marginTop: '25px', textAlign: 'center' }}>
          <span
            style={{
              fontSize: '16px',
              color: 'var(--purple_color)',
              cursor: 'pointer',
            }}
            onClick={changeRegistrationHandler}
          >
            Авторизация
          </span>
        </div>
      </div>
    );
  }
  return (
    <div className={style.container}>
      <form onSubmit={authHandler}>
        <h1 className={style.title}>Авторизация</h1>
        <InputComponent
          name="email"
          type="email"
          placeholder="Ваш email"
          span={6}
          size="large"
        />
        <div style={{ marginBottom: '20px' }}>
          <InputComponent
            name="password"
            type="password"
            placeholder="Ваш пароль"
            span={6}
            size="large"
          />
        </div>
        {loading ? (
          <ButtonComponent
            name="password"
            title="Авторизоваться"
            size="large"
            loading={true}
          />
        ) : (
          <ButtonComponent
            name="password"
            title="Авторизоваться"
            size="large"
          />
        )}
      </form>
      <div style={{ marginTop: '25px', textAlign: 'center' }}>
        <span
          style={{
            fontSize: '16px',
            color: 'var(--purple_color)',
            cursor: 'pointer',
          }}
          onClick={changeRegistrationHandler}
        >
          Регистрация
        </span>
      </div>
    </div>
  );
};

export default AuthPage;
