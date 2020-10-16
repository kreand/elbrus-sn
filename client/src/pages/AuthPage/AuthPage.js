import React from 'react'
import { useDispatch } from 'react-redux'

import ButtonComponent from '../../components/Button/ButtonComponent'
import InputComponent from '../../components/Input/InputComponent'
import { getDefaultUserAC, registrationDefaultUserAC } from '../../redux/actionCreators/profileAC'
import style from './AuthPage.module.css'

const AuthPage = () => {
  const dispatch = useDispatch()

  const authHandler = (e) => {
    e.preventDefault()
    const { email, password } = e.target
    const user = {
      email: email.value,
      password: password.value
    }
    dispatch(getDefaultUserAC(user))
  }

  const registrationHandler = (e) => {
    e.preventDefault()
    const { name, email, password } = e.target
    const user = {
      name: name.value,
      email: email.value,
      password: password.value
    }
    dispatch(registrationDefaultUserAC(user))
  }

  return (
    <>
      <form onSubmit={authHandler}>
        <h1 className={style.title}>Авторизация</h1>
        <InputComponent name='email' type='email' placeholder='Ваш email' span={12} size='large'/>
        <InputComponent name='password' type='password' placeholder='Ваш пароль' span={12} size='large'/>
        <ButtonComponent name='password' title='Авторизоваться' size='large'/>
      </form>
      <h1 className={style.title}>Регистрация</h1>
      <form onSubmit={registrationHandler}>
        <InputComponent name='name' type='text' placeholder='Ваше имя' span={12} size='large'/>
        <InputComponent name='email' type='email' placeholder='Ваш email' span={12} size='large'/>
        <InputComponent name='password' type='password' placeholder='Ваш пароль' span={12} size='large'/>
        <ButtonComponent title='Зарегистрироваться' size='large'/>
      </form>
    </>
  )
}

export default AuthPage
