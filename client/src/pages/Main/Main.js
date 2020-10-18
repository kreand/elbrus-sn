import { Col, Row } from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../../redux/actionCreators/authAC'
import { clearUserAC } from '../../redux/actionCreators/profileAC'
import {clearEmployersAC} from '../../redux/actionCreators/employerAC';

const Main = () => {
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(logout())
    dispatch(clearUserAC())
    dispatch(clearEmployersAC())
    localStorage.clear()
  }
  return (
    <Row justify='center'>
      <Col style={{ marginRight: '10px' }}>
        <Link  to='/employers'>Работодатели</Link><br/>
      </Col>
      <Col style={{ marginRight: '10px' }}>
        <Link  to='/events'>Эвенты</Link><br/>
      </Col>
      <Col style={{ marginRight: '10px' }}>
        <Link  to='/auth'>Авторизация</Link><br/>
      </Col>
      <Col style={{ marginRight: '10px' }}>
        <Link  to='/ratings'>Рейтинг студентов</Link><br/>
      </Col>
      <Col style={{ marginRight: '10px' }}>
        <Link  to='/profile'>Профиль</Link><br/>
      </Col>
      <Col style={{ marginRight: '10px' }}>
        <Link onClick={logoutHandler} to='/auth'>Logout</Link><br/>
      </Col>
    </Row>
  )
}

export default Main
