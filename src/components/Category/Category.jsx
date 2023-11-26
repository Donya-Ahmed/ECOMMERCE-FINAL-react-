import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CategoryContext } from '../../context/categoryContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import styles from './Category.module.css'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
export default function Category() {
    const [category,setCategory]=useState({})
    const [subCategory,setSubCategory]=useState([])
    const [loading,setLoading]=useState(false)
    const {id}=useParams()
    let {getCategory}=useContext(CategoryContext)
    let {getSubCategory}=useContext(CategoryContext)
    console.log(id);
    async function getDataCategory(){
        setLoading(true)
        let {data} =await getCategory(id)
        setCategory(data.data)
        getAllCategory()
       
        setLoading(false)
    }
    async function getAllCategory(){
    
        let {data} =await getSubCategory(id)
        setSubCategory(data.data)
  
    }
    useEffect(()=>{
        getDataCategory()
         
    },[])
  return <>
  {
     loading?<div className="lds-facebook"><div></div><div></div><div></div></div>:<div className={styles.categoryContainer}>
     <div className={styles.categoryItem}>

     <div className={styles.imgCategoryContainer}><img src={`${category.image}`} className={styles.imgCategory}/></div>
       <p>{category.name}</p>
     </div>
 
     </div>
  }

     {/* <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
        </SwiperSlide>
      </Swiper> */}
  
  </>
}
