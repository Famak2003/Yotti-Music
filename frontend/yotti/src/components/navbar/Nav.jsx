import UserNotification from "./UserNotification";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Logo from "./Logo";
import MainNav from "./MainNav";
import Search from "../body/Search";
import { Link } from "react-router-dom";

export default function Nav() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("work in progress");
  }
  return (
    <nav className=" flex w-full justify-evenly gap-2">
      
     <div className=" flex flex-col items-center justify-center w-[85%]">
     <div className="w-full  h-fit flex justify-between items-center mb-4">

     <div className="sm:w-[19%] w-[29%] flex justify-center items-center">
      <Logo />
      </div>

      <div className="w-[100%] sm:flex hidden">
      <MainNav onHandleSubmit={handleSubmit} />
      </div>

     <div className="flex gap-4">
     <div className="w-auto flex justify-center items-center">
<UserNotification />
</div>
<div className="">
 <Link to="profile">
  <AccountCircleIcon  className="text-white"/>
 </Link>
</div>
     </div>

      
      </div>


<div className="w-[100%] sm:hidden flex justify-center items-center bg-stone-600 rounded-2xl">
    <div className="">
  <Search />
      </div>
      </div>
     </div>
     
    <div  className="fixed bottom-0 z-50  w-full sm:hidden bg-stone-600 flex items-center justify-center"> 
    <MainNav className="w-[100%]"/>
    </div>
    </nav>
  );
}

