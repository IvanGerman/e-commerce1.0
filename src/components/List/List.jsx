import React from 'react';

import './List.scss';

import Image1 from './../../assets/images/featprod1a.jpeg';
import Image2 from './../../assets/images/featprod1b.jpeg';
import Image3 from './../../assets/images/featprod2.webp';
import Image4 from './../../assets/images/featprod3.webp';
import Image5 from './../../assets/images/featprod4.webp';
import { Card } from '../Card/Card';
import useFetch from '../../hooks/useFetch';

export const List = ( { subCats, maxPrice, sort, catId } ) => { 

  let filteredSubCats = '';
  subCats.forEach(element => {
    filteredSubCats += `&[filters][sub_categories][id][$eq]=${element}`
  });
  

  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId}${filteredSubCats}`
  );

  // const { data, loading, error } =  useFetch(`/products?populate=*&[filters][categories][id]=${catId}${subCats.map( (item) => {
  //   return `&[filters][sub_categories][id][$eq]=${item}`
  //   })
  //  }`
  // );


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

  return (
    <div className='list'>
      { loading ? 'loading' : data.map( (item) => {
            return <Card item={item} key={item.id} />
          })
        }
    </div>
  )
}
