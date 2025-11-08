import React from 'react'
import './Add.css'
import { useState } from 'react'
import upload_area from '../../assets/upload_area.svg'

const Add = () => {
   const[image,setImage]=useState(false)

  const[inputValue,setInputValue]=useState({
    'name':'',
    'image':'',
    'new_price':'',
  })

  const changeHandler=(e)=>{
    setInputValue({...inputValue,[e.target.name]:e.target.value})
  }

  const imageHandler=(e)=>{
    setImage(e.target.files[0])
  }

    const Addproduct=async()=>{
     
      let responsedata;
      let product=inputValue;

      let formData =new FormData;
      formData.append('product',image)

      let data=await fetch('http://localhost:3000/upload',{
        method:'POST',
        body:formData
      })
      let res= await data.json()
      responsedata=res

      if(responsedata.success){
        product.image=responsedata.image_url
        console.log(product)
          setInputValue({
      name: '',
      image: '',
      new_price: ''
    });
    setImage(false);

      }

      let dats=await fetch('http://localhost:3000/addproduct',{
        method:'POST',
        headers:{
          'Content-type':'application/json'
        },
        body:JSON.stringify(product)
      })
      let resp=await dats.json()
      let value=resp

      if(value.success){
        alert("Prouct Added")
      }
      else{
        alert("Not Added")
      }

    }
  return (
    <div className='addproduct'>
      <div className="product-name">
        <p>Product Name</p>
        <input value={inputValue.name} onChange={changeHandler} name='name' type="text" placeholder='Type here' />
      </div>
      <div className="product-price">
        <div className="product-prices">
          <p> Price</p>
          <input value={inputValue.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type here' />
        </div>
      </div>
      <div className="product-input">
        <label  htmlFor="file-upload">
          <img src={image?URL.createObjectURL(image):upload_area} alt="" />
        </label>
            <input onChange={imageHandler} type="file" id='file-upload' name='image' hidden/>
      </div>
      <div className="product-btn">
        <button onClick={()=>{Addproduct()}}>ADD</button>
      </div>
    </div>
  )
}

export default Add
