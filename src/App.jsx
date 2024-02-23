import { Route,Routes } from "react-router-dom"
import HomePage from "./Components/HomePage/HomePage"
import Login from "./Components/Login/Login"


import SideNav from "./Components/SideNavBar/SideNav"
import StaffPage from "./Components/StaffDetails/StaffPage"
import AddStaff from "./Components/StaffDetails/CRUD/AddStaff"
import StaffInfo from "./Components/StaffDetails/CRUD/StaffInfo"
import EditStaff from "./Components/StaffDetails/CRUD/EditStaff"


function App() {
  

  return (
    <>
    {/* <Login/> */}
    <SideNav/>
    <Routes>
      <Route path="/" element={<Login/>} />
       <Route path="library" element={<HomePage/>}/>

       <Route path="staff" element={<StaffPage/>} >
       
       
       </Route>
       <Route path="addstaff" element={<AddStaff/>}/>
       <Route path="showstaff" element={<StaffInfo/>}/>
       <Route path="editstaff" element={<EditStaff/>}/>
       {/* <Route path="pres" element={<Prescription/>} /> */}
      

       
    </Routes>
    </>
  )
}

export default App
