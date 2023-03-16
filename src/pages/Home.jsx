import React from 'react';
import Banner from '../components/home/Banner.jsx';
import ProductsSection from '../components/home/ProductsSection.jsx';
import BrandsCarousel from '../components/home/BrandsCarousel.jsx';
import LeafletMap from '../components/LeafletAPI/LeafletMap.jsx';
import MiniBanner from '../components/home/MiniBanner.jsx';

function Home() {  
  return (
    <div>
      <Banner/>
      <ProductsSection
        header={"NEW RELEASES"}
        buttonText={"SHOP NEW RELEASES"}
        sort={"desc"}
        query=""
      />
      <MiniBanner 
        imgSRC={import.meta.env.BASE_URL+"/assets/images/Nike-white.png"}
        title="ORDER NOW"
        subTitle="And enjoy the best sneakers sales service in USA"
        buttonText="SEE THE CATALOGUE"
      />
      <ProductsSection 
        header={"OUR PRODUCTS"}
        buttonText={"SHOP PRODUCTS"}
        sort={"asc"} 
        query=""
      />
      <BrandsCarousel />
      <LeafletMap />
    </div>
  )
}


export default Home