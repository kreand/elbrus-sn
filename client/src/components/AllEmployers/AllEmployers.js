import React, { useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import EmployerCard from '../EmployerCard/EmployerCard';
import { useDispatch, useSelector } from 'react-redux';
import {
  addLocalEmployers,
  changeActiveEmpBtn,
  changeFilterOnRating,
  getEmployers,
} from '../../redux/actionCreators/employerAC';
import InputComponent from '../Input/InputComponent';
import FilterRatingEmployers from '../FilterRatingEmployers/FilterRatingEmployers';
import PaginationComponent from '../Pagination/PaginationComponent';

const AllEmployers = () => {
  const { allEmployers } = useSelector(state => state.employers);
  const { filterEmployers } = useSelector(state => state.employers);
  const { findEmployers } = useSelector(state => state.employers);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEmployers());
    dispatch(changeActiveEmpBtn('all-employers'));
  }, [dispatch]);

  useEffect(() => {
    dispatch(changeFilterOnRating(allEmployers));
  }, [dispatch, allEmployers]);

  useEffect(() => {
    dispatch(addLocalEmployers(filterEmployers));
  }, [dispatch, filterEmployers]);

  const searchEmployer = e => {
    dispatch(
      addLocalEmployers(
        filterEmployers.filter(emp => {
          return (
            emp.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
          );
        }),
      ),
    );
  };

  const changePagination = page => {
    setPage(page);
  };

  return (
    <>
      <Row justify="center">
        <Col span={20} offset={0}>
          <FilterRatingEmployers />
          <InputComponent
            placeholder="Найти работодателя"
            onChange={searchEmployer}
          />
          {findEmployers.length
            ? findEmployers
                .slice((page - 1) * 10, page * 10)
                .map(employer => (
                  <EmployerCard key={employer._id} employer={employer} />
                ))
            : null}
          <PaginationComponent
            totalPages={findEmployers.length}
            onChange={changePagination}
          />
        </Col>
      </Row>
    </>
  );
};

export default AllEmployers;
