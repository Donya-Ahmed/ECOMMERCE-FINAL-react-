import React, { useEffect } from 'react'
import styles from './SliderMain.module.css'
import Slider from "react-slick";
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom'
export default function SliderMain() {
  let [categories,setCategories]=useState([])
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
  
        }
      }
    ]
  };
  async function getCategories() {
     let {data} =await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
     setCategories(data.data)
  
  }
  useEffect(()=>{
    getCategories()
  },[])
  return <>
  <Slider {...settings}>
    {categories?categories.map((category)=>
     <Link to={`/category/${category._id}`}>
        <div key={category.id} className={`py-5 cursor-pointer ${styles.categoryText}`}>
       <img src={category.image} className={styles.categoryImg}/>
       <h6 className={`text-center mt-4 `}>{category.name}</h6>
     </div>
     </Link>
    ):''}
   

  </Slider>
  
  </>
}
