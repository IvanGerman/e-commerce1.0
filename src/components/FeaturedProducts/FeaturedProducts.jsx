import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './FeaturedProducts.scss';
import { Card } from '../Card/Card';

import Image1 from './../../assets/images/featprod1a.jpeg';
import Image2 from './../../assets/images/featprod1b.jpeg';
import Image3 from './../../assets/images/featprod2.webp';
import Image4 from './../../assets/images/featprod3.webp';
import Image5 from './../../assets/images/featprod4.webp';


export const FeaturedProducts = ( { type } ) => {

  // const data = [
  //   {
  //     id: 1,
  //     img: Image1,
  //     img2: Image2,
  //     title: 'Long Sleeve Graphic T-Shirt',
  //     isNew: true,
  //     oldPrice: 19,
  //     price: 12
  //   },
  //   {
  //     id: 2,
  //     img: Image3,
  //     title: 'Coat',
  //     isNew: true,
  //     oldPrice: 19,
  //     price: 12
  //   },
  //   {
  //     id: 3,
  //     img: Image4,
  //     title: 'Skirt',
  //     isNew: false,
  //     oldPrice: 19,
  //     price: 12
  //   },
  //   {
  //     id: 4,
  //     img: Image5,
  //     title: 'Hat',
  //     isNew: false,
  //     oldPrice: 19,
  //     price: 12
  //   }
  // ];

  const [ data, setData ] = useState([]);

  useEffect( () => { 
    const fetchData = async () => {
      try {
        const response = await axios.get( process.env.REACT_APP_API_URL + `/products?populate=*&[filters][type][$eq]=${type}`, {
          headers : {
            Authorization: 'bearer ' + process.env.REACT_APP_API_TOKEN
          },
          
        });
        console.log(response.data.data);
        setData(response.data.data);
      }
      catch(err) {
        console.log(err);
      };
    };
    fetchData();
  }, []);

  return (
    <div className='featuredProducts'>
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
        {
          data.map( (item) => {
            return <Card item={item} key={item.id} />
          })
        }
      </div>
    </div>
  )
}
