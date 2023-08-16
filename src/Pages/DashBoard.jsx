import React from 'react'

function DashBoard({user}) {
  return (
    <div>
      <h1>DashBoard</h1>
      <h2>Hello, {user.name}</h2>
    </div>
  )
}

export default DashBoard
