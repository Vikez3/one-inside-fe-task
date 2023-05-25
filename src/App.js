import { useEffect, useState } from "react";
import "./App.css";
import ProfileCard from "./components/ProfileCard";
import ProfileCardFrom from "./components/ProfileCardFrom";

function App() {
  const [profileCard, setProfileCard] = useState(true);
  const [profileForm, setProfileForm] = useState(false);
  const [profileData, setProfileData] = useState({});

  useEffect(() => {
    const localStorageData = localStorage.getItem("profileData");
    setProfileData(JSON.parse(localStorageData));
    if (localStorageData === null) {
      setProfileData({
        name: "First Name",
        lastname: "Last Name",
        office: "Office Location",
      });
    }
  }, []);

  const profileArrowClickHandler = () => {
    setProfileCard(false);
    setProfileForm(true);
  };

  const profileFormArrowClickHandler = () => {
    setProfileForm(false);
    setProfileCard(true);
  };

  return (
    <div className="App">
      {profileCard && (
        <ProfileCard
          arrowClick={profileArrowClickHandler}
          profileData={profileData}
        />
      )}
      {profileForm && (
        <ProfileCardFrom
          arrowClick={profileFormArrowClickHandler}
          data={profileData}
          setData={setProfileData}
        />
      )}
    </div>
  );
}

export default App;
