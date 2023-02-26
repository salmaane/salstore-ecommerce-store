import "../styles/products.css";
import FilterPanel from "../components/productsPage/FilterPanel";
import ProductsColumn from "../components/productsPage/ProductsColumn";

function Products() {
  return (
    <div className="products-page-container">
      <div className="products-filter-header">
        <h2 className="products-filter-title" >SHOP ALL SNEAKERS</h2>
      </div>
      <section className="products-page-body">
        <FilterPanel/>
        <ProductsColumn/>
      </section>
    </div>
  )
}

export default Products