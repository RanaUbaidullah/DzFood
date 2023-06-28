import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../pages/home/Home'
import Navbar from "../Component/navbar/Navbar";
import Footer from "../Component/footer/Footer";
import Login from "../pages/login/login.js";
import Menu from "../pages/menu/Menu";
import Favourite from "../pages/favourite/Favourite";
import Cart from "../pages/cart/Cart";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
function ReactRoutes() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/favourite"element={<Favourite/>}/>
        <Route path="/cart"element={<Cart/>}/>
        <Route path="/about"element={<About/>}/>
        <Route path="/contact"element={<Contact/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default ReactRoutes;
