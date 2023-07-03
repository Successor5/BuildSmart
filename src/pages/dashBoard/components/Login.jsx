import React, { useState } from "react";
import "../styles/LoginStyle.css";
import picture1 from "../../../MyAssets/Screenshot 2023-06-09 153021.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonVisible, setIsButtonVisible] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsButtonVisible(e.target.value.includes("@gmail.com") && password !== "");
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsButtonVisible(email.includes("@gmail.com") && e.target.value !== "");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="main1">
      <h1 className="w1" onClick={()=>{window.location.href = "/"}}>Sign Up</h1>
      <img src={picture1} alt="" className="a1" />
      <div className="smallMain1">
        {/* <div className="smallMain1"> */}
          <h3>Email</h3>
          <input
            type="email"
            id="emailInput"
            className="x1"
            placeholder="Enter email"
            value={email}
            onChange={handleEmailChange}
          />
          <h3 className="textt">Password</h3>
          <input
            type="password"
            id="passwordInput"
            className="x1"
            placeholder="Enter password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
          <button className="sign-up-button1" onClick={handleFormSubmit}>
            Log In
          </button>
      </div>
  );
}

export default Login;
