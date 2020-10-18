import React, { useState } from 'react'
import style from './ProfilePage.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { Tooltip, Tag, Input } from 'antd';
import { tooltipTitle, tooltipDefaultOption } from '../../components/Tooltip/TooltipComponent'
import ButtonComponent from '../../components/Button/ButtonComponent'
import { editUserProfileAC } from '../../redux/actionCreators/profileAC'

const ProfilePage = () => {
  const user = useSelector((state) => state.profile.user)
  const dispatch = useDispatch()
  const [editStatus, setEditStatus] = useState(false)

  const changeEditStatus = () => {
    setEditStatus(!editStatus);
  };

  const profileHandler = (e) => {
    e.preventDefault()
    const { name, email, password, skills } = e.target
    const updateUserInfo = {
      name: name.value,
      email: email.value,
      password: password.value,
      skills: [skills.value]
    }
    dispatch(editUserProfileAC(updateUserInfo))
    changeEditStatus()
  }

  if (editStatus) {
    return (
      <div className={style.profileBody}><br/><br/>
        <div className={style.profileTop}>
          <div className={style.containerForUserPhoto}>
            <img className={style.userPhoto} alt={user.name || 'default_user_photo'} src={user.photo || 
            'https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg'}/>
          </div>
          <form onSubmit={profileHandler} className={style.userGeneralInfo}>
            <label className={style.label}>login</label>
            <Input name='name' className={style.input} size='middle' defaultValue={user.name}/>
            <label className={style.label}>skills</label>
            <Input name='skills' className={style.input} size='middle' defaultValue={user.skills.length > 0 ? 
              [...user.skills] : 'скилы не указаны'}/>
            <label className={style.label}>email</label>
            <Input name='email' className={style.input} size='middle' defaultValue={user.email}/>
            <label className={style.label}>password</label>
            <Input name='password' type='password' className={style.input} size='middle' defaultValue={user.password}/>
            <div className={style.buttonEdit}>
              <ButtonComponent title={'изменить'} type='submit'/>
              <ButtonComponent title={'назад'} onClick={changeEditStatus}/>
            </div>
          </form>
        </div>
      </div>
    )
  }
  return (
    <div className={style.profileBody}>
        <div className={style.header}>
          <ButtonComponent
            title={'изменить профиль'}
            onClick={changeEditStatus}
          />
        </div>
        <div className={style.profileTop}>
          <div className={style.containerForUserPhoto}>
            <img className={style.userPhoto} alt={user.name} src={user.photo || 
            'https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg'}/>
            <Tooltip
              {...tooltipDefaultOption}
              title={tooltipTitle.raiting}
            >
              <h3 style={{color:'orange'}}>RAITING</h3>
              <h2 className={style.round}>{user.rating}</h2>
            </Tooltip>
            <h3 style={{color:'orange'}}>SKILLS</h3>
            <h3 className={style.skills}>
              {user.skills.length > 0 ? user.skills.map((skill) => (
                <Tag color='purple' className={style.tag}>{skill}</Tag>
                )) : 'Скилы не указаны'}
            </h3>
          </div>
          <div className={style.userGeneralInfo}>
            <h1 className={style.userName}>
              {user.name}
            </h1>
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
                  style={{ width: '1.5em' }}
                  src="https://i.pinimg.com/originals/96/4c/f1/964cf112c8928c7c75312f7f15e6b1e0.png"
                />
                x {user.coins}
              </Tooltip>
            </h2>
          </div>
        </div>
      </div>
  )
}

export default ProfilePage;
