import React, {useState} from 'react'
import ButtonComponent from '../Button/ButtonComponent'
import { Modal } from 'antd'

const ModalComponent = ({title}) => {

  const [ state, setState ] = useState({ visible: false });

  const showModal = () => {
    setState({
      visible: true,
    });
  };
  
  const handleOk = e => {
    console.log(e);
    setState({
      visible: false,
    });
  };

  const handleCancel = e => {
    console.log(e);
    setState({
      visible: false,
    });
  };

  return (
    <>
        <ButtonComponent title={title} ooooo={showModal}/>
        <Modal
          title="Basic Modal"
          visible={state.visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
  )
}

export default ModalComponent
