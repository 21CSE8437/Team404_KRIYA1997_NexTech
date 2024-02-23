import React from 'react'

export default function Custominput({placeholder , type , value}) {
  return (
    <div className=''><input placeholder={placeholder} name={value}  className='border px-3 py-2 rounded-lg w-[15rem] border-black' type={type}/></div>
  )
}
