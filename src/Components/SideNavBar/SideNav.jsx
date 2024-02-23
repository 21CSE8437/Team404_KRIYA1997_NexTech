import React from 'react'
import { BsGraphUp } from "react-icons/bs";
import { FaUserGroup } from "react-icons/fa6";
import { GrNotes } from "react-icons/gr";
import { AiOutlineLogout } from "react-icons/ai";
import { IoIosSettings } from "react-icons/io";
import { NavLink } from 'react-router-dom';

//new icons
import { ImBooks } from "react-icons/im";
import { PiChalkboardTeacherLight } from "react-icons/pi";
import { MdGroups } from "react-icons/md";
const SideNav = () => {
  const navstyle=({isActive})=>{
    return{
     fontWeight: isActive? 'bold' : 'normal',
     color:isActive? 'white': 'black',
     backgroundColor:isActive? '#316FF6' :'white'
    }}
  return (
    <>
    <div
          className="sidebar
          absolute top-0 left-0 z-10
          w-3/5 border-2 bg-white h-screen
        md:w-2/5 lg:w-1/5 flex flex-col justify-between 
        "
        >
            {/* Top lists */}
          <div className="first">
         
          <NavLink style={navstyle} to="staff" className="items-center cursor-pointer flex gap-3 hover:border-2 px-4 py-4 mx-2 rounded-2xl my-3 hover:bg-slate-400 hover:shadow-xl hover:scale-95 transform duration-150 " >
            <PiChalkboardTeacherLight size={34} /><h1 className="font-bold uppercase">Staff Details</h1>
          </NavLink>
          <NavLink style={navstyle} to="pres" className="cursor-pointer items-center flex gap-3 hover:border-2 px-4 py-4 mx-2 rounded-2xl my-3  hover:shadow-xl hover:scale-95 transform duration-150">
            <MdGroups size={34} /><h1 className="font-bold  uppercase">Student Details</h1>
          </NavLink>
          <NavLink style={navstyle} to="library" className="flex items-center active:bg-slate-400 gap-3 px-4 py-4 mx-2 my-3 rounded-2xl  hover:shadow-xl hover:scale-95 transform duration-150 cursor-pointer ">
            <ImBooks size={26} /> <h1 className="font-bold uppercase">Library Management</h1>
          </NavLink>
          
          
          </div>
       
          <div className="second ">
          <NavLink style={navstyle}  to='setting' className="cursor-pointer flex gap-3 hover:border-2 px-4 py-5 mx-2 rounded-2xl my-3 hover:bg-slate-400 hover:shadow-xl hover:scale-95 transform duration-150">
            <IoIosSettings size={24} /><h1 className="font-bold ">Settings</h1>
          </NavLink>
          <NavLink style={navstyle} to='logout' className="cursor-pointer flex gap-2 hover:border-2 px-4 py-5 mx-2 rounded-2xl my-3 hover:bg-slate-400 hover:shadow-xl hover:scale-95 transform duration-150 ">
            <AiOutlineLogout size={24} /><h1 className="font-bold ">Logout</h1>
          </NavLink>
          </div>
        </div>
    </>
  )
}

export default SideNav