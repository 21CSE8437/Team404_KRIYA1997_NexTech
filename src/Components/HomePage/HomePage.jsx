import React from "react";
import { LuFileBadge2 } from "react-icons/lu";
import SideNav from "../SideNavBar/SideNav";
import { Link } from "react-router-dom";

//new icons
import { FaComputer } from "react-icons/fa6";
import { TiSpanner } from "react-icons/ti";
import { FaHelmetSafety } from "react-icons/fa6";
import { LuCircuitBoard } from "react-icons/lu";
import { GiElectricalResistance } from "react-icons/gi";
const LibCard=({title,icon})=>{
  return(
    
    <div className="cursor-pointer flex items-center justify-center gap-7 border-2 min-h-10 min-w-10 rounded-lg px-4 py-3 text-lg font-medium">
          <div className="flex justify-center items-center gap-3">
            <h1>{title}</h1>
            {icon}
          </div>
          
        </div>
    
  )
}

const HomePage = () => {
  return (
    <div className="flex">
      <div className="w-1/5"></div>
      <div className="w-4/5 flex gap-5 justify-evenly py-10">
        
        <LibCard title="CSE" icon={<FaComputer size={30}/>}/>
        <LibCard title="EEE" icon={<GiElectricalResistance size={30} />} />
        <LibCard title="MECH" icon={<TiSpanner size={30}/>}/>
        <LibCard title="ECE" icon={<LuCircuitBoard size={30} />} />
        <LibCard title="CIVIL" icon={<FaHelmetSafety size={30} />} />
      </div>
    </div>
  );
};

export default HomePage;
