import React from 'react'
import { Button } from 'antd'
import style from './ButtonComponent.module.css'

const ButtonComponent = ({title, color}) => {
  return (
    <>
      <Button className={style[color]} type="primary">{title}</Button>
    </>
  )
}

export default ButtonComponent
