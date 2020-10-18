import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams, useHistory, Link} from 'react-router-dom';
import {Row, Col} from 'antd';
import {ArrowLeftOutlined} from '@ant-design/icons';
import RateComponent from '../Rate/RateComponent';
import TextareaComponent from '../Textarea/TextareaComponent';
import ButtonComponent from '../Button/ButtonComponent';

const AddReviewAboutEmployer = () => {
  const {id} = useParams();
  const [rating, changeRating] = useState(0);
  const employer = useSelector(state => state.employers.allEmployers).find(emp => emp._id === id);
  const user = useSelector(state => state.profile);
  const dispatch = useDispatch();

  const addReview = (e) => {
    e.preventDefault();
    const { review } = e.target;
    const userName = user.name;
    const userId = user._id;
    const employerId = id;
    dispatch(addReview({employerId, review, userName, userId, rating}));
  };

  return (
    <>
      <Row justify='center'>
        <Col span={12} offset={0}>
          <Link to={`/employer/${id}`}>
            <div><ArrowLeftOutlined />{' Вернуться к профилю'}</div>
          </Link>
          <form onSubmit={addReview}>
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
