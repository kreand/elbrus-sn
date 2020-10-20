import React, {useEffect, useState} from 'react';
import {Link, useParams, useHistory} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {Row, Col} from 'antd';
import {ArrowLeftOutlined} from '@ant-design/icons';
import ButtonComponent from '../Button/ButtonComponent';
import RateComponent from '../Rate/RateComponent';
import EmployerReviewsList from '../EmployerReviewsList/EmployerReviewsList';
import style from './EmployerProfile.module.css';
import {DownOutlined, UpOutlined} from '@ant-design/icons';


const EmployerProfile = () => {
  const {id} = useParams();
  const employer = useSelector(state => state.employers.allEmployers).find(emp => emp._id === id);
  const [emp, setEmp] = useState({...employer, allReviews: employer.allReviews.map(rev => ({...rev, date: new Date(rev.date)}))});
  const history = useHistory();
  const [key, setKey] = useState();
  const [btns, setBtns] = useState({date: true, rating: true});

  const addReview = () => {
    history.push(`add-review-about-employer/${id}`);
  };

  useEffect(() => {
    setKey(employer.rating);
    setEmp({...employer, allReviews: employer.allReviews.map(rev => ({...rev, date: new Date(rev.date)}))});
  }, [employer]);

  const sortByDate = () => {
    if (btns.date) {
      setEmp(prev => ({...prev, allReviews: {...prev}.allReviews.sort((a, b) => a.date - b.date)}));
    } else {
      setEmp(prev => ({...prev, allReviews: {...prev}.allReviews.sort((a, b) => b.date - a.date)}));
    }
    setBtns(prev => {
      return {...prev, date: !btns.date};
    });
  };

  const sortByRating = () => {
    if (btns.rating) {
      setEmp( prev =>({...prev, allReviews: {...prev}.allReviews.sort((a, b) => a.rating - b.rating)}));
    } else {
      setEmp(prev => ({...prev, allReviews: {...prev}.allReviews.sort((a, b) => b.rating - a.rating)}));
    }
    setBtns(prev => {
      return {...prev, rating: !btns.rating};
    });
  };

  return (
    <Row justify='center'>
      <Col span={20} offset={0}>
        <Link className={style.text} to='/employers'>
          <div><ArrowLeftOutlined />{' Показать всех работодателей'}</div>
        </Link>
        <br/>
        <h2 className={style.text}>{employer.name}</h2>
        <RateComponent
          key={key}
          rate={employer.rating}
          justify='left'
          disabled={true}
        />
        <div className={style.buttonContainer}>
          <ButtonComponent title='Написать отзыв' justify='left' onClick={addReview}/>
          <div style={{paddingBottom: 0}}>
            <div>
              Сортировать:
            </div>
            <Link to='#' onClick={sortByDate} className={style.text}>
              {btns.date ? <DownOutlined/> : <UpOutlined />}{' Дата'}
            </Link>
            <Link to='#' style={{marginLeft: 10}} onClick={sortByRating} className={style.text}>
              {btns.rating ? <DownOutlined/> : <UpOutlined />}{' Рейтинг'}
            </Link>
          </div>
        </div>
        <EmployerReviewsList allReviews={emp.allReviews} employerId={emp._id}/>
      </Col>
    </Row>
  );
};

export default EmployerProfile;
