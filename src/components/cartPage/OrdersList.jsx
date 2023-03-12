import "../../styles/cartpage.css";
import ItemCount from "../../components/productDetails/ItemCount";
import {Link} from 'react-router-dom';


function OrdersList({cartItems,getItemQuantity,incrementCart,decrementCart}) {


  return (
    <table className="orders-list">
        <thead>
        <tr>
            <th colSpan={2}>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th style={{paddingRight:'0'}}>Subtotal</th>
        </tr>
        </thead>
        <tbody>
        {cartItems.map(item => (
            <tr className="order-container" key={item.id}>
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
            <td className="order-price"><h4>${item.retailPrice}</h4></td>
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