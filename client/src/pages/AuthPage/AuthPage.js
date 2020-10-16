import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import ButtonComponent from '../../components/Button/ButtonComponent'
import AlertComponent from '../../components/Alert/AlertComponent'
import InputComponent from '../../components/Input/InputComponent'
import LoaderComponent from '../../components/Loader/LoaderComponent'
import { hideErrorAC } from '../../redux/actionCreators/appAC'
import { getDefaultUserAC, registrationDefaultUserAC } from '../../redux/actionCreators/profileAC'
import style from './AuthPage.module.css'

const AuthPage = () => {
  const [registration, setRegistration] = useState(false)
  const dispatch = useDispatch()
  const errors = useSelector(state => state.app.errors)

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

  const changeRegistrationHandler = () => {
    setRegistration(!registration)
  }

  if (errors.isError) {
    setTimeout(() => {
      dispatch(hideErrorAC())
    },5000)
  }

  if (registration) {
    return (
      <>
        <h1 className={style.title}>Регистрация</h1>
        {errors.isError ? <AlertComponent text={errors.errorMessage} type='error'/> : null}
        <form onSubmit={registrationHandler}>
          <InputComponent name='name' type='text' placeholder='Ваше имя' span={12} size='large'/>
          <InputComponent name='email' type='email' placeholder='Ваш email' span={12} size='large'/>
          <InputComponent name='password' type='password' placeholder='Ваш пароль' span={12} size='large'/>
          <ButtonComponent title='Зарегистрироваться' size='large'/>
        </form>
        <ButtonComponent onClick={changeRegistrationHandler} title='Авторизация' size='large'/>
      </>
    )
  }

  return (
    <>
      <form onSubmit={authHandler}>
        <h1 className={style.title}>Авторизация</h1>
        {errors.isError ? <AlertComponent text={errors.errorMessage} type='error'/> : null}
        <InputComponent name='email' type='email' placeholder='Ваш email' span={12} size='large'/>
        <InputComponent name='password' type='password' placeholder='Ваш пароль' span={12} size='large'/>
        <ButtonComponent name='password' title='Авторизоваться' size='large'/>
      </form>
      <ButtonComponent onClick={changeRegistrationHandler} title='Регистрация' size='large'/>
    </>
  )
}

export default AuthPage
