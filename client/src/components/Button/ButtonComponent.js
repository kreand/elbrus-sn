import React from 'react'
import { Button, Col, Row } from 'antd'
import style from './ButtonComponent.module.css'

const ButtonComponent = ({ title, color, justify, loading ,size}) => {
  return (
    <Row justify={justify || 'center'}>
      <Col>
        <Button size={size || 'middle'} loading={loading} className={style[color] || style.button} type="primary">{title}</Button>
      </Col>
    </Row>
  )
}

export default ButtonComponent
