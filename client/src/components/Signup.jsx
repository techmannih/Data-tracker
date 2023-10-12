import React from 'react'

import { Link } from "react-router-dom"
const Signup = () => {

  const [userName, setUsername] = useState('')
  const [emailid, setEmailid] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="container">
      <div className="container-signup">
        <div className="box">
          <div>Sign Up</div>
        </div>
        <div className="content">
          <form>
            <div className="">
              <input type="text" 
              id="name" 
              name='name' 
              placeholder='Your Name' 
              spellCheck="false" 
              autoComplete='false' 
              onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="">
              <input type="email" 
              id="email" 
              name='email' 
              placeholder='Email ID' 
              spellCheck="false" 
              autoComplete='true' 
              onChange={(e) => setEmailid(e.target.value)} />
            </div>
            <div className="">
              <input type="password" 
              id="password" 
              name='password' 
              placeholder='Password' 
              onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className=" btn">
              <Link type="submit"
               value={"Sign Up"} 
               className='submit' />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup