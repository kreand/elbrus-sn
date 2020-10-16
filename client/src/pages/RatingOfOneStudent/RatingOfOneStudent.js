import React, {useState} from 'react';
import ButtonComponent from '../../components/Button/ButtonComponent';
import InputComponent from '../../components/Input/InputComponent';
import {useHistory} from 'react-router-dom'

//Нарисовать как инпут то насколько и тексэриа то за что и
// все через саги и через них в базу, меняю и в редаксе и в базе

const RatingOfOneStudent = () => {
    const [points,setPoints] = useState(0)
const hist = useHistory()
    return (
        <div>
            <h2 style={{marginLeft: 10}}>Имя Фамилия</h2>
            <h3>{points}</h3>
            <InputComponent placeholder="Изменить на" justify="left" span="2"/>
            <textarea style={{marginLeft: 10}} placeholder="Комментарий"></textarea>
                <ButtonComponent  justify="left" title="Сохранить" size="large"/>
                <ButtonComponent onClick={() => hist.push('/ratings')} title="назад" size="small" justify="left"/>
        </div>
    );
};

export default RatingOfOneStudent;