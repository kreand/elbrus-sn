import React, {useEffect} from 'react';
import {List, Avatar, Row, Col} from 'antd';
import InputComponent from '../../components/Input/InputComponent';
import {useDispatch, useSelector} from 'react-redux';
import {filterUsersAC, getAllUsersAC} from '../../redux/actionCreators/ratingAC';
import {Link} from 'react-router-dom';

const RatingsPage = () => {
    const students = useSelector(state => state.rating.allUsers.sort((a,b)=> b.rating - a.rating));
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
                <Col offset="0" span="12">
                    <InputComponent onChange={searchOfStudent} size="large" placeholder="Search of student" span="24"
                                    justify="left" offset="0"/>
                    <List
                        itemLayout="horizontal"
                        dataSource={filteredStudents}
                        renderItem={student => (
                            <List.Item>
                                <List.Item.Meta
                                    avatar={<Avatar
                                        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"/>}
                                    title={<Link to={`/student/${student._id}`}>{student.name}</Link>}
                                    description={`Рейтинг:${student.rating}`}
                                />
                            </List.Item>
                        )}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default RatingsPage;
