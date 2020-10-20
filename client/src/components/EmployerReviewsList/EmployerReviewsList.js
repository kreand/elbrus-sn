import React from 'react';
import {List, Avatar} from 'antd';
import {Link} from 'react-router-dom';
import RateComponent from '../Rate/RateComponent';
import style from './EmployerReviewsList.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {DeleteOutlined} from '@ant-design/icons';
import {deleteReview} from '../../redux/actionCreators/employerAC';

const EmployerReviewsList = ({allReviews, employerId}) => {
  const {user} = useSelector(state => state.profile);
  const dispatch = useDispatch();


  return (
    <List
      split={false}
      itemLayout="horizontal"
      dataSource={allReviews}
      renderItem={review => (
        <List.Item className={style.listItem}>
          <List.Item.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
            title={<Link to={`/student/${review.userId}`}>{review.userName}</Link>}
            description={<>
              <RateComponent rate={review.rating} justify='left' disabled={true}/>
              <p className={style.review}>{review.review}</p>
              <div className={style.date}>
                {`Дата отзыва: ${new Date(review.date).getDate()}-${new Date(review.date).getMonth()}-${new Date(review.date).getFullYear()}`}
              </div>
              {user._id === review.userId ?
                <Link
                  to='#'
                  onClick={() => {
                    dispatch(deleteReview({reviewId: review._id, employerId}));
                  }}>
                  <DeleteOutlined/>{' Удалить отзыв'}</Link>
                : null}
            </>}
          />
        </List.Item>
      )}
    />
  );
};

export default EmployerReviewsList;
