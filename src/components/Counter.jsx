import React, { useState } from 'react'

const Counter = ()=>{
    const [count, setCounter] = useState(0);

    return (
        <div>
            <h2>Counter</h2>
            <p>current count : {count}</p>
            <button className='btn' onClick={()=> setCounter(count+1)}>
                Increase the Counter
            </button>
          
        </div>
      )
}

export default Counter
