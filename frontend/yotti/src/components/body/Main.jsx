import SideBar from "./Sidebar";

import { Outlet } from "react-router-dom";
import SongList from "./SongList";

export default function Main() {
  


  return (
    <div>

      <main className="flex ">
    
    <aside className={`sm:border-[1px] border-none bg-gray-800 sm:w-[15%] SideBarTransition delay-300 w-[0%] z-40 overflow-y-scroll sm:relative fixed`}>
       
      <SideBar />
    </aside>
   
  
   <div className="w-full h-screen overflow-y-scroll">
   <Outlet />
   </div>
 
    
   <aside className="sm:w-[20%] w-[0%] sm:flex hidden ">
      <SongList />
    </aside>
  </main>
    </div>
  );
}

// inset-y-0 right-0 w-[65rem] bg-gradient-to-r from-transparent to-black px-[1rem]