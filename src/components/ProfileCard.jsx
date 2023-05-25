import React from "react";
import profileIcon from "../img/profile-icon.jpg";
import rotateIcon from "../img/thenounproject.png";

export default function ProfileCard({ arrowClick, profileData }) {
  const { name, lastname, office } = profileData;
  return (
    <div className="profile-card">
      <div className="rotate-arrow" onClick={arrowClick}>
        <img src={rotateIcon} alt="rotate icon" />
      </div>
      <div className="profile-picture">
        <img src={profileIcon} alt="profilePicture" />
      </div>
      <div className="profile-info">
        <div>
          <p>{name}</p>
        </div>
        <div>
          <p>{lastname}</p>
        </div>
        <div>{office}</div>
      </div>
    </div>
  );
}
