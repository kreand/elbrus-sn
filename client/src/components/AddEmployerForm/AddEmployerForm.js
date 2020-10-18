import React, {useState} from 'react';
import InputComponent from '../Input/InputComponent';
import ButtonComponent from '../Button/ButtonComponent';
import RateComponent from '../Rate/RateComponent';
import TextareaComponent from '../Textarea/TextareaComponent';
import {changeActiveEmpBtn, createEmployer} from '../../redux/actionCreators/employerAC';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

const AddEmployerForm = () => {
  const [rating, changeRating] = useState(0);
  const dispatch = useDispatch();
  const history = useHistory();

  const addNewEmployer = (e) => {
    e.preventDefault();
    const {review: {value: review}, name: {value: name}} = e.target;
    dispatch(createEmployer({name, review, rating}))
    dispatch(changeActiveEmpBtn('all-employers'))
    history.push('/employers');
  }

  return (
    <form onSubmit={addNewEmployer}>
      <InputComponent name='name' placeholder='Наименование организации'/>
      <RateComponent name='rating' title='Оценка работодателя: ' changeRating={changeRating} disabled={false}/>
      <TextareaComponent name='review' placeholder='Твоё мнение о данной организации' minRows={2}/>
      <ButtonComponent title='Добавить'/>
    </form>
  );
};

export default AddEmployerForm;
