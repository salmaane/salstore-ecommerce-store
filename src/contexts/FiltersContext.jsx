import { createContext, useContext, useState, useRef } from "react";

const FiltersContext = createContext(null);

export function useFiltersContext() {
    return useContext(FiltersContext);
}


export function FiltersProvider({children}) {
    
    const [sort, setSort] = useState('asc');  
    const [search,setSearch] = useState('');
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
    const timeoutId = useRef(null);
    function handlePriceRange(e,newRange) {
      if(timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
      timeoutId.current = setTimeout(()=>setPriceRange(newRange),20);
    }

    function clearFilters() {
      setBrands(brands.map( brand => (
          {...brand,checked: false}
        ) ));
      setGenders(genders.map( gender => (
        {...gender,checked:false}
      ) ));
      setColors([]);
      setPriceRange([0,300]);
    }

    return (
        <FiltersContext.Provider value={{
            sort, setSort,
            brands, handleBrandsCheck,
            genders, handleGendersCheck,
            colors, handleColorToggle,
            priceRange, handlePriceRange,
            search,setSearch,
            clearFilters
        }} 
        >
          {children}
        </FiltersContext.Provider>
    );
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
    {
      id:5,
      checked:false,
      label:"Puma"
    },
    {
      id:6,
      checked:false,
      label:"Reebok"
    },
    {
      id:7,
      checked:false,
      label:"Vans"
    },
    {
      id:8,
      checked:false,
      label:"Jordan"
    },
  ];
const genderOptions = [
  {
    id:1,
    checked:false,
    label:"men",
  },
  {
    id:2,
    checked:false,
    label:"women",
  },
  {
    id:3,
    checked:false,
    label:"child",
  },
]
