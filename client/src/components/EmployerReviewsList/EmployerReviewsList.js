import React from 'react';
import { Col, Row, List, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import RateComponent from '../Rate/RateComponent';
import style from './EmployerReviewsList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteOutlined } from '@ant-design/icons';
import { deleteReview } from '../../redux/actionCreators/employerAC';

const EmployerReviewsList = ({ allReviews, employerId }) => {
  const { user } = useSelector(state => state.profile);
  const { allUsers } = useSelector(state => state.rating);
  const dispatch = useDispatch();

  const dateToString = date => {
    function addZero(num) {
      if (num < 10) {
        return `0${num}`;
      }
      return num;
    }
    return `${addZero(date.getDate())}.${addZero(
      date.getMonth() + 1,
    )}.${date.getFullYear()}  ${addZero(date.getHours())}:${addZero(
      date.getMinutes(),
    )}`;
  };

  const getCurrentUser = id => {
    return allUsers.find(user => user._id === id);
  };

  return (
    <List
      split={false}
      itemLayout="horizontal"
      dataSource={allReviews}
      renderItem={review => (
        <List.Item className={style.listItem}>
          <List.Item.Meta
            avatar={<Avatar src={getCurrentUser(review.userId).photo} />}
            title={
              <Link to={`/student/${review.userId}`}>
                {getCurrentUser(review.userId).name}
              </Link>
            }
            description={
              <>
                <div className={style.date}>{dateToString(review.date)}</div>
                <RateComponent
                  rate={review.rating}
                  justify="left"
                  disabled={true}
                  key={review._id}
                />
                <p className={style.review}>{review.review}</p>
                <Row>
                  <Col span={4} offset={20}>
                    {user._id === review.userId || user.status === 'Ментор' ? (
                      <Link
                        className={style.review}
                        to="#"
                        onClick={() => {
                          dispatch(
                            deleteReview({ reviewId: review._id, employerId }),
                          );
                        }}
                      >
                        <DeleteOutlined />
                        {' Удалить отзыв'}
                      </Link>
                    ) : null}
                  </Col>
                </Row>
              </>
            }
          />
        </List.Item>
      )}
    />
  );
};

export default EmployerReviewsList;
