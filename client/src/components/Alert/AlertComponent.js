import { Alert, Col, Row } from 'antd'
import React from 'react'
import style from './AlertComponent.module.css'

const AlertComponent = ({ text, type, justify, span }) => {
  return (
    <Row justify={justify || 'center'} className={style.alert}>
      <Col span={span || 12}>
        <Alert message={text} type={type}/>
      </Col>
    </Row>
  )
}

export default AlertComponent
