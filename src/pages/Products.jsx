import "../styles/products.css";
import FilterPanel from "../components/productsPage/FilterPanel.jsx";
import ProductsColumn from "../components/productsPage/ProductsColumn.jsx";
import { useFiltersContext } from "../contexts/FiltersContext.jsx";

function Products() {

  const {
    sort,
    brands, handleBrandsCheck,
    genders, handleGendersCheck,
    colors, handleColorToggle,
    priceRange, handlePriceRange 
  } = useFiltersContext();

  return (
    <div className="products-page-container">
      <div className="products-filter-header">
        <h2 className="products-filter-title" >
          {sort === "desc" ? 'NEW RELEASES' : 'ALL SNEAKERS'}
          </h2>
        <p className="filter-description"></p>
      </div>
      <section className="products-page-body">
        <FilterPanel
          brand={{brands, handleBrandsCheck}}
          gender={{genders, handleGendersCheck}}
          color={{colors, colorOptions, handleColorToggle}}
          price={{priceRange, handlePriceRange}}
        />
        <ProductsColumn
          brands={brands}
          genders={genders}
          colors={colors}
          priceRange={priceRange}
        />
      </section>
    </div>
  )
}

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