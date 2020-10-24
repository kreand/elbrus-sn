import React, { useCallback, useEffect, useState } from 'react';
import InputComponent from '../Input/InputComponent';
import ButtonComponent from '../Button/ButtonComponent';
import RateComponent from '../Rate/RateComponent';
import TextareaComponent from '../Textarea/TextareaComponent';
import {
  changeActiveEmpBtn,
  changeState,
  createEmployer,
} from '../../redux/actionCreators/employerAC';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Row, Col, message } from 'antd';
import { hideErrorAC } from '../../redux/actionCreators/appAC';
import style from './AddEmployerForm.module.css';

const AddEmployerForm = () => {
  const [rating, changeRating] = useState(0);
  const { user } = useSelector(state => state.profile);
  const { change } = useSelector(state => state.employers);
  const errors = useSelector(state => state.app.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  const addNewEmployer = e => {
    e.preventDefault();
    const {
      review: { value: review },
      name: { value: name },
    } = e.target;
    const userName = user.name;
    const userId = user._id;
    dispatch(createEmployer({ name, review, rating, userName, userId }));
  };

  if (errors.isError) {
    setTimeout(() => {
      dispatch(hideErrorAC());
    }, 1500);
  }

  const info = useCallback(() => {
    message.error(errors.errorMessage, 1.5);
  }, [errors.errorMessage]);

  useEffect(() => {
    if (change) {
      dispatch(changeActiveEmpBtn('all-employers'));
      history.push('/employers');
      dispatch(changeState(false));
    } else if (errors.errorMessage) {
      info();
    }
  }, [errors, info, history, dispatch, change]);

  return (
    <Row justify="center">
      <Col span={20}>
        <form onSubmit={addNewEmployer}>
          <InputComponent name="name" placeholder="Наименование организации" />
          <RateComponent
            title="Оценка работодателя: "
            changeRating={changeRating}
          />
          <TextareaComponent
            name="review"
            placeholder="Твоё мнение о данной организации"
            minRows={2}
          />
          <div className={style.btn}>
            <ButtonComponent title="Добавить" />
          </div>
        </form>
      </Col>
    </Row>
  );
};

export default AddEmployerForm;
