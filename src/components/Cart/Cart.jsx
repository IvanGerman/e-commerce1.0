import React from 'react';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

import './Cart.scss';

import Image1 from './../../assets/images/featprod1a.jpeg';
import Image2 from './../../assets/images/featprod1b.jpeg';


export const Cart = () => {

  const data = [
    {
      id: 1,
      img: Image1,
      img2: Image2,
      title: 'Long Sleeve Graphic T-Shirt',
      desc: 'Long Sleeve Graphic T-Shirt',
      isNew: true,
      oldPrice: 19,
      price: 12
    },
  ];

  return(
    <div className='cart'>
      <h1>Products in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              1 x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon className="delete"/></div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset" >
        Reset Cart
      </span>
    </div> 
  )
};
