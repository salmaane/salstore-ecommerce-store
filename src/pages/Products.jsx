import { useState } from "react";
import "../styles/products.css";
import FilterPanel from "../components/productsPage/FilterPanel";
import ProductsColumn from "../components/productsPage/ProductsColumn";

function Products() {

  const [brands,setBrands] = useState(brandOptions);
  function handleBrandsCheck(id) {
    setBrands(brands.map( brand => (
      brand.id !== id ? brand : {...brand,checked: !brand.checked}
    ) ));
  }

  const [genders,setGenders] = useState(genderOptions);
  function handleGendersCheck(id) {
    setGenders(genders.map( gender => (
      gender.id !== id ? gender : {...gender,checked: !gender.checked}
    ) ));
  }

  const [colors,setColors] = useState([]);
  function handleColorToggle(e,newColors) {
    setColors(newColors);
  }

  const [priceRange,setPriceRange] = useState([0,300]);
  function handlePriceRange(e,newRange) {
    setPriceRange(newRange);
  }

  return (
    <div className="products-page-container">
      <div className="products-filter-header">
        <h2 className="products-filter-title" >ALL SNEAKERS</h2>
        <p className="filter-description">Lorem Ipsum is simply dummy text of the printing
           and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s
        </p>
      </div>
      <section className="products-page-body">
        <FilterPanel
          brand={{brands, handleBrandsCheck}}
          gender={{genders, handleGendersCheck}}
          color={{colors, colorOptions, handleColorToggle}}
          price={{priceRange, handlePriceRange}}
        />
        <ProductsColumn
          colors={colors}
        />
      </section>
    </div>
  )
}

const brandOptions = [
  {
    id:1,
    checked:false,
    label:"Nike"
  },
  {
    id:2,
    checked:false,
    label:"Adidas"
  },
  {
    id:3,
    checked:false,
    label:"New balance"
  },
  {
    id:4,
    checked:false,
    label:"Converse"
  },
];
const genderOptions = [
  {
    id:1,
    checked:false,
    label:"Men",
  },
  {
    id:2,
    checked:false,
    label:"Women",
  },
  {
    id:3,
    checked:false,
    label:"Child",
  },
]
const colorOptions = [
  {
    id:1,
    label:'Black',
    color:'black'
  },
  {
    id:2,
    label:'White',
    color:'white'
  },
  {
    id:3,
    label:'Green',
    color:'green'
  },
  {
    id:4,
    label:'Red',
    color:'red'
  },
  {
    id:5,
    label:'Yellow',
    color:'yellow'
  },
  {
    id:6,
    label:'Blue',
    color:'blue'
  },
];

export default Products