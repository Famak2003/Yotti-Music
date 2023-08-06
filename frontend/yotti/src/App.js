import "./index.css";

import Nav from "./components/navigation/Nav";
import Main from "./components/body/Main";

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
