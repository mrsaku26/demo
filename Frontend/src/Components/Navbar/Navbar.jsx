import React, { useContext } from "react";
import cart from "../../assets/cart_icon.png";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/Context";

const Navbar = () => {
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div className="navbar">
      <Link to="/">
        <div className="nav-left">
          <h2>E-COMMERCE</h2>
        </div>
      </Link>
      <div className="nav-right">
        <div className="cart-icon-wrapper">
          <Link to="/cart">
            <img src={cart} alt="" />
            <div className="nav-right-num">
              <p>{getTotalCartItems()}</p>
            </div>
          </Link>
        </div>
        <div className="admins">
          <Link to="/admin">
          <button className="adminss">Admin</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
