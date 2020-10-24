import React, { useEffect, useState } from 'react';
import InputComponent from '../../components/Input/InputComponent';
import style from './ProfilePage.module.css';
import { useDispatch, useSelector } from 'react-redux';
import ButtonComponent from '../../components/Button/ButtonComponent';
import {
  addPhotoUrl,
  editUserBySagaAC,
} from '../../redux/actionCreators/profileAC';
import ProfileComponent from '../../components/ProfileComponent/ProfileComponent';
import Cloudinary from '../../cloudinary/Cloudinary';
import { Row, Col } from 'antd';
import { getAllUsersAC } from '../../redux/actionCreators/ratingAC';
import { getAllOrders } from '../../redux/actionCreators/orderAC';
import TextareaComponent from '../../components/Textarea/TextareaComponent';

const ProfilePage = () => {
  const [editStatus, setEditStatus] = useState(false);
  const user = useSelector(state => state.profile.user);
  const imgUrl = useSelector(state => state.profile.imgUrl);
  const userPhoto = useSelector(state => state.profile.user.photo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPhotoUrl(userPhoto));
  }, [dispatch, userPhoto]);

  useEffect(() => {
    dispatch(getAllUsersAC());
    dispatch(getAllOrders());
  }, [dispatch]);

  const changeEditStatus = () => {
    setEditStatus(!editStatus);
  };

  const profileHandler = e => {
    e.preventDefault();
    let arraySkills = [];
    const {
      name,
      skills: { value: skills },
      contacts: { value: contacts },
    } = e.target;
    if (skills) {
      arraySkills = skills.split(',');
    }
    const updateUserInfo = {
      name: name.value,
      skills: arraySkills,
      userId: user._id,
      contacts,
      imgUrl,
    };
    dispatch(editUserBySagaAC(updateUserInfo));
    changeEditStatus();
  };

  if (editStatus) {
    return (
      <div>
        <Row gutter={16} justify="start">
          <Col offset={2} className={style.title}>
            Редактировать профиль
          </Col>
        </Row>
        <Row gutter={16} justify="start">
          <Col align="middle" span={10}>
            {imgUrl ? (
              <img src={imgUrl} alt={imgUrl} style={{ width: { imgUrl } }} />
            ) : (
              <img
                src={userPhoto}
                alt={userPhoto}
                style={{ width: { imgUrl } }}
              />
            )}
          </Col>
          <Col align="middle" justify="middle" span={10}>
            <form onSubmit={profileHandler}>
              <label className={style.label}>Поменять имя</label>
              <InputComponent
                name="name"
                size="middle"
                defaultValue={user.name}
              />
              <label className={style.label}>Редактировать скиллы</label>
              <InputComponent
                name="skills"
                size="middle"
                defaultValue={user.skills.length > 0 ? user.skills : null}
              />
              <label className={style.label}>Контактная информация</label>
              <TextareaComponent
                name="contacts"
                size="middle"
                defaultValue={user.contacts ? user.contacts : null}
              />
              <label className={style.label}>Заменить фото</label>
              <Cloudinary folder={'userPhoto280x280'} width={'280px'} />
              <div className={style.buttonEdit}>
                <ButtonComponent title={'Сохранить'} type="submit" />
                <ButtonComponent title={'Отмена'} onClick={changeEditStatus} />
              </div>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
  return (
    <Row>
      <Col span={20} justify="middle" align="middle">
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
