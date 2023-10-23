import UserNotification from "./UserNotification";
import Logo from "./Logo";
import MainNav from "./MainNav";

export default function Nav() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("work in progress");
  }
  return (
    <nav className=" fixed top-0 z-50 grid h-[5rem] w-[100%] grid-cols-[13%_70%_17%] bg-black ">
      <Logo />
      <MainNav onHandleSubmit={handleSubmit} />
      <UserNotification />
    </nav>
  );
}
