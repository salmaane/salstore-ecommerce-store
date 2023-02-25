import '../../styles/productsSection.css';
import ProductCard from '../ProductCard';
import {Link} from "react-router-dom";

function ProductsSection({sneakersData, header, buttonText}) {
  return (
    <section className='products-section'>
      <h1>{header}</h1>
      <div className='products-wrapper'>
        {sneakersData.map( item => (
          <ProductCard item={item} key={item.id}/>
        ))}
      </div>
      <button className='shop-button'><Link to="products">{buttonText}</Link></button>
    </section>
  )
}

export default ProductsSection;