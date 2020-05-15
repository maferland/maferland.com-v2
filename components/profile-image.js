import React from 'react';
import './profile-image.module.scss';

const ProfileImage = ({ image, alt, underImage }) => {
  return (
    <div className="profile-container" style={{ backgroundImage: `url(${underImage})` }}>
      <img className="profile-image" src={image} alt={alt} />
    </div>
  );
};

export default ProfileImage;
