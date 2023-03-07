import { useLocation } from "react-router-dom"
import ImagesBox from "../components/productDetails/ImagesBox.jsx";
import "../styles/productDetails.css";

function ProductDetails() {

  const {state} = useLocation();

  return (
    <div className="productDetails-container">
      <ImagesBox image={state.media} />
    </div>
  )
}

export default ProductDetails