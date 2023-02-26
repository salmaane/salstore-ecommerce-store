import "../styles/productCard.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


function ProductCard({item}) {
  return (
    <div className='item-card'>
        <img src={item.media.thumbUrl}
        className='thumb'
        alt=""
        />
        <p className='brand'>{item.brand}</p>
        <h3 className='title'>{item.title}</h3>
        <h4 className='price'>${item.retailPrice || 140}</h4>
        <button className="add-to-cart">
          Add to Cart
          <ShoppingCartOutlinedIcon className="cart-icon"/>  
        </button>
  </div>
  )
}

export default ProductCard