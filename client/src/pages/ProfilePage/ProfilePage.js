import React from 'react'
import style from './ProfilePage.module.css'
import { useSelector } from 'react-redux'
import ModalComponent from '../../components/Modal/ModalComponent'
import ButtonComponent from '../../components/Button/ButtonComponent'

const ProfilePage = () => {
  const user = useSelector(state => state.profile)
  return (
    <div className={style.profileBody}>
      <div className={style.header}>
        <h1>ProfilePage</h1>
        <button className={style.roundBtn}>edit</button>
        <button className={style.roundBtn}>Log Out</button>
        <ModalComponent title={'изменить профиль'}/>
      </div>
      <div className={style.profileTop}>
        <div className={style.containerForUserPhoto}>
          <img className={style.userPhoto} alt={user.name} src={user.photo} />
          <h2>
            Raiting {user.rating}
          </h2>
          <h3 className={style.skills}>
            Skills
            <div className={style.skillsMargin}>
              {user.skills.map(skill => <li>{skill}</li>)}
            </div>
          </h3>
        </div>
        <div className={style.userGeneralInfo}>
          <h1 className={style.userName}>{user.name}</h1>
            <h2>{user.status}</h2>
            <h2><img style={{width: '1.5em'}} src='https://i.pinimg.com/originals/96/4c/f1/964cf112c8928c7c75312f7f15e6b1e0.png' /> x {user.coins}</h2>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
