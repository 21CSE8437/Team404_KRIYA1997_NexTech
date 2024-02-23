import React from 'react'
import Custominput from './Custominput'
import { Form } from 'react-router-dom';
const AddStaff = () => {
  function handleAddStaff(e){
    e.preventDefault();
    fetch('http://localhost:2000/addStaff',{
      method:'POST',
      body:JSON.stringify({
        name:e.target.form[0].value,
        dept:e.target.form[1].value,
        date:e.target.form[2].value,
        qual:e.target.form[3].value,
        role:e.target.form[4].value,
      }),
      headers:{
        "Content-Type":"application/json"
      }
    }).then((val)=>{console.log(val.body);})
    
  }
  return (
    <div className="flex">
      <div className="w-1/5"></div>
      <form  method='post' className="w-4/5  flex flex-col gap-5 items-center py-10">
      <Custominput value={"name"} placeholder={"Name"}/>
      <Custominput value={"dept"} placeholder={"Dept"}/>
      <Custominput value={"date"} placeholder={""} type={"date"}/>
      <Custominput value={"qual"} placeholder={"Qualification"}/>
      <Custominput value={"role"} placeholder={"Role"}/>
      <button onClick={handleAddStaff}>Add Staff</button>
      </form>
    </div>
  )
}

export default AddStaff