import React from 'react';
import style from './ProfileComponent.module.css';
import { Tooltip, Tag } from 'antd';
import { tooltipTitle, tooltipDefaultOption } from '../../components/Tooltip/TooltipComponent';
import ButtonComponent from '../../components/Button/ButtonComponent';

const ProfileComponent = ({ user, isMyProfile, onClick }) => {

  return (
    <div className={style.profileBody}>
      <div className={style.profileTop}>
        <div className={style.containerForUserPhoto}>
          <img className={style.userPhoto} alt={user.name} src={user.photo ||
          'https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg'}/>
          <Tooltip
            {...tooltipDefaultOption}
            title={tooltipTitle.raiting}
          >
            <h3 style={{ color: 'orange' }}>RAITING</h3>
            <h2 className={style.round}>{user.rating}</h2>
          </Tooltip>
          <h3 style={{ color: 'orange' }}>SKILLS</h3>
          <h3 className={style.skills}>
            {user.skills.length > 0 ? user.skills.map((skill, index) => (
              <Tag key={index} color='purple' className={style.tag}>{skill}</Tag>
            )) : 'Скилы не указаны'}
          </h3>
          {isMyProfile ? <ButtonComponent
            title={'изменить профиль'}
            onClick={onClick}
          /> : null}
        </div>
        <div className={style.userGeneralInfo}>
          <h2 className={style.userName}>
            {user.name}
          </h2>
          <Tooltip
            {...tooltipDefaultOption}
            title={tooltipTitle.status}
          >
            <h2 className={style.userStatus}>
              {user.status}
            </h2>
          </Tooltip>
          <h2>
            <Tooltip
              {...tooltipDefaultOption}
              title={tooltipTitle.coins}
            >
              <img
                alt='coin'
                style={{ width: '1.5em' }}
                src="https://i.pinimg.com/originals/96/4c/f1/964cf112c8928c7c75312f7f15e6b1e0.png"
              />
              x {user.coins}
            </Tooltip>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
