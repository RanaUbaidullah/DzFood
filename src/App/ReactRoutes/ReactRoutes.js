import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../pages/home/Home'
import Navbar from "../Component/navbar/Navbar";
import Footer from "../Component/footer/Footer";
import Login from "../pages/login/login.js";
import Menu from "../pages/menu/Menu";
import Favourite from "../pages/favourite/Favourite";
function ReactRoutes() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/favourite"element={<Favourite/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default ReactRoutes;
