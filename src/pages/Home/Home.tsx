import React from "react";
import Navbar from "../../components/Navbar";
import "./Home.css";

import Footer from "../../components/Footer";
import FirstSection from "./partial/FirstSection";
import LeftSectionHome from "./partial/LeftSectionHome";

function Home() {
  return (
    <div className="home">
      <div className="header row  ">
        <div className="col-8">
          <Navbar />
          <LeftSectionHome />
        </div>
        <div className="col-4  align-self-stretch ">
          <FirstSection />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Home;
