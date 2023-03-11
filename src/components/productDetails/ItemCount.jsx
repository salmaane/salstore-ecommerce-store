import React from 'react'
import "../../styles/productDetails.css"

function ItemCount({handleIncrement,handleDecrement,count,item}) {

  return (
  <div className="count-container">
    <span className="minus" onClick={()=>handleDecrement(item.id)} >-</span>
    <span className="count">{count}</span>
    <span className="plus" onClick={()=> item ? handleIncrement(item): handleDecrement()} >+</span>
  </div>
  )
}

export default ItemCount