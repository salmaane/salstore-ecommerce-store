import {Link} from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

function BrandsCarousel() {

    const StyledSlider = styled(Slider)`
    .slick-list {
        margin-bottom: 1.5rem;
        width: 100%;
    }
    .slick-arrow {
        display: none !important;
    }
    .slick-dots {
        position: relative !important;
        bottom: 0;
        margin-bottom: 3rem !important;
    }
     .slick-list img{
       width: 15rem !important;
     }
     .slick-list .brand-slide {
        display: flex !important;
        flex-direction: column;
        align-items: center;
     }

`;

  return (
    <div style={{
        display:'flex',
        flexDirection:'column',
        padding:'0 6%',
        gap:'2rem',
    }}>
      <h1 style={{fontSize:'2rem',textAlign:'center',color:'black'}}>OUR BRANDS</h1>
      <StyledSlider {...settings}>
        {brands.map( (brand, index) => (
            <div className='brand-slide' key={index}>
                <Link to="/products"><img src={brand.img} alt=""/></Link>
                <h2>{brand.name}</h2>
            </div>
        ))}
      </StyledSlider>
    </div>
  )
}

const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 3000,
};

const brands = [
    {
        "name" : "Nike",
        "img" : "https://stockx.imgix.net/Nike-Kyrie-6-90s-GS.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591073011",
    },
    {
        "name" : "Adidas",
        "img" : "https://stockx.imgix.net/adidas-Nite-Jogger-Pride-2020.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1588214356",
    },
    {
        "name" : "New Balance",
        "img" : "https://stockx.imgix.net/New-Balance-850-White-Team-Teal.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591160665",
    },
    {
        "name" : "Reebok",
        "img" : "https://stockx.imgix.net/Reebok-Question-Low-Patent-Toe-Orange.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1588045053",
    },
    {
        "name" : "Vans",
        "img" : "https://stockx.imgix.net/Vans-Era-National-Geographic.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590556381",
    },
    {
        "name" : "Adidas",
        "img" : "https://stockx.imgix.net/adidas-Ultra-Boost-DNA-Parley-Black-2020.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1588214371",
    },
    {
        "name" : "Jordan",
        "img" : "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Tie-Dye-PS.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591072618",
    },
    {
        "name" : "Converse",
        "img" : "https://stockx.imgix.net/Converse-G4-Black-Solar-Red-Fresh-Mint.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1589952669",
    },
]

export default BrandsCarousel