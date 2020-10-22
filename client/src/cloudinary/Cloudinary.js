import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './Cloudinary.module.css';
import { addPhotoUrl } from '../redux/actionCreators/profileAC';
import { Row, Col } from 'antd';
import { DownloadOutlined, LoadingOutlined } from '@ant-design/icons';

function Cloudinary({ folder, width }) {
  const dispatch = useDispatch();
  const userPhoto = useSelector(state => state.profile.user.photo);
  const [isLoading, changeLoading] = useState(false);

  useEffect(() => {
    dispatch(addPhotoUrl(userPhoto));
  }, [dispatch, userPhoto]);

  const uploadImage = async e => {
    changeLoading(true);
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', `${folder}`);
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/elbrus-coding-bootcamp/image/upload',
      {
        method: 'POST',
        body: data,
      },
    );
    const file = await res.json();
    const imgUrl = file.secure_url;
    dispatch(addPhotoUrl(imgUrl));
    changeLoading(false);
  };

  return (
    <Row justify="center">
      <Col>
        <div className={style.label}>
          <label htmlFor="file" className={style.inputFile}>
            {'Выберите фото '}
            {isLoading ? <LoadingOutlined /> : <DownloadOutlined />}
          </label>
        </div>
        <input
          style={{ visibility: 'hidden' }}
          type="file"
          name="file"
          id="file"
          placeholder="Выберите фото"
          onChange={uploadImage}
        />
      </Col>
    </Row>
  );
}

export default Cloudinary;
