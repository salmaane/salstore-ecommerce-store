import "../../styles/productColumn.css";
import ProductCard from "../ProductCard.jsx"
import {useFetch} from "../../customHooks/useFetch";
import { useState } from "react";
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';

function ProductsColumn() {

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
  
  let pagination= "?_page="+ page +"&_limit=21";
  const {data: products, totalCount} = useFetch("http://localhost:3000/products/"+pagination); 
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
          <p className="page-number">{page} of {totalPages}</p>
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