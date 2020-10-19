import React from 'react';
import {Card} from 'antd';
import RateComponent from '../Rate/RateComponent';
import style from './EmployerCard.module.css';
import {Link} from 'react-router-dom';

const EmployerCard = ({employer}) => {
  const {rating, allReviews} = employer;
  return (
    <>
      <Card
        className={style.card}
        type="inner"
        title={employer.name}
        extra={<Link className={style.link} to={`/employer/${employer._id}`}>Подробнее</Link>}>
        <RateComponent
          rate={rating}
          disabled={true}
          title='Рейтинг работодателя:'
          justify='left'
        />
        <span className={style.countReviews}>{`Количество отзывов: ${allReviews.length}`}</span>
      </Card>
    </>
  );
};

export default EmployerCard;
