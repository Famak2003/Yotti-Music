import NEXT from "./../../assets/next.png";
import PLAY from "./../../assets/play.png";
import PREVIEW from "./../../assets/preview.png";
import PLAYING from "./../../assets/playing.png";
import SHUFFLE from "./../../assets/shuffle.png";
import VOLUME from "./../../assets/volume-2.png";
import REPEAT from "./../../assets/repeat.png";

export default function MainNav({ onHandleSubmit }) {
  return (
    <div className="mainNav correctHeight flex w-[100%] flex-col justify-center gap-1  ">
      <input
        onSubmit={onHandleSubmit}
        className="h-[30%] w-[50%] self-center rounded-sm bg-black pb-[0.35rem] pl-[1rem] pr-[0.5rem] pt-[0.3rem] text-[.6rem] text-white ring-1 ring-stone-600 duration-300 focus:h-8 focus:pb-[0.28rem] focus:pt-[0.2rem] focus:ring-1 focus:ring-white md:text-[.8rem]"
        placeholder={`Search any music, playlist, album here`}
        type="search"
      />
      <div className="musicControl flex h-[2.9rem] items-center justify-center bg-stone-600  ">
        {/* music play functionalities */}
        <ul className="playFunc flex h-[100%] w-[25%] items-center justify-center gap-2  ">
          <li className=" playFunction cursor-pointer ">
            <img className="  object-contain" src={SHUFFLE} alt="shuffle" />
          </li>
          <li className=" playFunction cursor-pointer">
            <img className="  object-contain" src={PREVIEW} alt="preview" />
          </li>
          <li className=" playFunction cursor-pointer">
            <img className="  object-contain" src={PLAY} alt="play" />
          </li>
          <li className=" playFunction cursor-pointer">
            <img className="  object-contain" src={NEXT} alt="next" />
          </li>
          <li className=" playFunction cursor-pointer">
            <img className="  object-contain" src={REPEAT} alt="repeat" />
          </li>
        </ul>

        {/* Music info display ... music image, lyrics */}
        <div className="song correctHeight flex w-[55%] items-center overflow-hidden bg-stone-500 ">
          <div className=" correctHeight w-fit ">
            <img
              className=" h-[100%] object-contain"
              src={PLAYING}
              alt="song"
            />
          </div>
          <div className="lyrics correctHeight flex w-[85%] flex-col items-center justify-center pb-2 pt-3">
            <p className=" text-sm text-white">Yoga Yoga</p>
            <small className=" text-xs text-gray-400"> I dey on my way</small>
          </div>
        </div>

        {/* Music Volume */}
        <ul className="volume correctHeight flex w-[20%]  items-center justify-center bg-stone-700 px-[1.5rem] ">
          <li className="  w-[1rem] min-w-[0.75] cursor-pointer ">
            <img className="  h-4 object-contain" src={VOLUME} alt="volume" />
          </li>
          <li className=" m-0 flex w-[5rem] justify-start p-0 text-start ">
            <input
              className=" correctScale h-[0.12rem] w-[100%]"
              type="range"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
