import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../pages/home/Home'
import Navbar from "../Component/navbar/Navbar";
import Footer from "../Component/footer/Footer";
import Login from "../pages/login/login.js";
function ReactRoutes() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer/>
    </>
  );
}

export default ReactRoutes;
