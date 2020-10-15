import React from 'react'

import ButtonComponent from '../../components/Button/ButtonComponent'
import CardComponent from '../../components/Card/CardComponent'
import InputComponent from '../../components/Input/InputComponent'

const AuthPage = () => {
  return (
    <div>
      <h1>AuthPage</h1>
      <InputComponent placeholder='Ваше Имя'/>
      <InputComponent placeholder='Ваше Email'/>
      <InputComponent placeholder='Ваше Пароль' type='password'/>
      <ButtonComponent title='Name'/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
    </div>
  )
}

export default AuthPage
