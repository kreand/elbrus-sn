import React from 'react';
import style from './ProfileComponent.module.css';
import { Tooltip, Tag, Row, Col, Divider } from 'antd';
import {
  tooltipTitle,
  tooltipDefaultOption,
} from '../../components/Tooltip/TooltipComponent';
import ButtonComponent from '../../components/Button/ButtonComponent';

const ProfileComponent = ({ user, isMyProfile, onClick }) => {
  return (
    <div>
      <Row 
      gutter={16} 
      justify="center">
        <Col 
        align="middle" 
        span={10}
        >
          <img 
          alt={user.name} 
          src={user.photo} 
          />
          <Tooltip 
          {...tooltipDefaultOption} 
          title={tooltipTitle.raiting}
          >
            <h3 style={{ color: "var(--orange_color)" }}>
              RAITING
            </h3>
            <h2>
              {user.rating}
            </h2>
          </Tooltip>
          {isMyProfile ? (
            <ButtonComponent 
            title={'изменить профиль'} 
            onClick={onClick} />
          ) : null}
        </Col>
        <Col 
        align="middle" 
        justify="middle" 
        span={8}
        className={style.nameBox}>
          <h2>
            {user.name}
          </h2>
          <Tooltip 
          {...tooltipDefaultOption} 
          title={tooltipTitle.status}>
            <h2>
              {user.status}
            </h2>
          </Tooltip>
          <h2>
            <Tooltip 
            {...tooltipDefaultOption} 
            title={tooltipTitle.coins}>
              <img
                alt="coin"
                style={{ width: '1.5em' }}
                src="https://res.cloudinary.com/elbrus-coding-bootcamp/image/upload/v1603113844/images/964cf112c8928c7c75312f7f15e6b1e0_x9i0lf.png"
              />
              x {user.coins}
            </Tooltip>
          </h2>
          <Divider 
          className={style.divider}
          >
            SKILLS
          </Divider>
          <h3>
            {user.skills.length > 0
              ? user.skills.map((skill, index) => (
                  <Tag 
                  key={index} 
                  color="purple" 
                  className={style.tag}
                  >
                    {skill}
                  </Tag>
                ))
              : 'Скилы не указаны'}
          </h3>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileComponent;
