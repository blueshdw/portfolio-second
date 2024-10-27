import React from "react";
import logo from "../images/logo.jpg";

const Home = () => {
  return (
    <div id="home" className="w-full h-[100vh] bg-astreoids1 flex items-center justify-center">
      <img 
        src={logo} 
        alt="Logo" 
        className="max-w-[80%] md:max-w-[60%] lg:max-w-[40%] xl:max-w-[30%] h-auto"
      />
    </div>
  );
};

export default Home;

