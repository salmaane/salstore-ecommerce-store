import "../styles/cartpage.css";
import OrdersList from "../components/cartPage/OrdersList";
import {useShoppingCartContext} from "../contexts/ShoppingCartContext";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import {Link} from "react-router-dom";

function CartPage() {

  const {
    cartItems,
    getItemQuantity,
    incrementCart,
    decrementCart,
    removeFromCart,
    cartTotals,
  } = useShoppingCartContext();
  const cartTotal = cartTotals();

  return (
    <div className="cartpage-container">
      {cartItems.length === 0 ? 
        <div className="empty-cart">
          <ProductionQuantityLimitsIcon className="icon"/>
          <h1>Your cart is currently empty</h1>
          <p>Before proceed to checkout you must add some products to your shopping cart.</p>
          <Link to="/" >
            <button onClick={()=> window.scrollTo(0,0)}>RETURN TO SHOP</button>
            </Link>
        </div>
        : <>
        <OrdersList 
          cartItems={cartItems}
          getItemQuantity={getItemQuantity}
          incrementCart={incrementCart}
          decrementCart={decrementCart}
          removeFromCart={removeFromCart}
        />
        <div className="cart-totals">
          <h3>CART TOTALS</h3>
          <div className="subtotal">
            <p>Subtotal</p>
            <p>${cartTotal}</p>
          </div>
          <div className="shipping-container">
            <p>Shipping</p>
            <div className="shipping-options">
              <p>Free shipping</p>
              <p>Shipping options will be updated during checkout.</p>
              <button>Calculate shipping</button>
            </div>
          </div>
          <div className="total">
            <h3>Total</h3>
            <h2>${cartTotal}</h2>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        </>
      }
    </div>
  )
}

export default CartPage