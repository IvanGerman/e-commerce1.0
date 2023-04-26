import React from 'react';

import './FeaturedProducts.scss';

export const FeaturedProducts = ( { type } ) => {

  const data = [
    {
      id: 1,
      img: './../../assets/images/featprod1a.jpeg',
      img2: './fdf',
      title: 'Long Sleeve Graphic T-Shirt',
      isNew: true,
      oldPrice: 19,
      price: 12
    },
    {
      id: 2,
      img: './fdf',
      title: 'Coat',
      isNew: true,
      oldPrice: 19,
      price: 12
    },
    {
      id: 3,
      img: './fdf',
      title: 'Skirt',
      isNew: true,
      oldPrice: 19,
      price: 12
    },
    {
      id: 4,
      img: './fdf',
      title: 'Hat',
      isNew: true,
      oldPrice: 19,
      price: 12
    }
  ];

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
        
      </div>
    </div>
  )
}
