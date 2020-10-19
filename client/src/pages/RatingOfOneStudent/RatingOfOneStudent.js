import React, { useEffect, useState } from 'react';
import ButtonComponent from '../../components/Button/ButtonComponent';
import InputComponent from '../../components/Input/InputComponent';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { defaultChangeRatingAC } from '../../redux/actionCreators/ratingAC';

const RatingOfOneStudent = () => {
  const [user, setUser] = useState({});
  const allUsers = useSelector((state) => state.rating.allUsers);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    setUser(allUsers.find((user) => user._id === id));
  }, [allUsers, id]);
  const hist = useHistory();

  function changeRatingHandler (e) {
    e.preventDefault();
    const rating = e.target.rating.value;
    const _id = user._id;
    dispatch(defaultChangeRatingAC({ _id, rating }));
    hist.push('/students');
  }

  return (

    <div style={{width: '100%', marginTop: '6em'}}>
      <h2>Изменить рейтинг студента </h2>
      <form onSubmit={changeRatingHandler}>
        <InputComponent name="rating" placeholder="Изменить" span={12}/>
        <ButtonComponent title="Изменить"/>
      </form>
    </div>
  );
};

export default RatingOfOneStudent;
