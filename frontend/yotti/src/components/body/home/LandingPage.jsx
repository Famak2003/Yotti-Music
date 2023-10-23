
import Browser from "./Browser";


import Collections from "./Collections";

export default function Main() {
  return (
      <section className=" flex flex-col gap-[2rem] py-[5rem] overflow-x-hidden px-[1.5rem] ">
        <Browser />
        <Collections title={"Discover an Artist"} />
        <Collections title={"Top Albums"} />
        <Collections title={"Playlists For You"} />
        <Collections title={"Popular Genres"} />
      </section>
  );
}

// inset-y-0 right-0 w-[65rem] bg-gradient-to-r from-transparent to-black px-[1rem]
