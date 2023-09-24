import chevleft from "./../../assets/chevron-left.png";
import chevright from "./../../assets/chevron-right.png";
import rectangle from "./../../assets/Rectangle 7.png";
import rect from "./../../assets/Rectangle 6.png";

const browseData = [
  {
    title: "Album of the week",
    album: "Rave & Roses",
    artist: "Rema",
    albumBanner: rectangle,
  },
  {
    title: "Playlist of the week",
    album: "BNXN Bad Since 97",
    artist: "Buju",
    albumBanner: rect,
  },
];

export default function Browser() {
  return (
    <section className="">
      <div className=" mt-20 flex justify-between">
        <h1 className=" text-4xl font-semibold">Browse</h1>

        <div className="nextPreviousBtn flex h-6 gap-14 ">
          <button>
            <img src={chevleft} alt="click left" className="cursor-pointer" />
          </button>
          <button>
            <img src={chevright} alt="click right" className="cursor-pointer" />
          </button>
        </div>
      </div>

      <ul className="flex gap-3 ">
        {browseData.map((obj, id) => (
          <BrowseTitle
            key={id}
            title={obj.title}
            album={obj.album}
            artist={obj.artist}
            albumBanner={obj.albumBanner}
          />
        ))}
      </ul>
    </section>
  );
}

function BrowseTitle({ title, album, artist, albumBanner }) {
  return (
    <li className="flex flex-col text-gray-500 ">
      <p className="">{title}</p>

      <div>
        <p>{album}</p>
      </div>
      <div>
        <p>{artist}</p>
      </div>
      <img src={albumBanner} alt="album" className="mt-2" />
      {/* <div className=" px-4 ring-1 ring-red-400 "> */}
      {/* <div className='font-["Dm Sans"] flex flex-col text-xs '>
        </div> */}
      {/* </div> */}
    </li>
  );
}
