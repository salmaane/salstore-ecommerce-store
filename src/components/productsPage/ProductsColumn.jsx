// hooks
import { useState } from "react";
import {useFetch} from "../../customHooks/useFetch.js";
import { useFiltersContext } from "../../contexts/FiltersContext.jsx";
//Components
import CardSkeleton from '../CardSkeleton.jsx';
import ProductCard from "../ProductCard.jsx"
import {getToggleFilterQuery} from '../Filters/ToggleFilter.jsx';
import { getCheckboxFilterQuery } from "../Filters/CheckboxFilter.jsx";
// icons
import "../../styles/productColumn.css";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';


function ProductsColumn({brands, genders, colors, priceRange}) {

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


  const {sort,setSort} = useFiltersContext();

  const brandQuery = getCheckboxFilterQuery(brands, "&brand_like=");
  const genderQuery = getCheckboxFilterQuery(genders, "&gender=")
  const colorQuery = getToggleFilterQuery(colors,"&colorway_like=");
  const priceQuery = "&retailPrice_gte="+priceRange[0] + "&retailPrice_lte="+priceRange[1];
  const sortQuery = "&_sort=releaseDate&_order="+ sort;

  const filters = brandQuery + genderQuery + colorQuery + priceQuery + sortQuery;
  const pagination= "?_page="+ page +"&_limit=21";
  const {data: products, totalCount, loading} = useFetch(import.meta.env.VITE_PRODUCTS_FETCH_LINK+"/"+pagination+filters); 
  const totalPages = Math.ceil(totalCount/21);

  return (
    <div className="products-column">
        { totalCount==0 ? null :
          <div className="sort-results">
          <label htmlFor="sort" >Sort by:
            <select name="sort" id="sort" value={sort} onChange={(e)=> setSort(e.target.value)} >
                <option value="asc" >Default</option>
                <option value="desc" >Newest</option>
              </select>
          </label>
            <p className="results">RESULTS <span>{totalCount}</span></p>
          </div>
        }
        
        { loading ? <CardSkeleton count={totalCount < 21 ? totalCount : 21} />
          :
          products.map( (product) => (
            <ProductCard 
              key={product.id}
              item={product}
            />
          ))
        }

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