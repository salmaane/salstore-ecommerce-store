import "../../styles/productColumn.css";
import ProductCard from "../ProductCard.jsx"

function ProductsColumn() {
  return (
    <div className="products-column">
        <p className="results">RESULTS <span>{products.length}</span></p>
        {products.map( (product) => (
          <ProductCard 
            key={product.id}
            item={product}
          />
        ) )}
    </div>
  )
}

const products = [
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
  },
  {
    "id": "96ab1256-44cb-4282-82e3-c5fc0bbe42fc",
    "brand": "adidas",
    "colorway": "Cloud White/Cloud White/Cloud White",
    "gender": "men",
    "media": {
      "imageUrl": "https://stockx.imgix.net/adidas-Nite-Jogger-Triple-White-2020.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591238784",
      "smallImageUrl": "https://stockx.imgix.net/adidas-Nite-Jogger-Triple-White-2020.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591238784",
      "thumbUrl": "https://stockx.imgix.net/adidas-Nite-Jogger-Triple-White-2020.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591238784"
    },
    "releaseDate": "2020-06-07",
    "retailPrice": 130,
    "styleId": "FV1267",
    "title": "adidas Nite Jogger Triple White (2020)",
    "year": 2020
  },
  {
    "id": "6fd29cc5-4f9c-4cab-afb9-d8289f5780b7",
    "brand": "Jordan",
    "colorway": "Black/Gym Red-Light Smoke Grey",
    "gender": "men",
    "media": {
      "imageUrl": "https://stockx.imgix.net/Air-Jordan-Delta-SP-Black.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1588045708",
      "smallImageUrl": "https://stockx.imgix.net/Air-Jordan-Delta-SP-Black.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1588045708",
      "thumbUrl": "https://stockx.imgix.net/Air-Jordan-Delta-SP-Black.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1588045708"
    },
    "releaseDate": "2020-06-06 23:59:59",
    "retailPrice": 150,
    "styleId": "",
    "title": "Jordan Delta SP Black",
    "year": 2020
  },
  {
    "id": "3d5fc6cd-dc25-470b-81fd-791d5dff69e4",
    "brand": "Nike",
    "colorway": "White/White-Black-White",
    "gender": "men",
    "media": {
      "imageUrl": "https://stockx.imgix.net/Nike-Air-Force-1-Low-Drew-League-2020.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1589347861",
      "smallImageUrl": "https://stockx.imgix.net/Nike-Air-Force-1-Low-Drew-League-2020.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1589347861",
      "thumbUrl": "https://stockx.imgix.net/Nike-Air-Force-1-Low-Drew-League-2020.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1589347861"
    },
    "releaseDate": "2020-06-06 23:59:59",
    "retailPrice": null,
    "styleId": "CZ4272-100",
    "title": "Nike Air Force 1 Low Drew League (2020)",
    "year": 2020
  },
  {
    "id": "e545c830-5551-4f02-9b46-16526e5bc14e",
    "brand": "adidas",
    "colorway": "Core Black/Gold Metallic/Core Black",
    "gender": "men",
    "media": {
      "imageUrl": "https://stockx.imgix.net/adidas-Dame-6-Leather-Black-Gold.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1589420773",
      "smallImageUrl": "https://stockx.imgix.net/adidas-Dame-6-Leather-Black-Gold.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1589420773",
      "thumbUrl": "https://stockx.imgix.net/adidas-Dame-6-Leather-Black-Gold.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1589420773"
    },
    "releaseDate": "2020-06-06 23:59:59",
    "retailPrice": null,
    "styleId": "FV8627",
    "title": "adidas Dame 6 Leather Black Gold",
    "year": 2020
  },
  {
    "id": "17e470b0-0720-4756-8512-5e8a0b0ae14f",
    "brand": "Nike",
    "colorway": "Neutral Grey/Varsity Royal-Sail",
    "gender": "men",
    "media": {
      "imageUrl": "https://stockx.imgix.net/Nike-Air-Force-1-Low-Rub-Away-Blue.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590126620",
      "smallImageUrl": "https://stockx.imgix.net/Nike-Air-Force-1-Low-Rub-Away-Blue.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590126620",
      "thumbUrl": "https://stockx.imgix.net/Nike-Air-Force-1-Low-Rub-Away-Blue.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590126620"
    },
    "releaseDate": "2020-06-06 23:59:59",
    "retailPrice": null,
    "styleId": "",
    "title": "Nike Air Force 1 Low Rub Away Blue",
    "year": 2020
  },
  {
    "id": "879b4294-4ca8-4f54-b229-7098682f40fd",
    "brand": "Nike",
    "colorway": "Neutral Grey/Varsity Red-Sail",
    "gender": "men",
    "media": {
      "imageUrl": "https://stockx.imgix.net/Nike-Air-Force-1-Low-Rub-Away-Black.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590126619",
      "smallImageUrl": "https://stockx.imgix.net/Nike-Air-Force-1-Low-Rub-Away-Black.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590126619",
      "thumbUrl": "https://stockx.imgix.net/Nike-Air-Force-1-Low-Rub-Away-Black.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590126619"
    },
    "releaseDate": "2020-06-06 23:59:59",
    "retailPrice": null,
    "styleId": "",
    "title": "Nike Air Force 1 Low Rub-Away Black",
    "year": 2020
  },
  {
    "id": "b7346639-e655-4b61-b937-b60182eed5c0",
    "brand": "Nike",
    "colorway": "Black/Blush-Sail",
    "gender": "men",
    "media": {
      "imageUrl": "https://stockx.imgix.net/Nike-Air-Force-1-Low-Rub-Away-Red.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590126621",
      "smallImageUrl": "https://stockx.imgix.net/Nike-Air-Force-1-Low-Rub-Away-Red.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590126621",
      "thumbUrl": "https://stockx.imgix.net/Nike-Air-Force-1-Low-Rub-Away-Red.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590126621"
    },
    "releaseDate": "2020-06-06 23:59:59",
    "retailPrice": null,
    "styleId": "",
    "title": "Nike Air Force 1 Low Rub Away Red",
    "year": 2020
  },
  {
    "id": "05966f2d-2870-427c-879c-013cec2c6501",
    "brand": "Nike",
    "colorway": "Sail/Safety Orange-Black-Gum Medium Brown",
    "gender": "men",
    "media": {
      "imageUrl": "https://stockx.imgix.net/Nike-Air-Max-90-Home--Away-Orange.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591161432",
      "smallImageUrl": "https://stockx.imgix.net/Nike-Air-Max-90-Home--Away-Orange.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591161432",
      "thumbUrl": "https://stockx.imgix.net/Nike-Air-Max-90-Home--Away-Orange.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591161432"
    },
    "releaseDate": "2020-06-06 23:59:59",
    "retailPrice": null,
    "styleId": "CJ0611-100",
    "title": "Nike Air Max 90 Rub Away Orange",
    "year": 2020
  },
  {
    "id": "b4366898-2075-4707-a965-2fdd57354e5a",
    "brand": "Nike",
    "colorway": "Sail/Varsity Royal-Midnight-Navy-Gum Medium Brown",
    "gender": "men",
    "media": {
      "imageUrl": "https://stockx.imgix.net/Nike-Air-Max-90-Home--Away-Blue.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591161432",
      "smallImageUrl": "https://stockx.imgix.net/Nike-Air-Max-90-Home--Away-Blue.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591161432",
      "thumbUrl": "https://stockx.imgix.net/Nike-Air-Max-90-Home--Away-Blue.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591161432"
    },
    "releaseDate": "2020-06-06 23:59:59",
    "retailPrice": null,
    "styleId": "",
    "title": "Nike Air Max 90 Rub Away Blue",
    "year": 2020
  },
  {
    "id": "be59ab39-16e0-43c5-8f42-aa32948c805c",
    "brand": "Nike",
    "colorway": "Sail/University Red-Black-Gum Medium Brown",
    "gender": "men",
    "media": {
      "imageUrl": "https://stockx.imgix.net/Nike-Air-Max-90-Home--Away-Red.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591160660",
      "smallImageUrl": "https://stockx.imgix.net/Nike-Air-Max-90-Home--Away-Red.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591160660",
      "thumbUrl": "https://stockx.imgix.net/Nike-Air-Max-90-Home--Away-Red.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591160660"
    },
    "releaseDate": "2020-06-06 23:59:59",
    "retailPrice": 130,
    "styleId": "CJ0611-101",
    "title": "Nike Air Max 90 Home & Away Red",
    "year": 2020
  },
  {
    "id": "dee2fd06-271b-4960-9c39-793e40c4898e",
    "brand": "Nike",
    "colorway": "Black/University Red-White",
    "gender": "men",
    "media": {
      "imageUrl": "https://stockx.imgix.net/Nike-KD-13-Bred.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591072775",
      "smallImageUrl": "https://stockx.imgix.net/Nike-KD-13-Bred.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591072775",
      "thumbUrl": "https://stockx.imgix.net/Nike-KD-13-Bred.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591072775"
    },
    "releaseDate": "2020-06-05 23:59:59",
    "retailPrice": 150,
    "styleId": "CI9948-002",
    "title": "Nike KD 13 Bred",
    "year": 2020
  },
  {
    "id": "6bd1a597-eaaa-46d3-9032-73680ff045fd",
    "brand": "adidas",
    "colorway": "Core Black/Core Black/Solar Red",
    "gender": "men",
    "media": {
      "imageUrl": "https://stockx.imgix.net/adidas-Microbounce-T1-Core-Black-Solar-Red.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590036214",
      "smallImageUrl": "https://stockx.imgix.net/adidas-Microbounce-T1-Core-Black-Solar-Red.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590036214",
      "thumbUrl": "https://stockx.imgix.net/adidas-Microbounce-T1-Core-Black-Solar-Red.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590036214"
    },
    "releaseDate": "2020-06-05 23:59:59",
    "retailPrice": 160,
    "styleId": "EF4881",
    "title": "adidas Microbounce T1 Core Black Solar Red",
    "year": 2020
  },
  {
    "id": "d98c1625-5ad6-414a-a081-9f6224e42be9",
    "brand": "Nike",
    "colorway": "White/University Red-Black",
    "gender": "men",
    "media": {
      "imageUrl": "https://stockx.imgix.net/Nike-LeBron-17-NYC-Graffiti.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1588046041",
      "smallImageUrl": "https://stockx.imgix.net/Nike-LeBron-17-NYC-Graffiti.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1588046041",
      "thumbUrl": "https://stockx.imgix.net/Nike-LeBron-17-NYC-Graffiti.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1588046041"
    },
    "releaseDate": "2020-06-05 23:59:59",
    "retailPrice": 200,
    "styleId": "CT6052-100",
    "title": "Nike LeBron 17 Graffiti",
    "year": 2020
  },
  {
    "id": "53db49cb-bcc7-4dcc-82d6-7efc59bbfa93",
    "brand": "Nike",
    "colorway": "Multi-Color/Black-White",
    "gender": "men",
    "media": {
      "imageUrl": "https://stockx.imgix.net/Nike-Air-Max-2090-Be-True-2020.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591161526",
      "smallImageUrl": "https://stockx.imgix.net/Nike-Air-Max-2090-Be-True-2020.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591161526",
      "thumbUrl": "https://stockx.imgix.net/Nike-Air-Max-2090-Be-True-2020.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1591161526"
    },
    "releaseDate": "2020-06-05 23:59:59",
    "retailPrice": 150,
    "styleId": "CZ4090-900",
    "title": "Nike Air Max 2090 Be True (2020)",
    "year": 2020
  },
  {
    "id": "0595cf0f-5ad7-496f-a9a6-1392bf699906",
    "brand": "Nike",
    "colorway": "Black/Summit White-Menta-Orange Trans",
    "gender": "men",
    "media": {
      "imageUrl": "https://stockx.imgix.net/Nike-Air-Zoom-Type-Menta.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590638500",
      "smallImageUrl": "https://stockx.imgix.net/Nike-Air-Zoom-Type-Menta.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590638500",
      "thumbUrl": "https://stockx.imgix.net/Nike-Air-Zoom-Type-Menta.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590638500"
    },
    "releaseDate": "2020-06-05 23:59:59",
    "retailPrice": null,
    "styleId": "CJ2033-010",
    "title": "Nike Air Zoom Type Menta",
    "year": 2020
  },
  {
    "id": "496caf39-1960-41c5-a016-ccafe0204323",
    "brand": "Nike",
    "colorway": "Summit White/Ashen Slate-Summit White-Electric Green",
    "gender": "men",
    "media": {
      "imageUrl": "https://stockx.imgix.net/Nike-Air-Zoom-Type-Summit-White.png?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590638501",
      "smallImageUrl": "https://stockx.imgix.net/Nike-Air-Zoom-Type-Summit-White.png?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590638501",
      "thumbUrl": "https://stockx.imgix.net/Nike-Air-Zoom-Type-Summit-White.png?fit=fill&bg=FFFFFF&w=140&h=100&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1590638501"
    },
    "releaseDate": "2020-06-05 23:59:59",
    "retailPrice": null,
    "styleId": "CJ2033-100",
    "title": "Nike Air Zoom Type Summit White",
    "year": 2020
  },
];

export default ProductsColumn