import React from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate()

    function handleclick() {
        document.cookie = "userToken="

        navigate('/')
    }

    return (
        <div className='logout-btn btn' onClick={handleclick}>
            Logout
        </div>
    )
}

export default Logout