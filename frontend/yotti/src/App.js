import "./index.css";

import Nav from "./components/navbar/Nav";
import Main from "./components/body/Main";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/body/Layout";
import Profile from "./components/body/Profile";



function App() {  
  return (
    <div className="" >
      <Nav />
     

      <Routes>
       
          <Route path="/" element={ <Main />}> 
          <Route path="/" element={<Layout />} />
          <Route path="/profile" element={<Profile />} />
          
          </Route>
       
      </Routes>
     
     
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
