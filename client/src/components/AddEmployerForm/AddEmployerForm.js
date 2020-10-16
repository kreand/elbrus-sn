import React from 'react';
import InputComponent from '../Input/InputComponent';
import ButtonComponent from '../Button/ButtonComponent';
import RateComponent from '../Rate/RateComponent';
import TextArea from 'antd/es/input/TextArea';
import {Row, Col} from 'antd';

const AddEmployerForm = () => {


  return (
    <form>
      <InputComponent placeholder='Наименование организации'/>
      <RateComponent title='Оценка работодателя: '/>
      <Row justify='center' style={{marginBottom: 20}}>
        <Col span={12} offset={0}>
          <TextArea autoSize={{minRows: 2}} placeholder='Твоё мнение о данной организации'/>
        </Col>
      </Row>
      <ButtonComponent title='Добавить'/>
    </form>
  );
};

export default AddEmployerForm;
