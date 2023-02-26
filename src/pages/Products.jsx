import "../styles/products.css";
import FilterPanel from "../components/productsPage/FilterPanel";
import ProductsColumn from "../components/productsPage/ProductsColumn";

function Products() {
  return (
    <div className="products-page-container">
      <div className="products-filter-header">
        <h2 className="products-filter-title" >ALL SNEAKERS</h2>
        <p className="filter-description">Lorem Ipsum is simply dummy text of the printing
           and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s
        </p>
      </div>
      <section className="products-page-body">
        <FilterPanel/>
        <ProductsColumn/>
      </section>
    </div>
  )
}

export default Products