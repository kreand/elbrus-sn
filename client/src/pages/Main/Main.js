import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <>
      <Link to='/events'>Эвенты</Link><br/>
      <Link to='/employers'>Работодатели</Link><br/>
      <Link to='/auth'>Авторизация</Link><br/>
      <Link to='/ratings'>Рейтинг всех студентов</Link><br/>
      <Link to='/profile'>Профиль</Link><br/>
      <Link to='/student'>Рейтинг одного студента</Link><br/>
    </>
  )
}

export default Main
