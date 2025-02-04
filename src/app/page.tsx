import React from "react";
import Hero from "./sections/HeroSection/Hero";
import NavBar from "@/components/global/Navbar/NavBar";

type Props = {};

const Home = (props: Props) => {
  return (
    <div>
      <NavBar />
      <Hero />
    </div>
  );
};

export default Home;
