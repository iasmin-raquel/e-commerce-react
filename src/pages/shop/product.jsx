import React from 'react'

export const Product = (props) => {
  const {productName, price, productImage} = props.data
  return (
    <div className='product'>
      <img alt='' src={productImage} />
      <div className='description' >
        <p> <b> {productName}</b> </p>
        <p> ${price} </p>
        <button className='addToCartBttn' >Add to cart</button>
      </div>
    </div>
  )
}
