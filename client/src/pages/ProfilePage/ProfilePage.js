import React, { useState } from 'react';
import InputComponent from '../../components/Input/InputComponent';
import style from './ProfilePage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import ButtonComponent from '../../components/Button/ButtonComponent';
import { editUserBySagaAC } from '../../redux/actionCreators/profileAC';
import ProfileComponent from '../../components/ProfileComponent/ProfileComponent';
import Cloudinary from '../../cloudinary/Cloudinary';

const ProfilePage = () => {
  const [editStatus, setEditStatus] = useState(false);
  const user = useSelector(state => state.profile.user);
  const imgUrl = useSelector(state => state.profile.imgUrl);
  const dispatch = useDispatch();

  const changeEditStatus = () => {
    setEditStatus(!editStatus);
  };

  const profileHandler = e => {
    e.preventDefault();
    let arraySkills = [];
    const {
      name,
      skills: { value: skills },
    } = e.target;
    if (skills) {
      arraySkills = skills.split(',');
    }
    const updateUserInfo = {
      name: name.value,
      skills: arraySkills,
      userId: user._id,
      imgUrl,
    };
    dispatch(editUserBySagaAC(updateUserInfo));
    changeEditStatus();
  };

  if (editStatus) {
    return (
      <div className={style.profileBody}>
        <div className={style.profileTop}>
          <div className={style.containerForUserPhoto}>
            <img
              className={style.userPhoto}
              alt={user.name || 'default_user_photo'}
              src={user.photo}
            />
          </div>
          <form onSubmit={profileHandler} className={style.userGeneralInfo}>
            <label className={style.label}>login</label>
            <InputComponent
              span={18}
              name="name"
              className={style.input}
              size="middle"
              defaultValue={user.name}
            />
            <label className={style.label}>skills</label>
            <InputComponent
              span={18}
              name="skills"
              className={style.input}
              size="middle"
              defaultValue={user.skills.length > 0 ? user.skills : null}
            />
            <ButtonComponent title={'изменить'} type="submit" />
            <ButtonComponent title={'назад'} onClick={changeEditStatus} />
          </form>
        </div>
        <Cloudinary folder={'userPhoto280x280'} width={'280px'} />
      </div>
    );
  }
  return (
    <>
      <ProfileComponent
        user={user}
        isMyProfile={true}
        onClick={changeEditStatus}
      />
    </>
  );
};

export default ProfilePage;
