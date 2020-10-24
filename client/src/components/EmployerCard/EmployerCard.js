import React from 'react';
import { Card } from 'antd';
import RateComponent from '../Rate/RateComponent';
import style from './EmployerCard.module.css';
import { Link } from 'react-router-dom';
import { DeleteOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteEmployer } from '../../redux/actionCreators/employerAC';

const EmployerCard = ({ employer }) => {
  const { rating, allReviews } = employer;
  const { user } = useSelector(state => state.profile);
  const dispatch = useDispatch();

  const deleteThisEmployer = () => {
    dispatch(deleteEmployer(employer._id));
  };

  return (
    <>
      <Card
        className={style.card}
        type="inner"
        title={employer.name}
        extra={
          user.status === 'Гость' ? null : (
            <Link className={style.link} to={`/employer/${employer._id}`}>
              Подробнее
            </Link>
          )
        }
      >
        <RateComponent
          rate={rating}
          disabled={true}
          title="Рейтинг работодателя:"
          justify="left"
        />
        <div className={style.bottomOfCard}>
          <span
            className={style.countReviews}
          >{`Количество отзывов: ${allReviews.length}`}</span>
          {user.status === 'Ментор' ? (
            <Link to="#" onClick={deleteThisEmployer}>
              <DeleteOutlined />
              {' Удалить работодателя'}
            </Link>
          ) : null}
        </div>
      </Card>
    </>
  );
};

export default EmployerCard;
