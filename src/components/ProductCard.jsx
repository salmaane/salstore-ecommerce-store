import "../styles/productCard.css";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from 'react-router-dom';
import { useShoppingCartContext } from "../contexts/ShoppingCartContext";

function ProductCard({item}) {

  const {incrementCart} = useShoppingCartContext();

  return (
    <div className='item-card'>
        <Link 
          to={"/products/"+item.title}
          className='thumb'
          onClick={()=> window.scrollTo(0,0)}
          state={item}
        >
          <img src={item.media.thumbUrl} alt="" />
        </Link>
        <p className='brand'>{item.brand}</p>
        <Link  
          to={"/products/"+item.title} 
          style={{color:'black'}}
          onClick={()=> window.scrollTo(0,0)}
          state={item}
        >
          <h3 className='title'>{item.title}</h3>
        </Link>
        <h4 className='price'>${item.retailPrice || 140}</h4>
        <button className="add-to-cart" onClick={()=> incrementCart(item)}>
          Add to Cart
          <ShoppingCartOutlinedIcon className="cart-icon"/>  
        </button>
  </div>
  )
}

export default ProductCard