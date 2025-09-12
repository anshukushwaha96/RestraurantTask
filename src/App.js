import "./Screens/style.css"
// import Navbar from "./Screens/navbar";
// import Login from "./Screens/Login";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Screens/Login"; 
import Screen1 from "./Screens/Screen1"; 
import Register from "./Screens/registration";
import Screen2 from "./Screens/Screen2";

import Screen4 from "./Screens/Screen4"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Screen1" element={<Screen1 />} />
         <Route path="/Screen2" element={<Screen2 />} />
        <Route path="/registration" element={<Register />} />
         
          <Route path="/screen4" element={<Screen4 />} />

      </Routes>
    </BrowserRouter>
  );
}
export default App;
