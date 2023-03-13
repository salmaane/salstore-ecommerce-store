import "../../styles/cartTotals.css";
import { useState } from "react";

function CartTotals({cartTotal}) {

    const [hideShipping, setHideShipping] = useState(true);
    let shipClassName = hideShipping ? "shipping-adress hide":"shipping-adress"; 
  
    const [shippingAdress,setShippingAdress] = useState("Shipping options will be updated during checkout.");
    function handleShippingUpdate(e) {
      e.preventDefault();
    }

  return (
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
            <p>{shippingAdress}</p>
            <button 
            onClick={()=> setHideShipping(!hideShipping)}
            >Calculate shipping
            </button>
            <div className={shipClassName}>
                <form>
                    <input type="text" placeholder="Country"/>
                    <input type="text" placeholder="City"/>
                    <input type="text" placeholder="Postcode/ZIP"/>
                    <button onClick={handleShippingUpdate} >UPDATE</button>
                </form>
            </div>
        </div>
        </div>
        <div className="total">
            <h3>Total</h3>
            <h2>${cartTotal}</h2>
        </div>
        <button>PROCEED TO CHECKOUT</button>
    </div>
  )
}

export default CartTotals