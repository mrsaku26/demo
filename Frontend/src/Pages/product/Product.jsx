import React, { useContext } from 'react'
import { ShopContext } from '../../Components/Context/Context'
import { useParams } from 'react-router-dom'
import star_icon from '../../assets/star_icon.png'
import star_dull_icon from '../../assets/star_dull_icon.png'
import './Product.css'

const product = () => {

  const {id}=useParams()
  const {data_product,addToCart,reomveToCart} =useContext(ShopContext)
  const product = data_product.find(item => item.id == id);
  if (!product) return <div>Product not found</div>;
  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
         <div className="left-samll">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
         </div>
         <div className="left-big">
            <img src={product.image} alt="" />
         </div>
      </div>
      <div className="productdisplay-right">
         <h1>{product.name}</h1>
         <div className="right-star">
         <img src={star_icon} alt="" />
         <img src={star_icon} alt="" />
         <img src={star_icon} alt="" />
         <img src={star_icon} alt="" />
         <img src={star_dull_icon} alt="" />
         <p>(132)</p>
      </div>
      <div className="right-price">
         <p className='new'>Price: ${product.new_price}</p>
      </div>
      <div className="right-about">
         <p>A lightweight,usually knitted,pullover,shirt,colse-fitting and a round neckline and short sleeves,worn as an undershirt a outer garment</p>
      </div>
      <div className="right-size">
         <h1>Select Size</h1>
         <div>
            <button>S</button>
            <button>M</button>
            <button>L</button>
            <button>XL</button>
            <button>XXL</button>
         </div>
      </div>
      <div className="right-cart">
         <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
      </div>
      
      </div>
      
    </div>

  )
}

export default product