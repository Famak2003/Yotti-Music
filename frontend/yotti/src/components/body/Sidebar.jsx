import { grid, album, genre, artist, music, list, heart, cloud, chevdown, info, } from "../../assets";

const musicContent = [
  { image: grid, name: "Browse" },
  { image: album, name: "Albums" },
  { image: genre, name: "Genres" },
  { image: artist, name: "Artiste" },
];

const libraryContent = [
  { image: music, name: "Songs" },
  { image: list, name: "Playlist" },
  { image: heart, name: "Favourite" },
  { image: cloud, name: "Downloaded", arrow: chevdown },
];

export default function SideBar() {
  return (
    <section className=" ">
    
      <div className="flex h-screen w-full flex-col items-center gap-4">
        <div className=" flex w-full items-center justify-center  ">
          <h2 className="rounded bg-green-600 py-[.1rem] text-sm ">
            Online mode
          </h2>
        </div>

        <div className="flex w-full flex-col justify-start gap-[4rem] pl-3 ">
          <div className="Menu flex h-fit flex-col gap-6 ">
            <h5 className=" text-xs not-italic text-white">Menu</h5>
            <ul className="flex flex-col gap-3">
              {musicContent.map((item) => (
                <SideButton img={item.image} key={item.name}>
                  {item.name}
                </SideButton>
              ))}
            </ul> 
          </div>

          <div className="Library flex h-fit flex-col gap-6 ">
            <h5 className="text-xs not-italic text-white">Library</h5>
            <ul className="flex flex-col gap-3">
              {libraryContent.map((obj, id) => (
                <SideButton key={id} img={obj.image} arrow={obj.arrow}>
                  {obj.name}
                </SideButton>
              ))}
            </ul>
          </div>

          <div className="mt-11 text-gray-400">
            <h5 className=" pb-3 ">Support</h5>
            <p className="flex items-center gap-3 py-2 ">
              <img className=" h-4 w-4 object-contain" src={info} alt="help" />
              <span>Help</span>{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Refactoring
// This function takes arrow as an optioal prop, and renders some properties concerning that
function SideButton({ children, img, arrow = "" }) {
  return (
    <div
      className={`flex h-fit gap-2  ${
        children === "Browse" ? "text-[#B29DF2]" : "text-gray-400"
      } cursor-pointer items-center`}
    >
      <img className=" h-5 w-5 object-contain" src={img} alt={children} />
      <p
        className={`${
          arrow && "downloaded flex items-center gap-1 "
        } text-[16px]`}
      >
        {children}
        {arrow && (
          <span>
            <img
              className="w-6 sm:hidden lg:inline-block"
              src={arrow}
              alt="arrow-down"
            />{" "}
          </span>
        )}
      </p>
    </div>
  );
}
