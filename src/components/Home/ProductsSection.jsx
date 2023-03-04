import '../../styles/productsSection.css';
import ProductCard from '../ProductCard';
import {Link} from "react-router-dom";
import { useFetch } from '../../customHooks/useFetch';



function ProductsSection({header, buttonText,sort}) {

  const {data: sneakersData , loading} = useFetch("http://localhost:3000/products/?_limit=8&_sort=releaseDate&_order="+sort);

  return (
    <section className='products-section'>
      <h1>{header}</h1>
      <div className='products-wrapper'>
        {sneakersData.map( item => (
          <ProductCard item={item} key={item.id}/>
        ))}
      </div>
      <button className='shop-button'>
        <Link 
          to="products" 
          onClick={()=> {
            window.scrollTo(0,0);
          }}
        >
          {buttonText}
        </Link>
      </button>
    </section>
  )
}

export default ProductsSection;