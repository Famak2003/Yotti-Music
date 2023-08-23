import UserNotification from "./UserNotification";
import Logo from "./Logo";
import MainNav from "./MainNav";

export default function Nav() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("work in progress");
  }
  return (
    <nav className=" grid w-[100%] grid-cols-[13%_70%_17%] bg-black sm:h-[4rem] lg:h-[5rem] ">
      <Logo />
      <MainNav onHandleSubmit={handleSubmit} />
      <UserNotification />
    </nav>
  );
}

