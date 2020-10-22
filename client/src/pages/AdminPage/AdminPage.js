import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
    filterUsersAC,
    getAllUsersAC,
} from '../../redux/actionCreators/ratingAC';
import {Avatar, Col, List, Row} from 'antd';
import InputComponent from '../../components/Input/InputComponent';
import {Link} from 'react-router-dom';
import style from '../RatingsPage/RatingsPage.module.css';

const AdminPage = () => {
    const students = useSelector(state =>
        state.rating.allUsers.sort((a, b) => b.rating - a.rating),
    );
    const filteredStudents = useSelector(state => state.rating.filteredUsers);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsersAC());
    }, [dispatch]);

    function searchOfStudent(e) {
        dispatch(filterUsersAC(students.filter((student) => {
            return student.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1;
        })));
    }

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
                        placeholder="Search of student"
                        span="24"
                        justify="left"
                        offset="0"/>
                    <List
                        itemLayout="horizontal"
                        dataSource={filteredStudents}
                        renderItem={student => (
                            <List.Item>
                                <List.Item.Meta
                                    className={style.link}
                                    avatar={<Avatar
                                        src={student.photo}/>}
                                    title={<Link to={`/student/${student._id}`}>{student.name}</Link>}
                                    description={<div>
                                        Рейтинг: {student.rating} <br/>
                                        Группа: {student.group} <br/>
                                        Монеты: {student.coins} <br/>
                                        Роль: {student.status}
                                    </div>}
                                />
                                <div className={style.link}><Link to={`/admin/edit-student/${student._id}`}>Изменить</Link></div>
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default AdminPage;
