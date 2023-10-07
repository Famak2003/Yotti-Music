import SideBar from "./Sidebar";
import Browser from "./Browser";
import Footer from "./Footer";
import SongList from "./SongList";
import CloseIcon from '@mui/icons-material/Close';
import SortIcon from '@mui/icons-material/Sort';
import Collections from "./Collections";
import { useState } from "react";

export default function Main() {
  
  const [close, setClose] = useState(false);
  

  return (
    <div>
     <div className=" h-fit p-2 sm:hidden flex">
    <SortIcon className="text-white w-[40px]" onClick={()=>setClose(!close)}/>
  </div>

      <main className="flex ">
    
    <aside className={`sm:border-[1px] border-none bg-gray-800 sm:w-[15%] SideBarTransition delay-300 ${close ? "w-[50%]" : "w-[0%]" }  z-40 overflow-y-scroll sm:relative fixed`}>
       <div className="float-right p-2 sm:hidden flex">
       <CloseIcon className="text-white" onClick={()=>setClose(!close)}/>
       </div>
      <SideBar />
    </aside>
   
    <section className=" flex flex-col gap-[2rem] overflow-x-hidden px-[1.5rem]">
      <Browser />
      <Collections title={"Discover an Artist"} />
      <Collections title={"Top Albums"} />
      <Collections title={"Playlists For You"} />
      <Collections title={"Popular Genres"} />
      <Footer />
    </section>
    <aside className="sm:w-[10%] w-[0%] hidden">
      <SongList />
    </aside>
  </main>
    </div>
  );
}

// inset-y-0 right-0 w-[65rem] bg-gradient-to-r from-transparent to-black px-[1rem]
