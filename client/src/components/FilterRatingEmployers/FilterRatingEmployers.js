import React from 'react';
import {Menu, Dropdown, Button, Row, Col} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import RateComponent from '../Rate/RateComponent';
import {useDispatch, useSelector} from 'react-redux';
import {changeFilterOnRating} from '../../redux/actionCreators/employerAC';
import style from './FilterRatingEmployers.module.css';

const FilterRatingEmployers = () => {
  const dispatch = useDispatch();
  const ratings = [5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1, 0.5, 0];
  const {allEmployers} = useSelector(state => state.employers);

  const filterOnRating = (e) => {
    if (e.key !== 'all') {
      dispatch(changeFilterOnRating(allEmployers.filter((emp => emp.rating === Number(e.key)))));
    } else {
      dispatch(changeFilterOnRating(allEmployers));
    }
  };

  const menu = (
    <Menu>
      <Menu.Item key='all' onClick={filterOnRating} className={style.stars}>
        <Row justify='center'>
          <Col>
            {'Любой рейтинг'}
          </Col>
        </Row>
      </Menu.Item>
      {ratings.map((rating) =>
        <Menu.Item key={rating} onClick={filterOnRating} className={style.stars}>
          <RateComponent
            rate={rating}
            disabled={true}
          />
        </Menu.Item>,
      )}
    </Menu>
  );

  return (
    <Dropdown overlay={menu} className={style.filter}>
      <Button className={style.text}>
        Фильтровать по рейтингу<DownOutlined/>
      </Button>
    </Dropdown>
  );
};

export default FilterRatingEmployers;
