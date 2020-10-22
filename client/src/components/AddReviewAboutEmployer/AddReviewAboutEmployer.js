import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, useHistory } from 'react-router-dom';
import { Row, Col, message } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons';
import RateComponent from '../Rate/RateComponent';
import TextareaComponent from '../Textarea/TextareaComponent';
import ButtonComponent from '../Button/ButtonComponent';
import {
  addReviewAC,
  changeActiveEmpBtn,
  changeState,
} from '../../redux/actionCreators/employerAC';
import style from './AddReviewAboutEmployer.module.css';
import { hideErrorAC } from '../../redux/actionCreators/appAC';

const AddReviewAboutEmployer = () => {
  const { id } = useParams();
  const [rating, changeRating] = useState(0);
  const employer = useSelector(state => state.employers.allEmployers).find(
    emp => emp._id === id,
  );
  const { user } = useSelector(state => state.profile);
  const { change } = useSelector(state => state.employers);
  const errors = useSelector(state => state.app.errors);
  const dispatch = useDispatch();
  const history = useHistory();

  const addNewReview = e => {
    e.preventDefault();
    const {
      review: { value: review },
    } = e.target;
    const userName = user.name;
    const userId = user._id;
    const employerId = id;
    const date = new Date();
    dispatch(
      addReviewAC({
        employerId,
        review,
        userName,
        userId,
        rating,
        date,
      }),
    );
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
      history.push(`/employer/${id}`);
      dispatch(changeState(false));
    } else if (errors.errorMessage) {
      info();
    }
  }, [id, errors, info, history, dispatch, change]);

  return (
    <>
      <Row justify="center">
        <Col span={20} offset={0}>
          <Link className={style.text} to={`/employer/${id}`}>
            <div>
              <ArrowLeftOutlined />
              {' Вернуться к профилю'}
            </div>
          </Link>
          <form onSubmit={addNewReview}>
            <br />
            <h3
              className={style.text}
            >{`Написать отзыв об организации "${employer.name}"`}</h3>
            <RateComponent
              title="Оценка работодателя: "
              changeRating={changeRating}
            />
            <TextareaComponent
              span={24}
              name="review"
              placeholder="Твоё мнение о данной организации"
              minRows={2}
            />
            <ButtonComponent span={24} title="Добавить" />
          </form>
        </Col>
      </Row>
    </>
  );
};

export default AddReviewAboutEmployer;
