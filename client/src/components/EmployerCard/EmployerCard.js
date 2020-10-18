import React from 'react';
import {Card} from 'antd';
import RateComponent from '../Rate/RateComponent';
import style from './EmployerCard.module.css'
import {Link} from 'react-router-dom';

const EmployerCard = ({employer}) => {
  const {rating} = employer
  return (
    <>
      <Card
        className={style.card}
        type="inner"
        title={employer.name}
        extra={<Link to={`/employer/${employer._id}`}>Подробнее</Link>}>
        <RateComponent
          span={0}
          rate={+rating}
          disabled={true}
          title='Рейтинг работодателя:'
          justify='left'/>
      </Card>
    </>
  );
};

export default EmployerCard;
