import { useState } from "react";
import "../../styles/productColumn.css";
import ProductCard from "../ProductCard.jsx"
import {useFetch} from "../../customHooks/useFetch";
import {getToggleFilterQuery} from '../Filters/ToggleFilter';
import { getCheckboxFilterQuery } from "../Filters/CheckboxFilter";
// icons
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';

function ProductsColumn({brands,genders,colors,priceRange}) {

  const [page,setPage] = useState(1);
  function handleBackPage() {
    if(page == 1) return;
    setPage(prev=>prev-1);
    window.scrollTo(0,0);
  }
  function handleNextPage() {
    setPage(prev=>prev+1);
    window.scrollTo(0,0);
  }

  const brandQuery = getCheckboxFilterQuery(brands, "&brand_like=");
  const genderQuery = getCheckboxFilterQuery(genders, "&gender=")
  const colorQuery = getToggleFilterQuery(colors,"&colorway_like=");
  const priceQuery = "&retailPrice_gte="+priceRange[0] + "&retailPrice_lte="+priceRange[1];
  
  const filters = brandQuery + genderQuery + colorQuery + priceQuery;
  const pagination= "?_page="+ page +"&_limit=21";
  const {data: products, totalCount} = useFetch("http://localhost:3000/products/"+pagination+filters); 
  const totalPages = Math.ceil(totalCount/21);

  return (
    <div className="products-column">
        { totalCount==0 ? null :<p className="results">RESULTS <span>{totalCount}</span></p>}
        
        {products.map( (product) => (
          <ProductCard 
            key={product.id}
            item={product}
          />
        ) )}

        { totalCount == 0 ?
        <div className="no-results">
          <h4>NO RESULTS FOUND</h4>
          <p>Please check your filters or search for another sneaker</p>
        </div>
        :
        <nav className="page-nav">
          <button 
            className="back"
            disabled={page == 1}
            onClick={handleBackPage}
          >
            <ChevronLeftOutlinedIcon/>Back
          </button>
          <button 
            className="first"
            onClick={()=> {
              setPage(1)
              window.scrollTo(0,0);
            }}
            disabled={page == 1}
          >
            First page
          </button>
          
          <p className="page-number">{page} of {totalPages}</p>
          
          <button 
            className="last"
            onClick={()=> {
              setPage(totalPages)
              window.scrollTo(0,0);
            }}
            disabled={page == totalPages}
          >
            Last page
          </button>
          <button 
            className="next"
            disabled={page == totalPages}
            onClick={handleNextPage}
          >
          Next <NavigateNextOutlinedIcon/>
          </button>
        </nav>
        }
    </div>
  )
}


export default ProductsColumn