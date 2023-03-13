import "../styles/cartpage.css";
import {Link} from "react-router-dom";
import {useShoppingCartContext} from "../contexts/ShoppingCartContext";
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import CartTotals from "../components/cartPage/CartTotals";
import OrdersList from "../components/cartPage/OrdersList";


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
        <CartTotals cartTotal={cartTotal}/>
        </>
      }
    </div>
  )
}

export default CartPage