import React from 'react'
import { useNavigate } from 'react-router-dom';

const Success = ({stepNum, setStepNum}) => {
    console.log('helooooooooooo')
    const navigate = useNavigate()
    // AFTER 5 SECONDS REDIRECT THE USER TO THE HOME PAGE
    setTimeout(() => navigate('/'), 5000);
  return (
    <div>Success yeeeeeeeeeeeeees</div>
  )
}

export default Success