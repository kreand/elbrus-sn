import React from 'react';
import { List, Avatar } from 'antd';
import {Link} from 'react-router-dom';
import RateComponent from '../Rate/RateComponent';
import style from './EmployerReviewsList.module.css';
import ButtonComponent from '../Button/ButtonComponent';
import {useSelector} from 'react-redux';

const EmployerReviewsList = ({allReviews}) => {
  const {user} = useSelector(state => state.profile);

  const delReview = (e) => {
    console.log(e.target.parentElement.name);
  };

  return (
    <List
      split={false}
      itemLayout="horizontal"
      dataSource={allReviews}
      renderItem={review => (
        <List.Item className={style.listItem}>
          <List.Item.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={<Link to={`/student/${review.userId}`}>{review.userName}</Link>}
            description={<>
              <RateComponent rate={review.rating} justify='left' disabled={true}/>
              <p className={style.review}>{review.review}</p>
              <div className={style.date}>
                {`Дата отзыва: ${new Date(review.date).getDate()}-${new Date(review.date).getMonth()}-${new Date(review.date).getFullYear()}`}
              </div>
              {user._id === review.userId ? <ButtonComponent
                name={review._id}
                title='Удалить отзыв'
                onClick={delReview}
              /> : null}
            </>}
          />
        </List.Item>
      )}
    />
  );
};

export default EmployerReviewsList;
