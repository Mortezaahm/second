import React, { useState } from 'react'
import Counter from './Counter';

function Lifecycle() {

    const [showCounter, setShowCounter] = useState(false);


  return (
    <div>
        <h1>Our App</h1>
        <button className='btn' onClick={()=> setShowCounter (!showCounter)}>
            {showCounter ? "Hide Counter" : "Show Counter"}
        </button>
        {showCounter && <Counter/>}
    </div>
  )
}

export default Lifecycle
