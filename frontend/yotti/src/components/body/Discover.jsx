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

export default function Discover() {
  return (
    <div className=" h-fit overflow-x-scroll rounded-lg ring-1 ring-gray-400">
      <h2>Discover an Artist</h2>
      <ul className=" musicGrid w-[65rem] px-[1rem] ">
        {artist.map((obj) => (
          <Artist key={obj.id} img={obj.image}>
            {obj.artistName}
          </Artist>
        ))}
      </ul>
    </div>
  );
}

function Artist({ img, children }) {
  return (
    <li className=" w-fit">
      <div className=" h-[5rem] w-[100%]">
        <img className=" object-center" src={img} alt="music-profile-img" />
      </div>
      <small>{children}</small>
    </li>
  );
}
