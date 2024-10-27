import React from "react";
import TeamData from "../TeamData.json";

const TheTeam = () => {
  return (
    <div className="min-h-[600px] py-10 bg-astreoids3 bg-cover" id="theteam">
      <h1 className="text-5xl 2xl:text-7xl text-[#99C7E8] [text-shadow:_0_4px_8px_rgba(14_165_223_/_0.5)]">
        The Team
      </h1>
      <div className="mt-10 flex justify-center flex-wrap gap-4">
        {TeamData.map((user) => {
          return (
            <div className="cursor-pointer hover:scale-105 transition-all w-60 2xl:w-80 overflow-hidden flex flex-col" key={user.id}>
              <img className="rounded-xl mb-2" src={user.profilePhoto} alt="" />
              <span className="text-[#D8DAE3] font-bold">{user.name}</span>
              <span className="text-[#D8DAE3] font-bold">-{user.jon}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TheTeam;

export default TheTeam;
