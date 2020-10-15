import React from 'react'
import { Col, Input, Row } from 'antd'

import style from './InputComponent.module.css'

const InputComponent = ({ type, placeholder, size, justify, offset, span }) => {
  return (
    <Row justify={justify || 'center'}>
      <Col span={span || 12} offset={offset || 0}>
        {
          type === 'password'
            ? <Input.Password className={style.input} placeholder={placeholder} size={size || 'middle'}/>
            : <Input className={style.input} type={type || 'text'} placeholder={placeholder} size={size || 'middle'}/>
        }
      </Col>
    </Row>
  )
}

export default InputComponent
