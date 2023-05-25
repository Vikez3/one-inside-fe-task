import React, { useState } from "react";
import profileIcon from "../img/profile-icon.jpg";
import rotateIcon from "../img/thenounproject.png";

export default function ProfileCardFrom({ arrowClick, data, setData }) {
  const [profileData, setProfileData] = useState(data);
  const [profileName, setProfileName] = useState(data.name);
  const [profileLastName, setProfileLastName] = useState(data.lastname);
  const [profileOffice, setProfileOffice] = useState(data.office);

  const formEventHandler = (e) => {
    e.preventDefault();
    setData(profileData);
    localStorage.setItem("profileData", JSON.stringify(profileData));
  };

  const nameInputEventHandler = (e) => {
    setProfileName(e.target.value);
    setProfileData({ ...profileData, name: e.target.value });
  };

  const lastNameInputEventHandler = (e) => {
    setProfileLastName(e.target.value);
    setProfileData({ ...profileData, lastname: e.target.value });
  };

  const officeInputEventHandler = (e) => {
    setProfileOffice(e.target.value);
    setProfileData({ ...profileData, office: e.target.value });
  };

  const saveDataHandler = () => {
    alert("You succesfull changed data");
  };

  const cancleEditDataHandler = (e) => {
    e.stopPropagation();
    setProfileData(data);
    setProfileName(data.name);
    setProfileLastName(data.lastname);
    setProfileOffice(data.office);
    alert("Data is not changed");
  };

  return (
    <div className="profile-card">
      <div className="rotate-arrow" onClick={arrowClick}>
        <img src={rotateIcon} alt="rotate icon" />
      </div>
      <div className="profile-picture">
        <img src={profileIcon} alt="profilePicture" />
      </div>
      <form className="profile-form" onSubmit={formEventHandler}>
        <div>
          <label htmlFor="#nameInput">First Name</label>
          <input
            id="nameInput"
            type="text"
            placeholder="Enter your name"
            value={profileName}
            onChange={nameInputEventHandler}
          />
        </div>
        <div>
          <label htmlFor="#lastNameInput">Last Name</label>
          <input
            id="lastNameInput"
            type="text"
            placeholder="Enter your last name"
            value={profileLastName}
            onChange={lastNameInputEventHandler}
          />
        </div>
        <div>
          <label htmlFor="#officeInput">Your office</label>
          <input
            id="officeInput"
            type="text"
            placeholder="enter your office"
            value={profileOffice}
            onChange={officeInputEventHandler}
          />
        </div>
        <div className="button-container">
          <button className="cancel-btn" onClick={cancleEditDataHandler}>
            Cancel
          </button>

          <button className="save-btn" type="submit" onClick={saveDataHandler}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
