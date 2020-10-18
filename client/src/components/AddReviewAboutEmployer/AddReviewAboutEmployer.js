import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, Link, useHistory} from 'react-router-dom';
import {Row, Col} from 'antd';
import {ArrowLeftOutlined} from '@ant-design/icons';
import RateComponent from '../Rate/RateComponent';
import TextareaComponent from '../Textarea/TextareaComponent';
import ButtonComponent from '../Button/ButtonComponent';
import {addReviewAC} from '../../redux/actionCreators/employerAC';

const AddReviewAboutEmployer = () => {
  const {id} = useParams();
  const [rating, changeRating] = useState(0);
  const employer = useSelector(state => state.employers.allEmployers).find(emp => emp._id === id);
  const {user} = useSelector(state => state.profile);
  const {change} = useSelector(state => state.employers);
  const dispatch = useDispatch();
  const history = useHistory();

  const addNewReview = (e) => {
    e.preventDefault();
    const { review: {value: review} } = e.target;
    const userName = user.name;
    const userId = user._id;
    const employerId = id;
    dispatch(addReviewAC({employerId, review, userName, userId, rating}));
  };

  useEffect(() => {
    if (change === 'change') {
      history.push(`/employer/${id}`);
    }
  }, [history, change, id]);

  return (
    <>
      <Row justify='center'>
        <Col span={20} offset={0}>
          <Link to={`/employer/${id}`}>
            <div><ArrowLeftOutlined />{' Вернуться к профилю'}</div>
          </Link>
          <form onSubmit={addNewReview}>
            <br/>
            <h3>{`Написать отзыв об организации "${employer.name}"`}</h3>
            <RateComponent title='Оценка работодателя: ' changeRating={changeRating}/>
            <TextareaComponent span={24} name='review' placeholder='Твоё мнение о данной организации' minRows={2}/>
            <ButtonComponent span={24} title='Добавить'/>
          </form>
        </Col>
      </Row>
    </>
  );
};

export default AddReviewAboutEmployer;
