import React, {useEffect, useState} from 'react';
import ButtonComponent from '../../components/Button/ButtonComponent';
import InputComponent from '../../components/Input/InputComponent';
import {useHistory, useParams} from 'react-router-dom';
import { useSelector} from 'react-redux';
import TextareaComponent from '../../components/Textarea/TextareaComponent';

//Нарисовать как инпут то насколько и тексэриа то за что и
// все через саги и через них в базу, меняю и в редаксе и в базе

const RatingOfOneStudent = () => {
    const [user, setUser] = useState({});
    const allUsers = useSelector((state) => state.rating.allUsers);
    const {id} = useParams();
    useEffect(() => {
        setUser(allUsers.find((user) => user._id === id));
    }, [allUsers,id]);
    const hist = useHistory();
    return (
        <div>
            <h2 style={{marginLeft: 10}}>{user.name}</h2>
            <h3>{user.rating}</h3>
            <InputComponent placeholder="Изменить" justify="left" span="3"/>
            <TextareaComponent justify="left" span="4" placeholder="Комментарий"> </TextareaComponent>
            <ButtonComponent justify="left" title="Сохранить" size="large"/>
            <ButtonComponent onClick={() => hist.push('/ratings')} title="назад" size="small" justify="left"/>
        </div>
    );
};

export default RatingOfOneStudent;
