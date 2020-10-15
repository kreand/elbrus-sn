import React from 'react'
import { Spin, Col, Row } from 'antd'

import style from './LoaderComponent.module.css'

const LoaderComponent = ({ justify, size }) => {
  return (
    <Row justify={justify || 'center'}>
      <Col>
        <Spin className={style.spinner} size={size || 'default'}/>
      </Col>
    </Row>
  )
}

export default LoaderComponent
