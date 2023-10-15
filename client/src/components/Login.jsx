import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";


import { Link } from "react-router-dom"
const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [isLoading, setIsloading] = useState(false)
  const navigate = useNavigate();




  async function rhandleLogin(e){
    e.preventDefault()

    
  setIsloading(true)


    const response=await fetch(`http://localhost:2345/api/register`,{
      method:'POST',
      headers:{
       'content-type':'application/json',
      },
      body:JSON.stringify({
        email,
        password,
      }),
    })
    
    const data =await response.json({ extended: false })

    if (response.ok) {
      document.cookie = "userToken=" + data.success;
      alert("Login successful")
      navigate('/home')

    }else{
      alert("Invaid your password and username")
    }
    console.log(data)

    setIsloading(false)

  }

  if (isLoading) {
    return (
      <AuthLoader />
    )
  }

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
              value={emailid}

              placeholder='Email ID' 
              spellCheck="false" 
              autoComplete='true' required
               onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="password">
              <input 
              type="password" 
              id="password" 
              value={password}

              name='password' 
              placeholder='Password'
               onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="submit-btn">
              <input 
              type="submit"
               value={"Login"}
                className='submit'
                onClick={handleSignup} />
            </div>
            <div className="forgot-btn">
              <Link className=' submit' 
              type="submit"
               value={"Forgot Password"} onClick={() => navigate('/forgot')} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login