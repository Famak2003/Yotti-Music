import UserNotification from "./UserNotification";
import Logo from "./Logo";
import MainNav from "./MainNav";

export default function Nav() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("work in progress");
  }
  return (
    <nav className=" grid w-[100vw] grid-cols-[12.5%_70%_17.5%] bg-black sm:h-[4rem] lg:h-[3.5rem]  ">
      <Logo />
      <MainNav onHandleSubmit={handleSubmit} />
      <UserNotification />
    </nav>
  );
}
