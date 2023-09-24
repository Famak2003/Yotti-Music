import UserNotification from "./UserNotification";
import Logo from "./Logo";
import MainNav from "./MainNav";

export default function Nav() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("work in progress");
  }
  return (
    <nav className=" grid w-[100%] ring grid-cols-[13%_70%_17%] ring-red-500 bg-black h-[14vh] ">
      <Logo />
      <MainNav onHandleSubmit={handleSubmit} />
      <UserNotification />
    </nav>
  );
}

