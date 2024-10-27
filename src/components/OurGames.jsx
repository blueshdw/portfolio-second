import React from "react";
import GamesData from "../GamesData.json";

const OurGames = () => {
  return (
    <div className="min-h-96 py-10" id="ourgames">
      <h1 className="text-5xl 2xl:text-7xl text-[#99C7E8] [text-shadow:_0_4px_8px_rgba(14_165_223_/_0.5)]">
        Our Games
      </h1>
      <div className="mt-10 flex justify-center flex-wrap gap-4">
        {GamesData.map((game) => {
          return (
            <div className="w-60 2xl:w-80 overflow-hidden" key={game.id}>
              <img className="rounded-xl mb-2" src={game.image} alt="" />
              <span className="text-[#4C4E57] font-bold">{game.subscrition}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurGames;
