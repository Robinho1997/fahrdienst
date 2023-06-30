import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import CreateRide from "./components/CreateRide";
import AllRides from "./components/AllRides";

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/fahrt-finden" element={<AllRides />} />
        <Route path="/fahrt-erstellen" element={<CreateRide />} />
      </Routes>
    </>
  );
}

export default App;
