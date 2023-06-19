import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import StudentDetails from './StudentDetails'
import PaymentDetails from './PaymentDetails'
import Success from './Success'
import Loading from './Loading'


const Reservation = () => {
  const [stepNum, setStepNum] = useState(1)
  

  return (
    <div className='bg-primary w-full py-12 px-6'>
      <div className='bg-white w-3/6 m-auto flex flex-col gap-16 py-8 rounded-lg text-primary'>
        <h1 className='text-center font-[Montserrat-Arabic] font-semibold text-[35px] leading-[42.66px]' >طلب الخدمة</h1>
        <div className='flex justify-center items-center'>
          <h1 className='w-12 h-12 text-2xl text-white bg-primary flex justify-center items-center rounded-full'>1</h1>
          <div className='w-8 h-1 bg-primary'></div>
          <h2 className='w-12 h-12 text-2xl text-white bg-primary flex justify-center items-center rounded-full'>2</h2>
        </div>

        {
          stepNum === 1 ?  <StudentDetails  setStepNum={setStepNum} stepNum={stepNum} />
        :
          stepNum === 2 ?  <PaymentDetails setStepNum={setStepNum} stepNum={stepNum} />
        :
          stepNum === 3 ?  <Loading setStepNum={setStepNum} stepNum={stepNum} />
        :
          stepNum === 4 &&  <Success setStepNum={setStepNum} stepNum={stepNum} />
        }

        

        


       
      </div>
      
    </div>
  )
}

export default Reservation