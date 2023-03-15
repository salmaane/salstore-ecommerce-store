import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useShoppingCartContext } from "../contexts/ShoppingCartContext.jsx";
// components
import ImagesBox from "../components/productDetails/ImagesBox.jsx";
import ProductsSection from "../components/home/ProductsSection.jsx";
// styles
import "../styles/productDetails.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined.js";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function ProductDetails() {

  const {state} = useLocation();
  const [hidden,setHidden] = useState(true);

  const [count,setCount] = useState(1);
  function handleDecrement() {
    if(count == 1) return;
    setCount(prev => prev-1);
  }
  function handleIncrement() {
    if(count == 9) return;
    setCount(prev => prev+1);
  }

  const {incrementCart} = useShoppingCartContext();

  return (
    <>
      <div className="productDetails-container">
        <ImagesBox image={state.media} key={state.id}/>
        <div className="details-container" >
          <p className="brand">{state.brand}</p>
          <h1 className="title" >{state.title}</h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Quidem nulla, tenetur dignissimos, quia voluptatum laboriosam
            architecto natus aperiam perferendis ducimus quibusdam,
            atque omnis? Explicabo quaerat placeat non provident
            exercitationem praesentium!
          </p>

          <div className="price-container">
            <h3 className="price">${state.retailPrice}</h3>
            <p className="old-price">$220</p>
          </div>

          <div className="add-to-cart-container">
          <div className="count-container">
            <span className="minus" onClick={handleDecrement}>-</span>
            <span className="count">{count}</span>
            <span className="plus" onClick={handleIncrement} >+</span>
          </div>
            <button className="add-button" onClick={()=>incrementCart(state,count)}>
                Add to Cart
              <ShoppingCartOutlinedIcon className="cart-icon"/>  
            </button>

          </div>
          <article className="return-container">
            <div className="drop-button" onClick={()=> setHidden(!hidden)}>
              <h5>SHIPPING & RETURNS</h5>
              <KeyboardArrowDownIcon />
            </div>
            <p className={hidden ? "return-text hidden" : "return-text"} >
              At our sneaker online store, we take pride in providing our
              customers with high-quality products and exceptional customer service.
              When it comes to shipping, we aim to get your new kicks to you as
              quickly as possible. We offer free standard shipping on all orders
              and also provide expedited shipping options for an additional fee.
              <br/>
              We understand that sometimes things don't work out, and we want you to
              be completely satisfied with your purchase. That's why we offer hassle-free
              returns within 30 days of purchase. If you're not happy with your sneakers
              for any reason, simply contact us to initiate a return, and we'll provide you
              with a pre-paid shipping label. Once we receive your returned item, we'll
              issue a full refund or exchange your sneakers for a different size or style.
              Customer satisfaction is our top priority, and we're committed to making sure
              you love your new sneakers from our online store.
            </p>
          </article>
        </div>
      </div>
      <ProductsSection 
        buttonText={null}
        header={"RECOMMENDED FOR YOU"}
        sort={"desc"}
        query={`&title_like=${state.brand}&title_ne=${state.title}`}
      />
    </>
  )
}

export default ProductDetails