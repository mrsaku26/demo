import React from 'react'
import './Sidebar.css'
import add_product_icon from '../../../assets/Product_Cart.svg'
import list_product_icon from '../../../assets/Product_list_icon.svg'
import { Link,NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
   <div className="sidebar">
      <NavLink to ='/admin/add' style={{textDecoration:'none'}}>
      <div className="sidebar-icons">
         <img src={add_product_icon} alt="" />
         <p>Add Product</p>
      </div>
      </NavLink>
      <NavLink to='/admin/list' style={{textDecoration:'none'}}>
      <div className="sidebar-icons">
         <img src={list_product_icon} alt="" />
         <p>List Product</p>
      </div>
      </NavLink>
    </div>
  )
}

export default Sidebar