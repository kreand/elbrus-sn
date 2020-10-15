import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <>
      <Link to='/events'>Эвенты</Link><br/>
      <Link to='/employers'>Работодатели</Link><br/>
      <Link to='/auth'>Авторизация</Link><br/>
      <Link to='/ratings'>Рейтинг студентов</Link><br/>
      <Link to='/profile'>Профиль</Link><br/>
    </>
  )
}

export default Main
