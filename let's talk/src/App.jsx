import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Register";
import Chat from "./Pages/Chat";
import Login from "./Pages/Login";
import SetAvatar from "./components/SetAvatar";
import ResetPassword from "../src/Pages/ResetPassword";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/" element={<Chat />} />

      </Routes>
    </BrowserRouter>
  );
}
