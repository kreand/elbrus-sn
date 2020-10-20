import React, { useState } from 'react';

function Cloudinary({ folder, width }) {
  const [image, setImage] = useState('');

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

    setImage(file.secure_url);
  };

  return (
    <>
      <input
        type="file"
        name="file"
        placeholder="Выберите фото"
        onChange={uploadImage}
      />
      <img src={image} alt={image} style={{ width: { width } }} />
    </>
  );
}

export default Cloudinary;
