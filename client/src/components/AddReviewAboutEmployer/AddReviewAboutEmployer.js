import React from 'react';
import {useParams, useHistory} from 'react-router-dom';
import RateComponent from '../Rate/RateComponent';
import TextareaComponent from '../Textarea/TextareaComponent';
import ButtonComponent from '../Button/ButtonComponent';
import {useSelector} from 'react-redux';
import {Row, Col} from 'antd';

const AddReviewAboutEmployer = () => {
  const {id} = useParams();
  const employer = useSelector(state => state.employers.allEmployers).find(emp => emp._id === id);
  const history = useHistory();

  const addReview = (e) => {
    e.preventDefault();
    console.log(123);
  };

  return (
    <>
      <Row justify='center'>
        <Col span={12} offset={0}>
          <ButtonComponent
            justify='left'
            title='Вернуться к профилю'
            onClick={() => history.push(`/employer/${id}`)}
          />
          <form onSubmit={addReview}>
            <br/>
            <h3>{`Написать отзыв об организации "${employer.name}"`}</h3>
            <RateComponent title='Оценка работодателя: '/>
            <TextareaComponent span={24} name='review' placeholder='Твоё мнение о данной организации' minRows={2}/>
            <ButtonComponent span={24} title='Добавить'/>
          </form>
        </Col>
      </Row>
    </>
  );
};

export default AddReviewAboutEmployer;
