import React, {useEffect} from 'react';
import {Row, Col} from 'antd';
import EmployerCard from '../EmployerCard/EmployerCard';
import {useDispatch, useSelector} from 'react-redux';
import {addLocalEmployers, changeActiveEmpBtn, changeFilterOnRating} from '../../redux/actionCreators/employerAC';
import InputComponent from '../Input/InputComponent';
import FilterRatingEmployers from '../FilterRatingEmployers/FilterRatingEmployers';

const AllEmployers = () => {
  const employers = useSelector(state => state.employers);
  const localEmployers = useSelector(state => state.searchEmployers);
  const filterOnRating = useSelector(state => state.employersFilter)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeActiveEmpBtn('all-employers'))
  }, [])

  useEffect(() => {
    dispatch(changeFilterOnRating(employers))
  }, [employers])

  useEffect(() => {
    dispatch(addLocalEmployers(filterOnRating))
  }, [filterOnRating])

  const searchEmployer = (e) => {
    dispatch(addLocalEmployers(filterOnRating.filter(emp => {
      return emp.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1;
    })))
  }

  return (
    <>
      <FilterRatingEmployers/>
      <br/>
      <InputComponent placeholder='Найти работодателя' onChange={searchEmployer}/>
      <Row justify='center'>
        <Col span={12} offset={0}>
          {localEmployers.length ? localEmployers.map((employer) => <EmployerCard key={employer._id}
                                                                                  employer={employer}/>) : null}
        </Col>
      </Row>
    </>
  );
};

export default AllEmployers;
