import React from "react";
import gmail from "../images/gmail.png";
import github from "../images/github.png";
import itch from "../images/itch.png";
import linkedin from "../images/linkedin.png";

const Reach = () => {
  const windowLocationHref = () => {
    window.location.href = "mailto:sertanmokcu@gmail.com";
  };
  return (
    <div className="min-h-96 bg-astreoids4" id="reaches">
      <h1 className="text-5xl 2xl:text-7xl text-[#99C7E8] [text-shadow:_0_4px_8px_rgba(14_165_223_/_0.5)]">
        2 Reach
      </h1>
      <div className="mt-2 flex justify-center items-center flex-wrap gap-4">
        <img
          className="cursor-pointer hover:scale-110 transition-all"
          src={gmail}
          alt=""
          onClick={() => windowLocationHref()}
        />
        <a
          href="https://github.com/SertanM"
          rel="noopener noreferrer"
          target="_blank"
          className="cursor-pointer hover:scale-110 transition-all"
        >
          <img className="cursor-pointer" src={github} alt="" />
        </a>
        <a
          href="https://sertanm.itch.io/"
          rel="noopener noreferrer"
          target="_blank"
          className="cursor-pointer hover:scale-110 transition-all"
        >
          <img className="cursor-pointer" src={itch} alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/sertan-m-okcu-797a53306/?originalSubdomain=tr"
          rel="noopener noreferrer"
          target="_blank"
          className="cursor-pointer hover:scale-110 transition-all"
        >
          <img className="cursor-pointer" src={linkedin} alt="" />
        </a>
        
      </div>
    </div>
  );
};

export default Reach;
