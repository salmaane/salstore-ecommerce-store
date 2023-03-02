import "../../styles/productColumn.css";
import ProductCard from "../ProductCard.jsx"
import {useFetch} from "../../customHooks/useFetch";
import { useState } from "react";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';

function ProductsColumn({colors}) {

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
  
  const filters = "&brand_like=&gender_like=&colorway_like=&retailPrice_gte=&retailPrice_lte=300"; // for filterPanel
  const pagination= "?_page="+ page +"&_limit=21";                                              // For products navigation
  const {data: products, totalCount} = useFetch("http://localhost:3000/products/"+pagination+filters); 
  const totalPages = Math.ceil(totalCount/21);

  return (
    <div className="products-column">
        <p className="results">RESULTS <span>{totalCount}</span></p>
        
        {products.map( (product) => (
          <ProductCard 
            key={product.id}
            item={product}
          />
        ) )}

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
    </div>
  )
}


export default ProductsColumn