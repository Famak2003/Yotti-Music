import './Main.css'
import SONGPROFILEIMG from "./../../assets/playing.png";

const artist = [
  { image: SONGPROFILEIMG, artistName: "Rema", id: 1 },
  { image: SONGPROFILEIMG, artistName: "Rema", id: 2 },
  { image: SONGPROFILEIMG, artistName: "Rema", id: 3 },
  { image: SONGPROFILEIMG, artistName: "Rema", id: 4 },
  { image: SONGPROFILEIMG, artistName: "Rema", id: 5 },
  { image: SONGPROFILEIMG, artistName: "Rema", id: 6 },
  { image: SONGPROFILEIMG, artistName: "Rema", id: 7 },
  { image: SONGPROFILEIMG, artistName: "Rema", id: 8 },
  { image: SONGPROFILEIMG, artistName: "Rema", id: 9 },
  { image: SONGPROFILEIMG, artistName: "Rema", id: 10 },
  { image: SONGPROFILEIMG, artistName: "Rema", id: 11 },
  { image: SONGPROFILEIMG, artistName: "Rema", id: 12 },
  { image: SONGPROFILEIMG, artistName: "Rema", id: 13 },
  { image: SONGPROFILEIMG, artistName: "Rema", id: 14 },
  { image: SONGPROFILEIMG, artistName: "Rema", id: 15 },
  { image: SONGPROFILEIMG, artistName: "Rema", id: 16 },
  { image: SONGPROFILEIMG, artistName: "Rema", id: 17 },
  { image: SONGPROFILEIMG, artistName: "Rema", id: 18 },
  { image: SONGPROFILEIMG, artistName: "Rema", id: 19 },
  { image: SONGPROFILEIMG, artistName: "Rema", id: 20 },
];

export default function Collections({ title }) {
  return (
    <div className=" carousel relative">
      <div className="cover pointer-events-none absolute inset-0 inset-y-0 right-0 z-[10] h-[100%] w-[100%] bg-gradient-to-r from-transparent via-transparent to-black"></div>
      <div className="carousel relative h-fit overflow-x-scroll rounded-lg  pl-[1rem] ring-1 ring-gray-400 ">
        <h2>{title}</h2>

        <ul className=" musicGrid w-[65rem] px-[1rem]  ">
          {artist.map((obj) => (
            <Album key={obj.id} img={obj.image}>
              {obj.artistName}
            </Album>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Album({ img, children }) {
  return (
    <li className="w-fit">
      <div onClick={() => console.log("hey")} className=" h-[5rem] w-[100%]">
        <img className=" object-center" src={img} alt="music-profile-img" />
      </div>
      <small>{children}</small>
    </li>
  );
}

