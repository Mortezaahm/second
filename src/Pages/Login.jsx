import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Login({setUser}) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    if (!name || !email ) return;
    setUser ({name: name, email: email})
    navigate('/dashboard');
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input type="text" placeholder='name'
            onChange={(e)=> setName (e.target.value)}
          />
        </div>
        <div className="form-group">
          <input type="email" placeholder='email'
            onChange={(e)=> setEmail (e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type='submit' className='btn'>Login</button>
        </div>

      </form>
    </div>
  )
}

export default Login
