import React from 'react'
import Browser from "./Browser";
import Footer from "./Footer";
import Collections from "./Collections";


const Layout = () => {
  return (
   <div className='w-[100%] h-fit'>
     <section className=" flex flex-col gap-[2rem] overflow-x-hidden px-[1.5rem]">
      <Browser />
      <Collections title={"Discover an Artist"} />
      <Collections title={"Top Albums"} />
      <Collections title={"Playlists For You"} />
      <Collections title={"Popular Genres"} />
      <Footer />
    </section>


   </div>
  )
}

export default Layout