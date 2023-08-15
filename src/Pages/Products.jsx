import React from 'react'
import products from '../data'
import { Link } from 'react-router-dom'

const Products= ()=> {
  return (
    <div className='products'>
      {
        products.map((product) => {
          return (
            <div className="product" key={product.id}>
              <h5>{product.name}</h5>
              <img src={product.image} alt=''/>
              <Link to={`/products/${product.id}`} className='product-link'>Show Product</Link>
            </div>
          )
        })
      }
    </div>
  )
}

export default Products
