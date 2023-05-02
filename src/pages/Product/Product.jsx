import React, { useState } from 'react';

import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

import './Product.scss';

import Image1 from './../../assets/images/prod-single1.webp';
import Image2 from './../../assets/images/prod-single2.jpeg';


export const Product = () => {

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = [Image1, Image2];
  
  return (
    <div className='product'>
      <div className="left">
          <div className="images">
              <img  src={images[0]} alt="" onClick={(event) => { setSelectedImage(0) }} />
              <img  src={images[1]} alt="" onClick={(event) => { setSelectedImage(1) }} />
          </div>
          <div className="mainImg">
            <img  src={images[selectedImage]} alt="" />
          </div>
      </div>

      <div className="right">
        <h1>title</h1>
        <span className="price">$199</span>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur commodi omnis debitis quae corrupti obcaecati, praesentium dolore aspernatur fuga a unde! Ratione minima recusandae, rem voluptatem quis ab dolore dolorem.</p>
        <div className="quantity">
          <button onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))} > - </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}> + </button>
        </div>
        <button className='add'>
          <AddShoppingCartIcon/> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon/> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon/> ADD TO COMPARE
          </div>
        </div>
        <div className="info">
              <span>Vendor: Polo</span>
              <span>Product Type: T-Shirt</span>
              <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <hr />
        <div className="info">
          <span>DESCRIPTION</span>
          <hr />
          <span>ADDITIONAL INFORMATION</span>
          <hr />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  )
}
