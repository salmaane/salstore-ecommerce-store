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
  }
  function handleNextPage() {
    setPage(prev=>prev+1);
  }
  
  let pagination= "?_page="+ page +"&_limit=21";
  const {data: products} = useFetch("http://localhost:3000/products/"+pagination); 

  return (
    <div className="products-column">
        <p className="results">RESULTS <span>{products.length}</span></p>
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
            className="next"
            disabled={products.length < 21}
            onClick={handleNextPage}
          >
          Next <NavigateNextOutlinedIcon/>
          </button>
        </nav>
    </div>
  )
}


export default ProductsColumn