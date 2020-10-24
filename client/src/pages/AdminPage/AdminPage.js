import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  filterUsersAC,
  getAllUsersAC,
} from '../../redux/actionCreators/ratingAC';
import { Avatar, Col, List, Row } from 'antd';
import InputComponent from '../../components/Input/InputComponent';
import { Link } from 'react-router-dom';
import style from '../RatingsPage/RatingsPage.module.css';
import PaginationComponent from '../../components/Pagination/PaginationComponent';

const AdminPage = () => {
  const students = useSelector(state =>
    state.rating.allUsers.sort((a, b) => b.rating - a.rating),
  );
  const filteredStudents = useSelector(state => state.rating.filteredUsers);
  const [page, setPage] = useState(1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsersAC());
  }, [dispatch]);

  function searchOfStudent(e) {
    dispatch(
      filterUsersAC(
        students.filter(student => {
          return (
            student.name.toLowerCase().indexOf(e.target.value.toLowerCase()) >
            -1
          );
        }),
      ),
    );
  }

  const changePagination = page => {
    setPage(page);
  };

  useEffect(() => {
    dispatch(filterUsersAC(students));
  }, [dispatch, students]);
  return (
    <div>
      <Row justify="center">
        <Col offset="0" span="20">
          <InputComponent
            onChange={searchOfStudent}
            size="large"
            placeholder="Поиск по имени"
            span="24"
            justify="left"
            offset="0"
          />
          <List
            itemLayout="horizontal"
            dataSource={filteredStudents.slice((page - 1) * 10, page * 10)}
            renderItem={student => (
              <List.Item>
                <List.Item.Meta
                  className={style.link}
                  avatar={<Avatar src={student.photo} />}
                  title={
                    <Link to={`/student/${student._id}`}>{student.name}</Link>
                  }
                  description={
                    <div>
                      Рейтинг: {student.rating} <br />
                      Группа: {student.group} <br />
                      Монеты: {student.coins} <br />
                      Роль: {student.status}
                    </div>
                  }
                />
                <div className={style.link}>
                  <Link to={`/admin/edit-student/${student._id}`}>
                    Изменить
                  </Link>
                </div>
              </List.Item>
            )}
          />
          <PaginationComponent
            totalPages={filteredStudents.length}
            onChange={changePagination}
          />
        </Col>
      </Row>
    </div>
  );
};

export default AdminPage;
