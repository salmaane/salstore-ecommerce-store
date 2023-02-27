import '../../styles/banner.css';
import {useRef,useEffect, useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import NavbarContext from '../../contexts/NavbarContext';
import {useFetch} from '../../customHooks/useFetch.js';

 function Banner() {

  const navbarRef = useContext(NavbarContext);
  const bannerRef = useRef(null);
  useEffect(()=>{
    const observerOptions = {
      rootMargin: '-71px 0px 0px 0px',
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry=>{
        
        navbarRef.current.classList.toggle("navbar-intersecting",entry.isIntersecting); 

      })
    },observerOptions);
    observer.observe(bannerRef.current);
  });

  // const {data: banners} = useFetch("http://localhost:3000/banners");
  // here i used fake json server to fetch banners data.

  return (
    <div ref={bannerRef}>
      {
        !banners ? <h1 style={{fontSize:'5rem'}}>Im Loading...</h1> 
        :
        <Carousel {...settings}>
          {banners.map(slide => (
                <section className='banner-container' key={slide.id}>
                  <div className='title-wrapper'>
                    <h1>{slide.title}</h1>
                    <Link to="/" className='banner-button' >Shop Now</Link>
                  </div>
                  <img src={slide.productImage} alt="" className='product-image'/>
                </section>
          ))}
        </Carousel>
      }
    </div>
  )
}


const settings = {
  showThumbs: false,
  showStatus: false,
  infiniteLoop: true,
  autoPlay:true,
  interval:13e3,
  stopOnHover:true,
  swipeable: true,
  emulateTouch: true,
  // animationHandler: 'fade',
}


const banners = [
  {
    id: 1,
    "title": "Nike Blaze Mid 77 Bicycle Yellow",
    "productImage" : "/assets/images/NikeShoes.png",
    "bgImage" : "/assets/images/Bannerbackground.jpg"
  },
  {
    id: 2,
    "title": "Nike Blaze Mid 77 Bicycle Yellow",
    "productImage" : "/assets/images/NikeShoes.png",
    "bgImage" : "/assets/images/Bannerbackground.jpg"
  },
  {
      id: 3,
      "title": "Nike Blaze Mid 77 Bicycle Yellow",
      "productImage" : "/assets/images/NikeShoes.png",
      "bgImage" : "/assets/images/Bannerbackground.jpg"
    }
];


export default Banner