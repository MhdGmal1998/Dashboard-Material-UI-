import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AppBar from "./Components/AppBar";
import Login from "./Pages/Login/Login";

import Home from "./Pages/Home/Home";
import LostDevices from "./Pages/Lost Devices/LostDevices"
import FoundDevices from "./Pages/Found Devices/FoundDevices"
import Users from './Pages/Users/Users'
import AllMails from "./Pages/All Mails/AllMails";
import Settings from "./Pages/Settings/Settings";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/lostdevices" element={<LostDevices />} />
      <Route path="/founddevices" element={<FoundDevices />} />
      <Route path="/users" element={<Users />} />
      <Route path="/allmails" element={<AllMails />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  )
}

export default App;
