import React, { useState } from 'react'

import { Link } from "react-router-dom"
const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  return (
    <div className="container">
      <div className="container-login">
        <div className="box">
          <div>Login</div>
        </div>
        <div className="content">
          <form>
            <div className="email">
              <input 
              type="email" 
              id="email" 
              name='email' 
              placeholder='Email ID' 
              spellCheck="false" 
              autoComplete='true' required
               onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="password">
              <input 
              type="password" 
              id="password" 
              name='password' 
              placeholder='Password'
               onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="submit-btn">
              <input 
              type="submit"
               value={"Login"}
                className='submit' />
            </div>
            <div className="forgot-btn">
              <Link className=' submit' 
              type="submit"
               value={"Forgot Password"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login