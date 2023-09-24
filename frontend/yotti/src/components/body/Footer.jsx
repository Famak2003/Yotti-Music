// import Logo from "../navbar/Logo";
import LOGO from "./../../assets/logo.png";

export default function Footer() {
  return (
    <footer className=" flex flex-col items-center justify-center gap-[1rem] bg-gray-800 px-[2rem] py-[1rem]">
      <div>
        <h2>Sponsors</h2>
      </div>
      <ul className=" musicGrid h-[7rem] w-[36rem] gap-[1.2rem] ">
        {Array.from({ length: 8 }, (_, i) => i + 1).map((num, id) => (
          <li
            key={id}
            className=" h-[3rem] w-[8rem] rounded-lg bg-gray-400"
          ></li>
        ))}
      </ul>
      <div className=" self-start">
        <img className=" w-[8rem]" src={LOGO} alt="logo" />
      </div>
      <div className=" flex gap-[12rem] ">
        <p>About</p>
        <p>Newsletter</p>
      </div>
    </footer>
  );
}
