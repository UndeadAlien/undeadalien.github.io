import React, { useState } from "react";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import NavBar from "../components/NavBar/NavBar";
import Projects from "../components/Projects/Projects";
import SideBar from "../components/SideBar/SideBar";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <NavBar />
      <Hero />
      <Projects />
      <SideBar />
      <Footer />
    </>
  );
}

export default Home;
