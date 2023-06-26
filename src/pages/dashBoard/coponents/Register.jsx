import React, { useState } from "react";
import "../styles/RegisterStyle.css";
import picture from "../../../MyAssets/Screenshot 2023-06-09 153021.png";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsButtonVisible(
      e.target.value.includes("@gmail.com") &&
        password !== "" &&
        username !== "" &&
        phoneNumber !== ""
    );
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsButtonVisible(
      email.includes("@gmail.com") &&
        e.target.value !== "" &&
        username !== "" &&
        phoneNumber !== ""
    );
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setIsButtonVisible(
      email.includes("@gmail.com") &&
        password !== "" &&
        e.target.value !== "" &&
        phoneNumber !== ""
    );
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    setIsButtonVisible(
      email.includes("@gmail.com") &&
        password !== "" &&
        username !== "" &&
        e.target.value !== ""
    );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    window.location.href = "/page3";
  };

  return (
    <div className="mai">
      <div className="log">
        <h1
          className="w"
          onClick={() => {
            window.location.href = "/page1";
          }}
        >
          Log In
        </h1>
      </div>
      <div className="last">
        <img src={picture} alt="" className="a" />
        <div className="semiMain">
          <h3 className="text">UserName</h3>
          <input
            type="text"
            id="usernameInput"
            className="single-line-input"
            placeholder="Enter text"
            value={username}
            onChange={handleUsernameChange}
          />
          <h3 className="text2">PhoneNumber</h3>
          <input
            type="text"
            id="phoneNumberInput"
            className="j"
            placeholder="Enter PhoneNumber"
            maxLength={11}
            value={phoneNumber}
            onChange={handlePhoneNumberChange}
          />
          <h3>Email</h3>
          <input
            type="email"
            id="emailInput"
            className="x"
            placeholder="Enter Email"
            value={email}
            onChange={handleEmailChange}
          />
          <h3 className="text1">Password</h3>
          <input
            type="password"
            id="passwordInput"
            className="y"
            placeholder="Enter Password"
            value={password}
            onChange={handlePasswordChange}
            minLength={5}
          />
                  </div>
          <button className="o" onClick={handleFormSubmit} disabled={!isButtonVisible}>
            Sign Up
          </button>
      </div>
    </div>
  );
}

export default Register;
