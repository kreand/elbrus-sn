import React from 'react';
import ButtonComponent from '../../components/Button/ButtonComponent';
import InputComponent from '../../components/Input/InputComponent';
import {useHistory} from 'react-router-dom'

const RatingOfOneStudent = () => {
const hist = useHistory()
    return (
        <div>
            <div>
            <h2 style={{marginLeft: 10}}>Имя Фамилия</h2>
            <h3>Количесвто баллов</h3>
            </div>
            <InputComponent justify='left' offset="0" size="small" placeholder="Сколько баллов изменить" span="2"/>
            <div style={{display: 'flex',}}>
                <div style={{marginRight: 15, marginLeft: 10, marginBottom: 15}}>
                    <ButtonComponent justify="left" title="Добавить" size="large"/>
                </div>
                <ButtonComponent justify="left" title="Отнять" size="large"/>
            </div>
            <textarea style={{marginLeft: 10}} placeholder="Комментарий"></textarea>
            <span onClick={() => hist.push('/ratings')}>
                <ButtonComponent   title="назад" size="small" justify="left"/>
            </span>
        </div>
    );
};

export default RatingOfOneStudent;