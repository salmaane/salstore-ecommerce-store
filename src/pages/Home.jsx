import React from 'react';
import Banner from '../components/home/Banner';
import ProductsSection from '../components/home/ProductsSection';
import BrandsCarousel from '../components/home/BrandsCarousel';
import LeafletMap from '../components/LeafletAPI/LeafletMap';
import MiniBanner from '../components/home/MiniBanner';

function Home() {  
  return (
    <div>
      <Banner/>
      <ProductsSection 
        sneakersData={sneakers}
        header={"OUR PRODUCTS"}
        buttonText={"SHOP PRODUCTS"} 
      />
      <MiniBanner 
        imgSRC="assets/images/Nike-white.png"
        title="ORDER NOW"
        subTitle="And enjoy the best sneakers sales service in USA"
        buttonText="SEE THE CATALOGUE"
      />
      <ProductsSection
        sneakersData={sneakers}
        header={"NEW RELEASES"}
        buttonText={"SHOP NEW RELEASES"}
      />
      <BrandsCarousel />
      <LeafletMap />
    </div>
  )
}


const sneakers = [
  {
    "id": "c116b14f-8f00-454b-915c-f3f51c7a297c",
    "brand": "Nike",
    "colorway": "White/Opti Yellow-Digital Pink-Blue Fury",
    "gender": "child",
    "media": {
      "imageUrl": "https://stockx.imgix.net/Nike-Kyrie-6-90s-GS.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591073011",
      "smallImageUrl": "https://stockx.imgix.net/Nike-Kyrie-6-90s-GS.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591073011",
      "thumbUrl": "https://stockx.imgix.net/Nike-Kyrie-6-90s-GS.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591073011"
    },
    "releaseDate": "2020-06-12 23:59:59",
    "retailPrice": 200.5,
    "styleId": "BQ5599-101",
    "title": "Nike Kyrie 6 90s (GS)",
    "year": 2020
  },
  {
    "id": "e7b5d463-64d8-4b4f-adca-d6b10a0a9ea8",
    "brand": "Jordan",
    "colorway": "White/Black-Aurora Green",
    "gender": "preschool",
    "media": {
      "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Tie-Dye-PS.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591072618",
      "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Tie-Dye-PS.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591072618",
      "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Tie-Dye-PS.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591072618"
    },
    "releaseDate": "2020-06-11 23:59:59",
    "retailPrice": 80,
    "styleId": "CU0449-100",
    "title": "Jordan 1 Retro High Tie Dye (PS)",
    "year": 2020
  },
  {
    "id": "17c165c3-b1e7-4a10-aa5a-ca763c78cc53",
    "brand": "Jordan",
    "colorway": "White/Black-Aurora Green",
    "gender": "toddler",
    "media": {
      "imageUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Tie-Dye-TD.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591072618",
      "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Tie-Dye-TD.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591072618",
      "thumbUrl": "https://stockx.imgix.net/Air-Jordan-1-Retro-High-Tie-Dye-TD.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591072618"
    },
    "releaseDate": "2020-06-11 23:59:59",
    "retailPrice": 60,
    "styleId": "CU0450-100",
    "title": "Jordan 1 Retro High Tie Dye (TD)",
    "year": 2020
  },
  {
    "id": "93197f94-54e3-4fd2-9727-c1c5f7e11a1f",
    "brand": "Nike",
    "colorway": "Dark Smoke Grey/Barely Volt-Volt",
    "gender": "women",
    "media": {
      "imageUrl": "https://stockx.imgix.net/Nike-Air-Max-90-Dark-Smoke-Grey-Volt-W.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1589952683",
      "smallImageUrl": "https://stockx.imgix.net/Nike-Air-Max-90-Dark-Smoke-Grey-Volt-W.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1589952683",
      "thumbUrl": "https://stockx.imgix.net/Nike-Air-Max-90-Dark-Smoke-Grey-Volt-W.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1589952683"
    },
    "releaseDate": "2020-06-10 23:59:59",
    "retailPrice": 120,
    "styleId": "CZ0378-001",
    "title": "Nike Air Max 90 Dark Smoke Grey Volt (W)",
    "year": 2020
  },
  {
    "id": "b98cb757-ad04-442f-9561-ba097b7ab81e",
    "brand": "adidas",
    "colorway": "Core Black/Core Black/Blue Spirit",
    "gender": "men",
    "media": {
      "imageUrl": "https://stockx.imgix.net/adidas-Ultra-Boost-DNA-Parley-Black-2020.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1588214371",
      "smallImageUrl": "https://stockx.imgix.net/adidas-Ultra-Boost-DNA-Parley-Black-2020.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1588214371",
      "thumbUrl": "https://stockx.imgix.net/adidas-Ultra-Boost-DNA-Parley-Black-2020.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1588214371"
    },
    "releaseDate": "2020-06-08 23:59:59",
    "retailPrice": 180,
    "styleId": "EH1184",
    "title": "adidas Ultra Boost DNA Parley Black (2020)",
    "year": 2020
  },
  {
    "id": "c9598308-be0b-4549-9e6b-736b2c424f44",
    "brand": "adidas",
    "colorway": "Cloud White/Cloud White/Blue Spirit",
    "gender": "men",
    "media": {
      "imageUrl": "https://stockx.imgix.net/adidas-Ultra-Boost-Uncaged-Parley-2020.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1585905351",
      "smallImageUrl": "https://stockx.imgix.net/adidas-Ultra-Boost-Uncaged-Parley-2020.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1585905351",
      "thumbUrl": "https://stockx.imgix.net/adidas-Ultra-Boost-Uncaged-Parley-2020.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1585905351"
    },
    "releaseDate": "2020-06-08 23:59:59",
    "retailPrice": 180,
    "styleId": "EH1173",
    "title": "adidas Ultra Boost DNA Parley White (2020)",
    "year": 2020
  },
  {
    "id": "af2e6271-0f72-4409-b98b-82f418fc5a7e",
    "brand": "adidas",
    "colorway": "Dash Grey/Signal Coral/Blue Sport",
    "gender": "men",
    "media": {
      "imageUrl": "https://stockx.imgix.net/adidas-4D-Run-1-Dash-Grey-Signal-Coral.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591073011",
      "smallImageUrl": "https://stockx.imgix.net/adidas-4D-Run-1-Dash-Grey-Signal-Coral.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591073011",
      "thumbUrl": "https://stockx.imgix.net/adidas-4D-Run-1-Dash-Grey-Signal-Coral.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591073011"
    },
    "releaseDate": "2020-06-08 23:59:59",
    "retailPrice": 200,
    "styleId": "FW1230",
    "title": "adidas 4D Run 1.0 Dash Grey Signal Coral",
    "year": 2020
  },
  {
    "id": "4f181050-2f23-4586-a9ef-16f089e5b148",
    "brand": "adidas",
    "colorway": "Core Black/Core Black/Core Black",
    "gender": "men",
    "media": {
      "imageUrl": "https://stockx.imgix.net/adidas-Nite-Jogger-Triple-Black-2020.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591238783",
      "smallImageUrl": "https://stockx.imgix.net/adidas-Nite-Jogger-Triple-Black-2020.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591238783",
      "thumbUrl": "https://stockx.imgix.net/adidas-Nite-Jogger-Triple-Black-2020.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591238783"
    },
    "releaseDate": "2020-06-07",
    "retailPrice": 130,
    "styleId": "FV1277",
    "title": "adidas Nite Jogger Triple Black (2020)",
    "year": 2020
  }
]

export default Home