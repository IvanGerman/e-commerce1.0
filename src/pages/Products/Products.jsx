import React, { useState } from 'react';

import './Products.scss';

import Image1 from './../../assets/images/products1.jpeg';
import { List } from '../../components/List/List';
import { useParams } from 'react-router-dom';


export const Products = () => {

  const catId = parseInt( useParams().id );
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
            <div className="inputItem" >
              <input
                type="checkbox"
                id='1'
                value={1}
              />
              <label htmlFor='1'>Shoes</label>
            </div>
            <div className="inputItem" >
              <input
                type="checkbox"
                id='2'
                value={2}
              />
              <label htmlFor='1'>Skirts</label>
            </div>
            <div className="inputItem" >
              <input
                type="checkbox"
                id='3'
                value={3}
              />
              <label htmlFor='1'>Coats</label>
            </div>
        </div>
        <div className="filterItem">
          <h2>Filter by price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(event) => setMaxPrice(event.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>
        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(event) => setSort('asc')}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="desc"
              value="desc"
              name="price"
              onChange={(event) => setSort('desc')}
            />
            <label htmlFor="desc">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className="catImg"
          src={Image1}
          alt=""
        />
        <List catId={catId} maxPrice={maxPrice} sort={sort} />
      </div>
    </div>
  )
}
