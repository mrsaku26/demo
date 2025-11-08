import React, { useContext } from 'react'
import './Home.css'
import { ShopContext } from '../../Components/Context/Context'
import { Link } from 'react-router-dom'
import Product from '../product/product'

const Home = () => {
  const {data_product} =useContext(ShopContext)
  return (
    <div className='home'>
    <h3 className='show'> Showing <span className='product-span'>12 Products</span></h3>
      <div className="product">
        {
          data_product.map((item,i)=>{
            return <>
            <div key={i} className='products'>
             <Link to={`/product/${item.id}`}>
              <img src={item.image} alt="" className='product-image'/>
             </Link>
              <p className='name'>{item.name}</p>
              <p className='pro-price'>Price: <span className='price'>${item.new_price}</span></p>
            </div>
            </>
          })
        }
      </div>
    </div>
  )
}

export default Home
