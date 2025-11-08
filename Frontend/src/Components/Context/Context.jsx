import React, { useState,useEffect } from 'react'
import { createContext } from 'react'
import data_product from'../../assets/all_product'

export const ShopContext =createContext(null)
   const getDefaultCart =()=>{
    let cart ={};
    for(let index=0; index<data_product.length+1;index++){
      cart[index]=0;
    }
    return cart;
   }

  

const Context = (props) => {
   const[cartItems,setCartItems] = useState(getDefaultCart())
   const[data_product,setallproduct] = useState([])
   const[cartNo,setCartNo]=useState(getDefaultCart)

       // All Products data

   useEffect(()=>{
      const product=async()=>{
         const datas= await fetch('http://localhost:3000/allproduct')
      const res= await datas.json()
      setallproduct(res)

      }
      product()
    
   },[])

  // Add and remove cart
     const updateCart = async (itemid, action) => {
  setCartItems(prev => ({
    ...prev,
    [itemid]: action === 'add'
      ? (prev[itemid] || 0) + 1
      : Math.max((prev[itemid] || 0) - 1, 0)
  }));

  await fetch('http://localhost:3000/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'user-token': localStorage.getItem('user-token') || ''
    },
    body: JSON.stringify({ itemid, action })
  });
};

const addToCart = itemid => updateCart(itemid, 'add');
const removeFromCart = itemid => updateCart(itemid, 'remove');


const getTotalCartAmount = () => {
  let totalAmount = 0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      const iteminfo = data_product.find(product => product.id === Number(item));
      if (iteminfo) {
        totalAmount += iteminfo.new_price * cartItems[item];
      }
    }
  }
  return totalAmount;
};


const getTotalCartItems = ()=>{
  let totalItem = 0;
  for(const item in cartItems){
    if(cartItems[item]>0){
      totalItem+=cartItems[item]
    }
  }
  return totalItem
}

      const contextValue={data_product,cartItems,addToCart,removeFromCart,getTotalCartAmount,getTotalCartItems};

  return (
    <div>
      <ShopContext.Provider value={contextValue}>
         {props.children}
      </ShopContext.Provider>
    </div>
  )
}

export default Context
