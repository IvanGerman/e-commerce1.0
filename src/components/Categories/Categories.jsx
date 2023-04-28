import React from 'react';

import './Categories.scss';

import Image1 from './../../assets/images/categ1.webp';
import Image2 from './../../assets/images/categ2.jpeg';
import Image3 from './../../assets/images/categ3.jpeg';
import Image4 from './../../assets/images/categ4.jpeg';
import Image5 from './../../assets/images/categ5.webp';
import Image6 from './../../assets/images/categ6.webp';
import { Link } from 'react-router-dom';


export const Categories = () => {
  return (
    <div className='categories'>
      <div className="col">
        <div className="row">
          <img src= {Image1} alt=""/>
          <button>
            <Link className="link" to="/products/1">Sale</Link>
          </button>
        </div>
        <div className="row">
          <img src= {Image2} alt=""/>
          <button>
            <Link className="link" to="/products/1">Women</Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img src= {Image3} alt=""/>
          <button>
            <Link className="link" to="/products/1">New Season</Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img src= {Image4} alt=""/>
              <button>
                <Link className="link" to="/products/1">Men</Link>
              </button></div> 
            </div>
          <div className="col">
            <div className="row">
              <img src= {Image5} alt=""/>
              <button>
                <Link className="link" to="/products/1">Accessories</Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img src= {Image6} alt=""/>
          <button>
            <Link className="link" to="/products/1">Shoes</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
