import React from 'react'

const Loading = ({stepNum, setStepNum}) => {
    console.log(stepNum)
    // AFTER 5 SECONDs REDIRECT THE USER TO THE SUCCESS COMPONENT
    setTimeout(() => setStepNum(stepNum+1), 5000);
  return (
    <div>Loading</div>
  )
}

export default Loading