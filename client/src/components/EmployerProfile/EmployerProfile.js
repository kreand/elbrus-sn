import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {Row, Col} from 'antd';
import ButtonComponent from '../Button/ButtonComponent';
import RateComponent from '../Rate/RateComponent';

const EmployerProfile = () => {
  const {id} = useParams();
  const employer = useSelector(state => state.employers.allEmployers).find(emp => emp._id === id);

  return (
    <Row justify='center'>
      <Col span={12} offset={0}>
        <Link to='/employers'>
          <ButtonComponent title='Показать всех работодателей'/>
        </Link>
        <h3>{employer.name}</h3>
        <RateComponent
          rate={employer.rating}
          justify='left'
        />
        <p>{employer.allReviews[0].review}</p>
      </Col>
    </Row>
  );
};

export default EmployerProfile;
