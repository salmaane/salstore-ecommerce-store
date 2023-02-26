import "../../styles/filterPanel.css";
import {useState} from "react";
import CheckboxFilter from "../Filters/CheckboxFilter";
import ToggleFilter from "../Filters/ToggleFilter";
import SliderFilter from "../Filters/SliderFilter";


function Filterpanel() {

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

  const [colors,setColors] = useState(null);
  function handleColorToggle(e,newColors) {
    setColors(newColors);
  }

  const [priceRange,setPriceRange] = useState([0,1000]);
  function handlePriceRange(e,newRange) {
    setPriceRange(newRange);
  }

  return (
    <div className="filter-container">
        <h5>FILTER</h5>
        
        <div className="brand filter">
          <p className="name">Brand</p>
          <CheckboxFilter 
            options={brands}
            handleBrandCheck={handleBrandsCheck}
            />
        </div>

        <div className="gender filter">
          <p className="name">Gender</p>
          <CheckboxFilter 
            options={genders}
            handleBrandCheck={handleGendersCheck}
            />
        </div>

        <div className="color filter">
          <p className="name">Color</p>
          <ToggleFilter
            colors={colors}
            handleToggle={handleColorToggle}
            options={colorOptions}
          />
        </div>

        <div className="price filter">
          <p className="name">Price ($)</p>
          <SliderFilter
            value={priceRange}
            handleRange={handlePriceRange}
          />
        </div>
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

export default Filterpanel