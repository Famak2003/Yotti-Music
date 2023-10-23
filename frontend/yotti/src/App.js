import "./index.css";

import Nav from "./components/navbar/Nav";
import LandingPage from "./components/body/home/LandingPage";
import SideBar from "./components/body/home/Sidebar";
import SongList from "./components/body/home/SongList";
import Footer from "./components/body/home/Footer";
// import Profile from "./components/body/profile/Profile";

function App() {
  return (
    <div className=" flex flex-col">
      <Nav />
      <main className="main grid h-fit w-[100%] grid-cols-[13%_70%_17%] text-white ">
        <aside className="">
          <SideBar />
        </aside>
        <LandingPage />
        {/* <Profile/> */}
        <aside className=" right-0">
          <SongList />
        </aside>
      </main>
      <Footer />
    </div>
  );
}

// function Loader() {
//   return (
//     <div className="absolute inset-0 flex items-center justify-center bg-slate-200/20 backdrop-blur-sm">
//       <div className="loader"></div>
//     </div>
//   );
// }

export default App;
