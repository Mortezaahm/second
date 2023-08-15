import React from 'react'
import { Link , useParams } from 'react-router-dom'
import products from '../data';
function SingleProduct() {
  const {productId} = useParams();
  const product = products.find((product) => product.id === productId);
  const {image, name} = product;
  return (
    <div className='single-product'>
      <h1>{name}</h1>
      <img src={image} alt="" />
      <Link to="/products">Back to Products</Link>
    </div>
  )
}

export default SingleProduct
