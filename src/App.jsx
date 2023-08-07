import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Passport from "./pages/Passport";
import Scan from "./pages/Scan";
import Weigh from "./pages/Weigh";
import Bagtag from "./pages/Bagtag";
import Print from "./pages/Print";
import Airline from "./pages/Airline";
import Baggage from "./pages/Baggage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Airline />} />
        <Route path="/scan" element={<Scan />} />
        <Route path="/passport" element={<Passport />} />
        <Route path="/baggage" element={<Baggage />} />
        <Route path="/bag/:bagnumber" element={<Weigh />} />
        <Route path="/print" element={<Print />} />
        <Route path="/bagtag" element={<Bagtag />} />
      </Routes>
    </>
  );
}

export default App;
