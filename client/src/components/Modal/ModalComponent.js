import React, { useState } from 'react'
import ButtonComponent from '../Button/ButtonComponent'
import InputComponent from '../Input/InputComponent'
import { Modal } from 'antd'
import style from './ModalComponent.module.css'

const ModalComponent = ({ btnOpenModalTitle = 'модальное окно', modalTitle = 'модальное окно' }) => {
  const [state, setState] = useState({ visible: false })

  const showModal = () => {
    setState({
      visible: true,
    });
  };

  const handleOk = (e) => {
    console.log(e)
    setState({
      visible: false,
    });
  };

  const handleCancel = (e) => {
    console.log(e)
    setState({
      visible: false,
    });
  };

  return (
    <>
      <ButtonComponent title={btnOpenModalTitle} onClick={showModal} />
        <Modal
          visible={state.visible}
          title={modalTitle}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={[
            <div className={style.modalFooter}>
              <ButtonComponent title={'назад'} key="back" onClick={handleCancel}/>
              <ButtonComponent title={'изменить'} key="submit" type="primary" onClick={handleOk}/>
            </div>
          ]}
        >
          <label>логин</label>
          <InputComponent />
          <label>email</label>
          <InputComponent />
        </Modal>
      </>
  )
}

export default ModalComponent
