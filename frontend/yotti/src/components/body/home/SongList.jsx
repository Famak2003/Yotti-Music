export default function SongList() {
  return (
    <section className="h-[25rem] fixed w-[17%] top-[5rem] rounded-b-lg bg-zinc-700 px-1.5 py-0.5 text-gray-400">
      {/* This whole section is supposed to be fixed */}
      <div>
        <h5 className=" pb-1 text-white">Recent</h5>

        <div className="flex w-full gap-2 rounded-lg border border-white px-1 py-1 text-[10px]">
          <button className="cursor-pointer rounded bg-[#4C19EA] px-1 py-1 text-white">
            Songs
          </button>

          <button className="cursor-pointer rounded px-1 py-1">
            Playlists
          </button>

          <button className="cursor-pointer rounded px-1 py-1">Albums</button>

          <button className="cursor-pointer rounded px-1 py-1">Up next</button>
        </div>
      </div>

      <div className=" flex h-full w-full translate-y-[-10%] flex-col items-center justify-center gap-3 text-sm">
        <p>No recents</p>
        <p>Play something first</p>
      </div>
    </section>
  );
}