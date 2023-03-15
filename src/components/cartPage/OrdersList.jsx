import "../../styles/ordersList.css";
import ItemCount from "../../components/productDetails/ItemCount.jsx";
import {Link} from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';


function OrdersList({cartItems,getItemQuantity,incrementCart,decrementCart,removeFromCart}) {


  return (
    <table className="orders-list">
        <thead>
        <tr>
            <th></th>
            <th colSpan={2}>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th style={{paddingRight:'0'}}>Subtotal</th>
        </tr>
        </thead>
        <tbody>
        {cartItems.map(item => (
          <tr className="order-container" key={item.id}>
            <td className="close-icon">
              <CloseIcon 
                fontSize="small"
                onClick={()=> removeFromCart(item.id)}
                sx={{cursor:'pointer',marginRight:'0.5rem'}}
              />
              </td>
            <td>
              <Link to={"/products/"+item.title} state={item}>
                <img src={item.media.thumbUrl} className="order-thumb" />
              </Link>
            </td>
            <td className="order-title">
                <Link to={"/products/"+item.title} state={item}>
                    <p>{item.title}</p>
                </Link>
                <p style={{fontWeight:'bold',fontSize:'0.8rem',marginTop:'0.5rem'}}>{item.brand}</p>
            </td>
            <td className="order-price"><p>${item.retailPrice}</p></td>
            <td>
                <ItemCount 
                count={getItemQuantity(item.id)}
                handleIncrement={incrementCart}
                handleDecrement={decrementCart}
                item={item}
                />
            </td>
            <td className="order-subtotal"><h4>${getItemQuantity(item.id)*item.retailPrice}</h4></td>
          </tr> 
        ))}
        </tbody>
    </table>
  )
}

export default OrdersList