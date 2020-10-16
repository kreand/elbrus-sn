import React, {useState} from 'react';
import ButtonComponent from '../../components/Button/ButtonComponent';
import InputComponent from '../../components/Input/InputComponent';
import {useHistory} from 'react-router-dom'

const RatingOfOneStudent = () => {
    const [points,setPoints] = useState(0)
const hist = useHistory()
    async function addPoints() {
        setPoints(points + 1)
    }
    async function minusPoints() {
        setPoints(points - 1)
    }
    return (
        <div>
            <div>
            <h2 style={{marginLeft: 10}}>Имя Фамилия</h2>
            <h3>{points}</h3>
            </div>
            <div style={{display: 'flex',}}>
                <div style={{marginRight: 15, marginLeft: 10, marginBottom: 15}}>
                    <ButtonComponent onClick={addPoints} justify="left" title="Добавить" size="large"/>
                </div>
                <ButtonComponent onClick={minusPoints} justify="left" title="Отнять" size="large"/>
            </div>
            <textarea style={{marginLeft: 10}} placeholder="Комментарий"></textarea>
                <ButtonComponent onClick={() => hist.push('/ratings')} title="назад" size="small" justify="left"/>
        </div>
    );
};

export default RatingOfOneStudent;