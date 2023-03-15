import '../../styles/productsSection.css';
import ProductCard from '../ProductCard.jsx';
import {Link} from "react-router-dom";
import { useFetch } from '../../customHooks/useFetch.js';
import {useFiltersContext} from '../../contexts/FiltersContext.jsx'
import CardSkeleton from "../CardSkeleton.jsx";


function ProductsSection({header, buttonText,sort,query}) {

  const {data: sneakersData , loading} = useFetch("http://localhost:3000/products/?_limit=8&_sort=releaseDate&_order="+sort+query);

  const {setSort} = useFiltersContext();
  return (
    <section className='products-section'>
      <h1>{header}</h1>
      <div className='products-wrapper'>
        { loading ? 
          <CardSkeleton count={8} /> 
          :
          sneakersData.map( item => (
            <ProductCard item={item} key={item.id}/>
          ))
        }
      </div>
        {
          buttonText && 
          <button className='shop-button'>
          <Link 
            to="products" 
            onClick={()=> {
              window.scrollTo(0,0);
              setSort(sort);
            }}
          >
            {buttonText}
          </Link>
        </button>
        }
    </section>
  )
}

export default ProductsSection;