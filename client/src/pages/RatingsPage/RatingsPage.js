import React, {useEffect} from 'react';
import {List, Avatar, Row, Col} from 'antd';
import InputComponent from '../../components/Input/InputComponent';
import {useDispatch, useSelector} from 'react-redux';
import {getAllUsersAC} from '../../redux/actionCreators/ratingAC';
import {Link} from 'react-router-dom';

const RatingsPage = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsersAC());
    }, [dispatch]);
    const students = useSelector(state => state.rating.allUsers);
    return (
        <div>
            <Row justify="center">
                <Col offset="0" span="12">
                    <InputComponent size="large" placeholder="Search of student" justify="left" span="12" offset="0"/>
                    <List
                        itemLayout="horizontal"
                        dataSource={students}
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
