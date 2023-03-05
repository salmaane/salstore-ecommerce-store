import { useParams } from "react-router-dom"


function ProductDetails() {

    const {id} = useParams();

  return (
    <div>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
            <h1>{id}</h1>
    </div>
  )
}

export default ProductDetails