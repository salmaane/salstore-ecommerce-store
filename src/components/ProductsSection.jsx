import '../styles/productsSection.css';
import ProductCard from './ProductCard';


function ProductsSection({sneakersData, header, buttonText}) {
  return (
    <section className='products-section'>
      <h1>{header}</h1>
      <div className='products-wrapper'>
        {sneakersData.map( item => (
          <ProductCard item={item} key={item.id}/>
        ))}
      </div>
      <button className='shop-button'>{buttonText}</button>
    </section>
  )
}

export default ProductsSection;