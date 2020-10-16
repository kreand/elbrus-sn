import React from 'react';
import InputSearch from '../InputSearch/InputSearch';
import {Row, Col} from 'antd';
import EmployerCard from '../EmployerCard/EmployerCard';
import {useSelector} from 'react-redux';

const AllEmployers = () => {
  const employers = useSelector(state => state.employers)

  return (
    <>
      <InputSearch placeholder='Найти работодателя'/>
      <Row justify='center'>
        <Col span={12} offset={0}>
          {employers.length ? employers.map((employer) => <EmployerCard key={employer._id} employer={employer}/>) : null}
        </Col>
      </Row>
    </>
  );
};

export default AllEmployers;
