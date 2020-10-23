import React, {useEffect, useState} from 'react';
import ButtonComponent from '../../components/Button/ButtonComponent';
import InputComponent from '../../components/Input/InputComponent';
import {useHistory, useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {defaultChangeRatingAC} from '../../redux/actionCreators/ratingAC';
import {Row, Col, Select} from 'antd';


const {Option} = Select;
const RatingOfOneStudent = () => {
    const [user, setUser] = useState({});
    const allUsers = useSelector(state => state.rating.allUsers);
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        setUser(allUsers.find(user => user._id === id));
        setSelect(allUsers.find(user => user._id === id).status);
    }, [allUsers, id]);

    const hist = useHistory();

    const [select, setSelect] = useState(user.status);


    function changeRatingHandler(e) {
        e.preventDefault();
        const rating = e.target.rating.value;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const skills = e.target.skills.value;
        const group = e.target.group.value;
        const status = select;
        const _id = user._id;
        dispatch(defaultChangeRatingAC({_id, rating, name, email, skills, group, status }));
        hist.push('/admin');
    }

    return (
        <Row>
            <Col span={20} offset={2}>
                <div style={{width: '100%', marginTop: '1em'}}>

                    <form onSubmit={changeRatingHandler}>
                        <h2>Изменить имя </h2>
                        <InputComponent
                          key={user.name}
                          name="name"
                          placeholder="Изменить имя"
                          span={7}
                          justify="left"
                          defaultValue={user.name }
                        />
                        <h2>Изменить e-mail</h2>
                        <InputComponent
                          key={user.email}
                          name="email"
                          placeholder="Изменить e-mail"
                          justify={'left'}
                          span={7}
                          defaultValue={user.email}
                        />
                        <h2>Изменить рейтинг </h2>
                        <InputComponent
                          key={user.rating}
                          name="rating"
                          placeholder="Изменить рейтинг"
                          span={7}
                          justify="left"
                          defaultValue={user.rating}
                        />
                        <h2>Изменить роль</h2>
                        <Select key={user.status} defaultValue={user.status} name="status" placeholder={'Выбрать роль'}
                                onChange={value => setSelect(value)}>
                            <Option value={'Гость'}>Гость</Option>
                            <Option value={'Студент'}>Студент</Option>
                            <Option value={'Выпускник'}>Выпускник</Option>
                            <Option value={'Ментор'}>Ментор</Option>
                        </Select>
                        <h2>Изменить группу</h2>
                        <InputComponent
                          key={user.group}
                          name="group"
                          placeholder="Изменить группу"
                          justify={'left'}
                          span={7}
                          defaultValue={user.group}
                        />
                        <h2>Изменить skills</h2>
                        <InputComponent
                          key={user.skills}
                          name="skills"
                          placeholder="Изменить skills"
                          justify={'left'}
                          span={7}
                          defaultValue={user.skills}
                        />
                        <div style={{marginTop: 15}}>
                            <ButtonComponent title="Сохранить" justify="left"/>
                        </div>
                    </form>
                </div>
            </Col>
        </Row>
    );
};

export default RatingOfOneStudent;
