import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landingpage from "./components/LandingPage";
import Homepage from "./components/Homepage";
import CreateRide from "./components/CreateRide";
import AllRides from "./components/AllRides";
import Chat from "./components/Chat";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/landing-page" element={<Landingpage />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/fahrt-finden" element={<AllRides />} />
        <Route path="/fahrt-erstellen" element={<CreateRide />} />
      </Routes>
    </>
  );
}

export default App;
