import React from 'react';
import {Link, useParams, useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {Row, Col} from 'antd';
import {ArrowLeftOutlined} from '@ant-design/icons';
import ButtonComponent from '../Button/ButtonComponent';
import RateComponent from '../Rate/RateComponent';
import EmployerReviewsList from '../EmployerReviewsList/EmployerReviewsList';

const EmployerProfile = () => {
  const {id} = useParams();
  const employer = useSelector(state => state.employers.allEmployers).find(emp => emp._id === id);
  const history = useHistory();

  const addReview = () => {
    history.push(`add-review-about-employer/${id}`);
  };

  return (
    <Row justify='center'>
      <Col span={12} offset={0}>
        <Link to='/employers'>
          <div><ArrowLeftOutlined />{' Показать всех работодателей'}</div>
        </Link>
        <br/>
        <h2>{employer.name}</h2>
        <RateComponent
          rate={employer.rating}
          justify='left'
          disabled={true}
        />
        <ButtonComponent title='Написать отзыв' justify='left' onClick={addReview}/>
        <EmployerReviewsList allReviews={employer.allReviews}/>
      </Col>
    </Row>
  );
};

export default EmployerProfile;
