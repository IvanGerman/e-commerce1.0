import React from 'react';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import {useDispatch, useSelector} from 'react-redux';
import './Cart.scss';

import Image1 from './../../assets/images/featprod1a.jpeg';
import Image2 from './../../assets/images/featprod1b.jpeg';
import { removeItem, resetCart } from '../../redux/cartReducer';


export const Cart = () => {

  const dispatch = useDispatch();

  const products = useSelector(state => state.cart.products);
  const totalPrice = () => {
    let total = 0;
    products.forEach(element => {
      total += element.quantity * element.price;
    });
    return total.toFixed(2);
  }
  // const data = [
  //   {
  //     id: 1,
  //     img: Image1,
  //     img2: Image2,
  //     title: 'Long Sleeve Graphic T-Shirt',
  //     desc: 'Long Sleeve Graphic T-Shirt',
  //     isNew: true,
  //     oldPrice: 19,
  //     price: 12
  //   },
  // ];

  return(
    <div className='cart'>
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={process.env.REACT_APP_UPLOAD_URL + item.img} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
            ${item.quantity} x ${item.price}
            </div>
          </div>
          <DeleteOutlinedIcon className="delete" onClick={() => { dispatch(removeItem(item.id))}}/></div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
      <button>PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => { dispatch(resetCart())}}>
        Reset Cart
      </span>
    </div> 
  )
};
