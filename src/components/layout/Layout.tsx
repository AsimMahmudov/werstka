import React from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Hero from "../hero/Hero";
import scss from "./Loayout.module.scss";

const Layout = () => {
  return (
    <div className={scss.layout}>
      <Header />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
