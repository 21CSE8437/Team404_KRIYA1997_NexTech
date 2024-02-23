import React from 'react'
import { useNavigate } from 'react-router-dom'
const StaffPage = () => {
  const navigate=useNavigate()
  return (
    <div className='flex '>
      <div className="w-1/5"></div>
      <div className='w-4/5'> 
        <div className='flex justify-center items-start my-20 gap-5'>
        <button className='border-2  px-5 py-2 rounded-2xl ' onClick={()=>{navigate('/addstaff')}} >
          ADD STAFF
         </button >
         <button className='border-2  px-5 py-2 rounded-2xl ' onClick={()=>{navigate('/showstaff')}}>Show Staff</button>
         <button className='border-2  px-5 py-2 rounded-2xl ' onClick={()=>{navigate('/editstaff')}}>Edit staff details</button>
        </div>
      </div>
    </div>
  )
}

export default StaffPage