import React, { useContext, useEffect, useState } from "react";
import { Clock } from "./components/Clock";
import { ButtonComands } from "./components/ButtonComands";
import { ClockContext } from "./context/ClockContext";
import { Scorer } from "./components/Scorer";
import FoulsSidebar from "./components/FoulsSidebar";

export const Tablero = () => {
  const { timeFinish } = useContext(ClockContext);

  return (
    <div
      className={`flex flex-row gap-8 text-center justify-center font-bold bg-slate-950 rounded-xl p-4 ${
        timeFinish ? "border-8 border-red-600" : "border border-slate-950"
      }`}
    >
      <FoulsSidebar team={"teamA"}/>
      <div className="text-center">
        <h1 className="text-white text-5xl text-center mb-4">
          Basketball Scoreboard
        </h1>
        <Clock />
        <Scorer />
        <ButtonComands />
      </div>
      <FoulsSidebar team={"teamB"}/>
    </div>
  );
};
