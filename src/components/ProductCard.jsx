import "../styles/productCard.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from 'react-router-dom';

function ProductCard({item}) {
  return (
    <div className='item-card'>
        <Link 
          to={"/products/"+item.title}
          className='thumb'
          onClick={()=> window.scrollTo(0,0)}
        >
          <img src={item.media.thumbUrl} alt="" />
        </Link>
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