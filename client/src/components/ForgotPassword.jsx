import React from 'react'
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {
  const navigate = useNavigate()
  return (
    <div className="container">
      <div className="box">
        <div className="center">
          Please write your query to <strong>Techmannih</strong>
          <div className="mail">
            <a href="mailto:manishchaudharyttt@gmail.com">manishchaudharyttt@gmail.com</a>
          </div>
          <div className="mail">
            <a href="https://twitter.com/techmannih">Twiter ( Techmannih )</a>
          </div>
          <div className="mail">
            <a href="https://linkedin.com/in/techmannih">Linked In ( Techmannih )</a>
          </div>
        </div>
        <div className="details btn">
          <input type="button" value={"Back to Login"} onClick={()=> navigate('/')}/>
        </div>
      </div>
    </div>
  )
}

export default ForgotPassword