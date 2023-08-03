import React, { useState } from 'react'

function Third() {

  const [loading, setLoading] = useState(false);

  if (loading){
    return <h1>Hello Morteza</h1>
  }

  return (
    <>
        <h2>Conditional Rendering</h2>
    </>
  )
}

export default Third;
