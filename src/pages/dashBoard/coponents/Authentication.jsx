import React, { useState } from "react";
import "../styles/AuthenticationStyle.css";
import picture from "../../../MyAssets/Screenshot 2023-06-09 153021.png";

function Authentication() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    const numericValue = value.replace(/\D/g, "");
    const truncatedValue = numericValue.slice(0, 4);
    setInputValue(truncatedValue);
  };

  return (
    <div className="mai2">
      <img src={picture} alt="" className="a2" />
      <h1 className="o2">Verify Email</h1>
      <div className="small">
        <input
          className="box2"
          value={inputValue}
          onChange={handleInputChange}
          maxLength={4} 
        />
      </div>
      <button className="button"onClick={()=>{window.location.href = "/page2"}} >Continue</button>
    </div>
  );
}

export default Authentication;
