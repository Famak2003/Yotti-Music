import NOTIFICATION from "./../../assets/notification.png";
import USER from "./../../assets/user.png";

export default function UserNotification() {
  return (
    <ul className=" correctHeight flex w-[100%] items-center justify-center gap-9">
      {/* <li className="text-white">hello there</li> */}
      <li className=" w-[1rem] min-w-[.7rem] cursor-pointer ">
        <img
          className=" h-4 object-contain "
          src={NOTIFICATION}
          alt="notification"
        />
      </li>
      <li className="w-[1rem] min-w-[.7rem] cursor-pointer ">
        <img className="  h-4 object-contain " src={USER} alt="user" />
      </li>
    </ul>
  );
}
