import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = () => {
  return (
    <div id='wrapper' class='is-preload'>
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
};

export default Layout;
