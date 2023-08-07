import "./index.css";

import Main from "./components/body/Main";
import Nav from "./components/navbar/Nav";

function App() {
  return (
    <div className="">
      <Nav />
      <Main />
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
