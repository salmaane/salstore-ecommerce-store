// hooks
import {useFetch} from '../../customHooks/useFetch.js';
import {Link} from 'react-router-dom';
import {useRef,useEffect, useContext, useState} from 'react';
// styles
import '../../styles/banner.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
// components
import { Carousel } from 'react-responsive-carousel';
import NavbarContext from '../../contexts/NavbarContext';


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

  const {data: banners, loading} = useFetch("http://localhost:3000/banners");

  return (
    <div ref={bannerRef}>
      {
        <Carousel {...settings}>
          {loading ?
           <SkeletonTheme baseColor="#202020" highlightColor='#333'>
                <Skeleton style={{height:'100vh',borderRadius:'0  '}}/>
            </SkeletonTheme> 
          : 
          banners.map(slide => (
            <section className='banner'  key={slide.id}>
              <div className='banner-container'>
                <div className='title-wrapper'>
                  <h1>{slide.title}</h1>
                  <Link to="/" className='banner-button' >Shop Now</Link>
                </div>
                <img src={slide.productImage} alt="" className='product-image'/>
              </div>
              <img src={slide.bgImage} className="bg-image" />
            </section>
          ))
          }
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




export default Banner