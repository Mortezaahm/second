import React, { useEffect, useState } from 'react'
import { useFetch } from './useFetch';
import Product from './product'
//const url = 'https://jsonplaceholder.typicode.com/photos'

function CustomHook() {

    const {products} = useFetch();

  return (
    <div>
        {
            products.map((product)=>{
                return (<Product key={product.id} {...product} />)
            })
        }
      {/* <h2>{loading ? 'loading' : 'data'}</h2> */}
    </div>
  );
}

export default CustomHook
