import React from 'react';
import { List, Avatar } from 'antd';
import {Link} from 'react-router-dom';
import RateComponent from '../Rate/RateComponent';
import style from './EmployerReviewsList.module.css';

const EmployerReviewsList = ({allReviews}) => {

  return (
    <List
      split={false}
      itemLayout="horizontal"
      dataSource={allReviews}
      renderItem={review => (
        <List.Item className={style.listItem}>
          <List.Item.Meta
            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
            title={<Link to='#'>{review.userName}</Link>}
            description={<>
              <RateComponent rate={review.rating} justify='left' disabled={true}/>
              {review.review}
            </>}
          />
        </List.Item>
      )}
    />
  );
};

export default EmployerReviewsList;
