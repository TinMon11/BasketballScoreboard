import React, { useContext, useState } from "react";
import { FoulsCounter } from "./FoulsCounter";
import { FoulsContext } from "../context/FoulsContext";

const FoulsSidebar = ({ team }) => {
  const { fouls, addFoul, substractFoul, resetFouls } =
    useContext(FoulsContext);

  const [playerNumber, setPlayerNumber] = useState(4);

  const handlePlayerNumberChange = (e) => {
    const newValue = parseInt(e.target.value);

    if (4 >= e.target.value <= 15) {
      setPlayerNumber(newValue);
    }
  };

  return (
    <div className="flex flex-col gap-2 justify-around text-center bg-slate-950 text-white">
      <p>Fouls Team {team}</p>
      {fouls[team].map((player) => {
        return (
          <div
            key={player.number}
            className="flex flex-row justify-between gap-2"
          >
            <h1>Player{player.number}</h1>
            <FoulsCounter fouls={player.fouls} />
          </div>
        );
      })}
      <div className="flex flex-row gap-2 justify-center">
        <input
          className="my-auto bg-white-700 h-12 text-black w-16 font-bold py-2 px-4 rounded"
          type="number"
          onChange={handlePlayerNumberChange}
          placeholder="4"
          min={4}
          max={15}
        />
        <div className="flex flex-col gap-2">
          <button
            className="bg-green-500 hover:bg-green-700 text-white w-16 font-bold px-4 rounded"
            onClick={() => addFoul(team, playerNumber)}
          >
            Add
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white w-16 font-bold px-4 rounded"
            onClick={() => substractFoul(team, playerNumber)}
          >
            Sub
          </button>
          <button
            className="text-center bg-red-800 hover:bg-red-900 text-white w-16 font-bold px-4 rounded"
            onClick={() => resetFouls(team)}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoulsSidebar;
