import '../styles/banner.css';
import {useRef,useEffect} from 'react';

function Banner() {

  const navbar = document.querySelector(".navbar");
  // need to use forwardRef instead

  const banner = useRef(null);
  const observerOptions = {
    rootMargin: '-71px 0px 0px 0px',
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry=>{

      navbar.classList.toggle("navbar-intersecting",entry.isIntersecting); 
    
    })
  },observerOptions);
  
  useEffect(()=>{
    observer.observe(banner.current);
  }); 
    
  return (
    <section className='banner-container' ref={banner}>
        <h1>Nike Blaze Mid 77 Bicycle Yellow</h1>
        <img src="/assets/images/NikeShoes.png" alt='' className='product-image'/>
    </section>
  )
}

export default Banner