import SideBar from "./Sidebar";
import Browser from "./Browser";
import Footer from "./Footer";
import SongList from "./SongList";

import Collections from "./Collections";

export default function Main() {
  return (
    <main className="main grid h-fit w-[100%] grid-cols-[13%_70%_17%] text-white ">
      <aside className="">
        <SideBar />
      </aside>
      <section className=" flex flex-col gap-[2rem] overflow-x-hidden px-[1.5rem] ">
        <Browser />
        <Collections title={"Discover an Artist"} />
        <Collections title={"Top Albums"} />
        <Collections title={"Playlists For You"} />
        <Collections title={"Popular Genres"} />
        <Footer />
      </section>
      <aside className=" right-0">
        <SongList />
      </aside>
    </main>
  );
}

// inset-y-0 right-0 w-[65rem] bg-gradient-to-r from-transparent to-black px-[1rem]
