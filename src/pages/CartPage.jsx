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
  } = useShoppingCartContext();

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
        />
        <div className="cart-totals">
          
        </div>
        </>
      }
    </div>
  )
}

export default CartPage