import { useLocation } from "react-router-dom";
import { useState } from "react";
import ImagesBox from "../components/productDetails/ImagesBox.jsx";
import "../styles/productDetails.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined.js";

function ProductDetails() {

  const {state} = useLocation();
  const [count,setCount] = useState(1);

  function handleDecrement() {
    if(count == 1) return;
    setCount(prev => prev-1);
  }
  function handleIncrement() {
    if(count == 9) return;
    setCount(prev => prev+1);
  }

  return (
    <div className="productDetails-container">
      <ImagesBox image={state.media} />
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
          <h2 className="price">${state.retailPrice}</h2>
          <p className="old-price">$220</p>
        </div>

        <div className="add-to-cart-container">
          <div className="count-container">
            <span className="minus" onClick={handleDecrement} >-</span>
            <span className="count">{count}</span>
            <span className="plus" onClick={handleIncrement} >+</span>
          </div>
          <button className="add-button">
              Add to Cart
            <ShoppingCartOutlinedIcon className="cart-icon"/>  
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails