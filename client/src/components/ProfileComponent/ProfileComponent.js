import React from 'react';
import style from './ProfileComponent.module.css';
import { Tooltip, Tag, Row, Col, Divider, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import {
  tooltipTitle,
  tooltipDefaultOption,
} from '../../components/Tooltip/TooltipComponent';

const ProfileComponent = ({ user, isMyProfile, onClick }) => {
  return (
    <div>
      <Row gutter={16} justify="start">
        <Col className={style.header} span={12} align="middle">
          <Tooltip {...tooltipDefaultOption} title={tooltipTitle.status}>
            <span className={style.status}>Роль в кампусе: {user.status}</span>
          </Tooltip>
        </Col>
        <Col offset={10} className={style.header}>
          {isMyProfile ? (
            <Button
              style={{
                backgroundColor: 'var(--orange_color)',
                color: 'var(--purple_color)',
                border: 'none',
              }}
              shape="circle"
              onClick={onClick}
              icon={<EditOutlined />}
            />
          ) : null}
        </Col>
      </Row>
      <Row gutter={16} justify="start">
        <Col align="middle" span={10} offset={1} className={style.photo}>
          <img alt={user.name} src={user.photo} />
          <Tooltip {...tooltipDefaultOption} title={tooltipTitle.raiting}>
            <h3 className={style.lvl}>МОЙ РЕЙТИНГ: {user.rating}</h3>
          </Tooltip>
        </Col>
        <Col
          align="middle"
          justify="middle"
          span={10}
          offset={1}
          className={style.box}
        >
          {user.group ? (
            <Divider className={style.divider}>{user.group}</Divider>
          ) : null}
          <h2 className={style.h2}>{user.name}</h2>
          <Tooltip {...tooltipDefaultOption} title={tooltipTitle.coins}>
            <h2>
              <img
                alt="coin"
                style={{ width: '1.1em' }}
                src="https://res.cloudinary.com/elbrus-coding-bootcamp/image/upload/v1603113844/images/964cf112c8928c7c75312f7f15e6b1e0_x9i0lf.png"
              />{' '}
              <span className={style.h2}>x {user.coins}</span>
            </h2>
          </Tooltip>
          <Divider className={style.divider}>НАВЫКИ</Divider>
          <h3>
            {user.skills.length > 0
              ? user.skills.map((skill, index) => (
                  <Tag key={index} color="purple" className={style.tag}>
                    {skill}
                  </Tag>
                ))
              : 'Скиллы не указаны'}
          </h3>
          <Divider className={style.divider}>КОНТАКТЫ</Divider>
          {user.contacts ? (
            user.contacts.split('\n').map((el, i) => (
              <div key={i} style={{ color: 'var(--purple_color)' }}>
                {el}
              </div>
            ))
          ) : (
            <div style={{ color: 'var(--purple_color)' }}>
              Контактная информация не указана
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default ProfileComponent;
