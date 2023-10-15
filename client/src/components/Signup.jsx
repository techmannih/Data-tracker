import React from 'react'

import { Link } from "react-router-dom"
const Signup = () => {

  const [username, setUsername] = useState('')
  const [emailid, setEmailid] = useState('')
  const [password, setPassword] = useState('')

  async function handleSignup(e) {
    e.preventDefault()

    setIsloading(true)

  const response=await fetch(`http://localhost:2345/api/register`,{
    method:'POST',
    headers:{
     'content-type':'application/json',
    },
    body:JSON.stringify({
      username,
      email,
      password,
    }),
  })
response.json({ extended: false })
  
if (response.ok) {
  navigate('/')
}else{
  alert("Fill correct your password and username")
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
              value={username}
              placeholder='Your Name' 
              spellCheck="false" 
              autoComplete='false' 
              onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="">
              <input type="email" 
              id="email" 
              name='email' 
              
              value={emailid}
              placeholder='Email ID' 
              spellCheck="false" 
              autoComplete='true' 
              onChange={(e) => setEmailid(e.target.value)} />
            </div>
            <div className="">
              <input type="password" 
              id="password" 
              name='password' 
              
              value={password}
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