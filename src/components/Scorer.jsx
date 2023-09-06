import React, { useContext, useState } from "react";
import { ScoreContext } from "../context/ScoreContext";
import { ClockContext } from "../context/ClockContext";

export const Scorer = () => {
  const { scoreBoard } = useContext(ScoreContext);

  return (
    <>
      <h1 className="text-white text-4xl text-center mt-4">Scorer</h1>
      <div className="flex justify-around text-white text-4xl">
        <div className="m-2 w-52 text-center">
          <p className="mb-2">Team A</p>
          <p className="h-24 bg-white text-black font-scoreboard text-8xl text-center rounded-md">
            {scoreBoard.teamA}
          </p>
        </div>
        <div className="m-2 w-52 text-center">
          <p className="mb-2">Team B</p>
          <p className="h-24 bg-white text-black font-scoreboard text-8xl text-center rounded-md">
            {scoreBoard.teamB}
          </p>
        </div>
      </div>
    </>
  );
};
