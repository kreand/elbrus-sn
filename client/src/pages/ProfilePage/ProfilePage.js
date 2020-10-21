import React, {useEffect, useState} from 'react';
import InputComponent from '../../components/Input/InputComponent';
import style from './ProfilePage.module.css';
import {useDispatch, useSelector} from 'react-redux';
import ButtonComponent from '../../components/Button/ButtonComponent';
import {addPhotoUrl, editUserBySagaAC} from '../../redux/actionCreators/profileAC';
import ProfileComponent from '../../components/ProfileComponent/ProfileComponent';
import Cloudinary from '../../cloudinary/Cloudinary';
import {Row, Col} from 'antd';

const ProfilePage = () => {
  const [editStatus, setEditStatus] = useState(false);
  const user = useSelector(state => state.profile.user);
  const imgUrl = useSelector(state => state.profile.imgUrl);
  const userPhoto = useSelector(state => state.profile.user.photo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPhotoUrl(userPhoto));
  }, [dispatch, userPhoto]);

  const changeEditStatus = () => {
    setEditStatus(!editStatus);
  };

  const profileHandler = e => {
    e.preventDefault();
    let arraySkills = [];
    const {
      name,
      skills: {value: skills},
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
      <Row className={style.row}>
        <Col span={20} offset={1}>
          <h2>Редактировать профиль</h2>
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
                size="middle"
                defaultValue={user.name}
              />
              <label className={style.label}>skills</label>
              <InputComponent
                span={18}
                name="skills"
                size="middle"
                defaultValue={user.skills.length > 0 ? user.skills : null}
              />
              <div className={style.buttonEdit}>
                <ButtonComponent title={'изменить'} type="submit"/>
              </div>
              <div className={style.buttonEdit}>
                <ButtonComponent title={'назад'} onClick={changeEditStatus}/>
              </div>
            </form>
          </div>
          <Cloudinary folder={'userPhoto280x280'} width={'280px'}/>
        </Col>
      </Row>
    );
  }
  return (
    <Row className={style.row}>
      <Col span={20} offset={1}>
        <ProfileComponent
          user={user}
          isMyProfile={true}
          onClick={changeEditStatus}
        />
      </Col>
    </Row>
  );
};

export default ProfilePage;
