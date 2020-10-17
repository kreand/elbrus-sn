import React from 'react';
import {useParams} from 'react-router-dom'
import {useSelector} from 'react-redux';
import EmployerCard from '../EmployerCard/EmployerCard';
import {Row, Col} from 'antd';

const EmployerProfile = () => {
  const {id} = useParams()
  const employer = useSelector(state => state.employers).find(emp => emp._id === id)


  return (
    <Row justify='center'>
      <Col span={12} offset={0}>
        <EmployerCard employer={employer}/>
        <p>{employer.allReviews[0].review}</p>
      </Col>
    </Row>
  );
};

export default EmployerProfile;
