import NOTIFICATION from "./../../assets/notification.png";
import USER from "./../../assets/user.png";

export default function UserNotification() {
  return (
    <ul className=" correctHeight flex w-[100%] items-center justify-center  gap-9 pl-[3rem] pr-[4rem]">
      <li className=" w-[1rem] min-w-[.7rem] ">
        <img
          className=" h-4 object-contain "
          src={NOTIFICATION}
          alt="notification"
        />
      </li>
      <li className="w-[1rem] min-w-[.7rem] ">
        <img className="  h-4 object-contain " src={USER} alt="user" />
      </li>
    </ul>
  );
}
