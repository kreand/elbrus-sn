import React, {useEffect, useState} from 'react';
import InputComponent from '../../components/Input/InputComponent';
import style from './ProfilePage.module.css';
import {useDispatch, useSelector} from 'react-redux';
import ButtonComponent from '../../components/Button/ButtonComponent';
import {addPhotoUrl, editUserBySagaAC} from '../../redux/actionCreators/profileAC';
import ProfileComponent from '../../components/ProfileComponent/ProfileComponent';
import Cloudinary from '../../cloudinary/Cloudinary';
import {Row, Col} from 'antd';
import {getAllUsersAC} from '../../redux/actionCreators/ratingAC';
import {getAllOrders} from '../../redux/actionCreators/orderAC';

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
        <Col span={22} offset={1}>
              <h2 className={style.title}>Редактировать профиль</h2>
          <Row>
            <Col span={8}>
              <div className={style.containerForUserPhoto}>
                {imgUrl ? (
                  <img src={imgUrl} alt={imgUrl} style={{ width: { imgUrl } }} />
                ) : (
                  <img src={userPhoto} alt={userPhoto} style={{ width: { imgUrl } }} />
                )}
              </div>
            </Col>
            <Col span={12} offset={2}>
              <form onSubmit={profileHandler} className={style.userGeneralInfo}>
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
                <label className={style.label}>Заменить фото</label>
                <Cloudinary folder={'userPhoto280x280'} width={'280px'}/>
                <div className={style.buttonEdit}>
                  <ButtonComponent title={'Сохранить'} type="submit"/>
                  <ButtonComponent title={'Отмена'} onClick={changeEditStatus}/>
                </div>
              </form>
            </Col>
          </Row>
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
