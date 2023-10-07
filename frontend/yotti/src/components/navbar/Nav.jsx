import UserNotification from "./UserNotification";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Search from "../body/Search";

export default function Nav() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("work in progress");
  }
  return (
    <nav className=" flex w-full justify-evenly gap-2">
      <div className="sm:w-[19%] w-[29%] flex justify-center items-center">
      <Logo />
      </div>
      <div className="w-[100%]  h-[70px] flex justify-center items-center">
      <div className="w-[100%] sm:flex hidden">
      <MainNav onHandleSubmit={handleSubmit} />
      </div>
      <div className="w-full sm:hidden flex justify-center items-center bg-slate-200 rounded-2xl">
<div className="">
<Search />
</div>
      </div>
      </div>
<div className="w-[15%] flex justify-center items-center">
<UserNotification />
</div>
     
    <div  className="fixed bottom-0 z-50  w-full sm:hidden bg-red-800 flex items-center justify-center"> 
    <MainNav className="w-[100%]"/>
    </div>
    </nav>
  );
}

