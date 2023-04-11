import "../../styles/filterPanel.css";
import CheckboxFilter from "../Filters/CheckboxFilter.jsx";
import ToggleFilter from "../Filters/ToggleFilter.jsx";
import SliderFilter from "../Filters/SliderFilter.jsx";
import { useFiltersContext } from "../../contexts/FiltersContext";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";


function Filterpanel({brand, gender, color, price}) {

  const {
    clearFilters,
    brands,genders,
    colors,priceRange
  } = useFiltersContext();

  let isFilterActive = colors.length > 0 || (priceRange[0] !== 0 || priceRange[1] !== 300);
  brands.forEach(brand => {
    brand.checked ? isFilterActive=true:null;
  });
  genders.forEach(gender => {
    gender.checked ? isFilterActive=true:null;
  });

  const [isClosed,setIsClosed] = useState(false);
  
  return (
    <div className={isClosed ? "filter-container isClosed":"filter-container"}>
        { isFilterActive ?
          <button 
            className="clear-filter"
            onClick={clearFilters}
          ><p>Clear Filters</p></button>
          : null
        }
        <div className="filter-dropdown">
          <h4>FILTER</h4>
          <KeyboardArrowDownIcon onClick={()=> setIsClosed(!isClosed)} />
        </div>
        
        <div className="brand filter">
          <p className="name">Brand</p>
          <CheckboxFilter 
            options={brand.brands}
            handleBrandCheck={brand.handleBrandsCheck}
            />
        </div>

        <div className="gender filter">
          <p className="name">Gender</p>
          <CheckboxFilter 
            options={gender.genders}
            handleBrandCheck={gender.handleGendersCheck}
            />
        </div>

        <div className="color filter">
          <p className="name">Color</p>
          <ToggleFilter
            colors={color.colors}
            handleToggle={color.handleColorToggle}
            options={color.colorOptions}
          />
        </div>

        <div className="price filter">
          <p className="name">Price ($)</p>
          <SliderFilter
            value={price.priceRange}
            handleRange={price.handlePriceRange}
          />
        </div>
    </div>
  )
}






export default Filterpanel