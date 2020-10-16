import React, { useState } from 'react'
import style from './ProfilePage.module.css'
import { useSelector } from 'react-redux'
import ButtonComponent from '../../components/Button/ButtonComponent'

const ProfilePage = () => {
  const user = useSelector((state) => state.profile)
  const [ editStatus, setEditStatus ] = useState(false)

  const changeEditStatus = () => {
    setEditStatus(!editStatus)
  }

  return (
    <div className={style.profileBody}>
      <div className={style.header}>
        <ButtonComponent title={'изменить профиль'} onClick={changeEditStatus}/>
        <ButtonComponent title={'log out'} />
      </div>
      <div className={style.profileTop}>
        <div className={style.containerForUserPhoto}>
          <img className={style.userPhoto} alt={user.name} src={user.photo} />
          <h2>Raiting {user.rating || 0}</h2>
          <h3 className={style.skills || 'Скилы не указаны'}>
            Skills
            <div className={style.skillsMargin}>
              {user.skills.map((skill) => (
                <li>{skill}</li>
              ))}
            </div>
          </h3>
        </div>
        <div className={style.userGeneralInfo}>
          <h1 className={style.userName}>{user.name}</h1>
          <h2>{user.status}</h2>
          <h2>
            <img
              style={{ width: '1.5em' }}
              src="https://i.pinimg.com/originals/96/4c/f1/964cf112c8928c7c75312f7f15e6b1e0.png"
            />
            x {user.coins}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
