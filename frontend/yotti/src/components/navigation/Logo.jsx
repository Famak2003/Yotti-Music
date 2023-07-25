import LOGO from "./../../assets/logo.png";

export default function Logo() {
  return (
    <div className="logo correctHeight flex w-[100%] items-center sm:px-2 lg:px-5">
      <img src={LOGO} alt="logo" />
    </div>
  );
}
