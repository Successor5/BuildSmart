import React, { useState } from "react";
import image from "../../../MyAssets/Screenshot 2023-06-09 153021.png";
import "../styles/WelcomeStyle.css";
import defaultImage from "../../../MyAssets/Screenshot 2023-06-23 115241.png";

import "../styles/WelcomeStyle.css";

function Welcome() {
  const [profilePicture, setProfilePicture] = useState(defaultImage);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      setProfilePicture(event.target.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="m">
    <img src={image} alt="" className="a" />
    
      <div className="m2">
        <h2>Welcome! Let's create your profile</h2>
      </div>
      
      <div className="m3">
        <h2>Let others get to know you better!</h2>
      </div>
      <div className="m4">
        <h4>Enter your location</h4>
        <div className="m5">
          <input type="text" className="mt" />
        </div>
      </div>
      
      <div className="m6">
        <h4>Set your profile picture</h4>
        <div className="profile-picture">
        <img src={profilePicture} alt="Profile" className="profile-image" />
        <input
    className="dee"
          type="file"
          accept="image/*"
          onChange={handleProfilePictureChange}
        />
      </div>
    
      </div>
      <button className="cl">Continue</button>
      <div>
      <button className="c2">Skip</button>u
      </div>
    </div>
  );
}

export default Welcome;
