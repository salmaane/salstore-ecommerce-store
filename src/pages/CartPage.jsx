import "../styles/cartpage.css";
import {useShoppingCartContext} from "../contexts/ShoppingCartContext";
import ItemCount from "../components/productDetails/ItemCount";

function CartPage() {

  const {
    cartItems,
    getItemQuantity,
    incrementCart,
    decrementCart,
  } = useShoppingCartContext();

  return (
    <div className="cartpage-container">
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
                <td><img src={item.thumb} className="order-thumb" /></td>
                <td className="order-title">
                  <p>{item.title}</p>
                  <p style={{fontWeight:'bold',fontSize:'0.8rem',marginTop:'0.5rem'}}>{item.brand}</p>
                </td>
                <td className="order-price"><h4>${item.price}</h4></td>
                <td>
                  <ItemCount 
                  count={getItemQuantity(item.id)}
                  handleIncrement={incrementCart}
                  handleDecrement={decrementCart}
                  item={item}
                  />
                </td>
                <td className="order-subtotal"><h4>${getItemQuantity(item.id)*item.price}</h4></td>
              </tr> 
            ))}
          </tbody>
      </table>
      <div className="cart-totals"></div>
    </div>
  )
}

export default CartPage