import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPhotoUrl } from '../redux/actionCreators/profileAC';

function Cloudinary({ folder, width }) {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.profile.imgUrl);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', `${folder}`);
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/elbrus-coding-bootcamp/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    const file = await res.json();
    const imgUrl = file.secure_url;
    dispatch(addPhotoUrl(imgUrl));
  };

  return (
    <>
      <input
        type="file"
        name="file"
        placeholder="Выберите фото"
        onChange={uploadImage}
      />
      {url ? <img src={url} alt={url} style={{ width: { width } }} /> : null}
    </>
  );
}

export default Cloudinary;
