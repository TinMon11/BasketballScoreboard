import React, { useContext, useState } from "react";
import { ClockContext } from "../context/ClockContext";

export const Clock = () => {
  const { minutes, setMinutes, seconds, setSeconds, decimals, setDecimals } =
    useContext(ClockContext);

  const formatNumber = (value) => {
    return value.toString().padStart(2, "0");
  };

  const handleInputChange = (e, setter, max, nextSetter) => {
    const newValue = parseInt(e.target.value, 10);
    if (!isNaN(newValue) && newValue >= 0 && newValue <= max) {
      setter(newValue);
    } else if (newValue > max) {
      if (nextSetter) {
        nextSetter(
          (prevValue) =>
            (prevValue + 1) % (nextSetter === setSeconds ? 60 : 100)
        );
        if (nextSetter === setSeconds) setDecimals(0);
        if (nextSetter === setMinutes) setSeconds(0);
      }
    }
  };

  return (
    <>
      <div className="flex flex-row gap-4 justify-center">
        <div className="flex flex-col text-center">
          <label 
          className="text-white text-xl font-scoreboard"
          htmlFor="minutes">Min</label>
          <input
            className="font-scoreboard border border-gray-400 rounded-md h-24 w-32 text-center text-6xl"
            type="number"
            value={formatNumber(minutes)}
            onChange={(e) => handleInputChange(e, setMinutes, 24)}
          />
        </div>
        <p className="text-white text-6xl font-scoreboard my-auto">:</p>
        <div className="flex flex-col text-center">
          <label 
          className="text-white text-xl font-scoreboard"
          htmlFor="seconds">Seg</label>
          <input
            className="font-scoreboard border border-gray-400 rounded-md h-24 w-32 text-center text-6xl"
            type="number"
            value={formatNumber(seconds)}
            onChange={(e) => handleInputChange(e, setSeconds, 59, setMinutes)}
          />
        </div>
        <p className="text-white text-6xl font-scoreboard my-auto">:</p>
        <div className="flex flex-col text-center">
          <label 
          className="text-white text-xl font-scoreboard"
          htmlFor="seconds">Dec</label>
          <input
            className="font-scoreboard border border-gray-400 rounded-md h-24 w-32 text-center text-6xl"
            type="number"
            value={formatNumber(decimals)}
            onChange={(e) => handleInputChange(e, setDecimals, 99, setSeconds)}
          />
        </div>
      </div>
    </>
  );
};
