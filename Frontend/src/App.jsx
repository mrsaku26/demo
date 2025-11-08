import React from 'react'
import { Route,Routes, useLocation } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import User from './Pages/User/User'
import Navbar from './Components/Navbar/Navbar'
import Product from './Pages/product/product'
import Admin from './Pages/Admin/Admin'
import Layout from './Admin/Pages/Layout'
import List from './Admin/Pages/List'
import Add from './Admin/Pages/Add'
import NNavbar from './Admin/Components/Navbar/Navbar'

const App = () => {
  const location  =useLocation()
  const isAdminRoute = location.pathname.startsWith('/admin');


  return (
   <>
   <div>
     <div>
       {!isAdminRoute && <Navbar />}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/product/:id' element={<Product/>}/>
        <Route path='/admin' element={false?<Admin/>:<Layout/>}>
        <Route path='add' element={<Add/>}/>
        <Route path='list' element={<List/>}/>
        </Route>
      </Routes>
    </div>
   </div>
   </>
  )
}

export default App
