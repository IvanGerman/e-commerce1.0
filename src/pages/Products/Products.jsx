import React, { useState } from 'react';

import './Products.scss';

import Image1 from './../../assets/images/products1.jpeg';
import { List } from '../../components/List/List';
import { useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';


export const Products = () => {

  const catId = parseInt( useParams().id );
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState('asc');
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } =  useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`);
  const handleChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    setSelectedSubCats(isChecked ? [...selectedSubCats, value] : selectedSubCats.filter((item) => {
      return item !== value;
    }))
  }
  // console.log(data);
  // console.log(selectedSubCats);

  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
            { data?.map( (item) => {
              return (
                <div className="inputItem" key={item.id}>
                  <input
                    type="checkbox"
                    id={item.id}
                    value={item.id}
                    onChange={handleChange}
                  />
                  <label htmlFor={item.id}>{item.attributes.title}</label>
                </div>
              )})
            }
            {/* <div className="inputItem" >
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
            </div> */}
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
        <List catId={catId} maxPrice={maxPrice} sort={sort} subCats={selectedSubCats} />
      </div>
    </div>
  )
}
