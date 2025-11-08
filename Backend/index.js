import express from 'express';
import path from 'path';
import multer from 'multer';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import mongoose from 'mongoose';
import 'dotenv/config'
import connectDB from './config/mongo.js';

const app = express();
const port = 3000;
app.use(express.json());
app.use(cors())
let cart = {};

connectDB()

app.get('/', (req, res) => {
  res.send('Hello Worffld!');
});

//Storage Engine

const storage = multer.diskStorage({
  destination:'./upload/images',
  filename:(req,file,cb)=>{
    return cb (null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
  }
})

const upload = multer({storage:storage})

// Endpoint for images

app.use('/images',express.static('upload/images'))
app.post('/upload',upload.single('product'),(req,res)=>{
  res.json({
    success:1,
    image_url:`http://localhost:${port}/images/${req.file.filename}`
  })
})

// Mongoose Schema

const productSchema=new mongoose.Schema({
  id:{
    type:Number,
    require:true
  },
  name:{
    type:String,
    require:true
  },
  image:{
    type:String,
    require:true
  },
  new_price:{
    type:Number,
    require:true
  },
  date:{
    type:Date,
    default:Date.now
  },
  avilable:{
    type:Boolean,
    default:true
  }
})

// Creating Model

const Products=mongoose.model('Product',productSchema)

app.post('/addproduct',async(req,res)=>{
  try {

     let products= await Products.find({})
    let id=products.length>0 ?products[products.length-1].id+1:1

    const product=new Products({
      id:id,
      name:req.body.name,
      image:req.body.image,
      category:req.body.category,
      new_price:req.body.new_price,
    })

    await product.save()
    console.log("Saved")

    res.json({
      success:true,
      name:req.body.name
    })
  } catch (error) {
    console.error(error)
  }
})

// Deleting Products

app.post('/deleteproduct',async(req,res)=>{
  await Products.findOneAndDelete({id:req.body.id})
  console.log('Delte')

  res.json({
    success:true,
    name:req.body.name
  })
})

 // All product list

app.get('/allproduct',async(req,res)=>{
  let products=await Products.find({})
  console.log(products)
  res.send(products)
})

// For cart

app.post('/cart', async (req, res) => {
  try {
    const { itemid, action } = req.body;

    // Validate product exists
    const product = await Products.findOne({ id: itemid });
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }

    // Update cart
    if (action === 'add') {
      cart[itemid] = (cart[itemid] || 0) + 1;
    } else if (action === 'remove') {
      if (cart[itemid] > 0) cart[itemid] -= 1;
    } else {
      return res.status(400).json({ success: false, message: 'Invalid action' });
    }

    res.json({ success: true, cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});



app.listen(port, () => {
  console.log(`Example app listening on port ${process.env.PORT || 3000}`);
});