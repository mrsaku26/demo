import React, { useContext, useState } from "react";
import "./User.css";
import { ShopContext } from "../../Components/Context/Context";


const User = () => {
  const {getTotalCartAmount} = useContext(ShopContext)
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
  });

  const changeHandler = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    if (formdata.name.trim()) {
      alert(`Dear ${formdata.name} your total amount is ${getTotalCartAmount()}!`);
       setFormdata({
      name: "",
      email: "",
    });

    } else {
      alert("Please enter your name.");
    }
  };

  return (
    <div className="login">
      <div className="login-cont">
        <h1>User</h1>
        <form onSubmit={handleSubmit}>
          <div className="login-input">
            <input
              value={formdata.name}
              onChange={changeHandler}
              type="text"
              name="name"
              placeholder="Your Name"
            />
            <input
              value={formdata.email}
              onChange={changeHandler}
              type="text"
              name="email"
              placeholder="Email Address"
            />
          </div>

          <div className="login-btn">
            <button type="submit">Continue</button>
          </div>

          <div className="login-policy">
            <input type="checkbox" />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default User;