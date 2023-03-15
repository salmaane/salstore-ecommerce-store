// hooks
import {useFetch} from '../../customHooks/useFetch.js';
import {Link} from 'react-router-dom';
import {useRef,useEffect, useContext, useState} from 'react';
import {useFetchLinkContext} from "../../contexts/FetchLinkContext.jsx";
// styles
import '../../styles/banner.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
// components
import { Carousel } from 'react-responsive-carousel';
import NavbarContext from '../../contexts/NavbarContext.jsx';


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

  const {bannersLink} = useFetchLinkContext();
  const {data: banners, loading} = useFetch(bannersLink);

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
                  <Link to={"/products/"+slide.title} className='banner-button' state={tempState}>Shop Now</Link>
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

const tempState = {    
    "id": "aa2244c0-c95a-420d-8642-526c5b97a858",
    "brand": "Nike",
    "colorway": "Bicycle Yellow/Opti Yellow-Fossil-White",
    "gender": "women",
    "media": {
      "imageUrl": "https://stockx.imgix.net/Nike-Blazer-Mid-77-Bicycle-Yellow-W.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1589952675",
      "smallImageUrl": "https://stockx.imgix.net/Nike-Blazer-Mid-77-Bicycle-Yellow-W.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1589952675",
      "thumbUrl": "https://stockx.imgix.net/Nike-Blazer-Mid-77-Bicycle-Yellow-W.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1589952675"
    },
    "releaseDate": "2020-06-01 23:59:59",
    "retailPrice": 100,
    "styleId": "CZ0363-700",
    "title": "Nike Blazer Mid 77 Bicycle Yellow (W)",
    "year": 2020
}


export default Banner