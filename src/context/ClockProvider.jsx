import React, { useState } from "react";
import { ClockContext } from "./ClockContext";

export const ClockProvider = ({ children }) => {

  const initialTimer = {
    minutes: 10,
    seconds: 0,
    decimals: 0,
  };

  const [minutes, setMinutes] = useState(initialTimer.minutes);
  const [seconds, setSeconds] = useState(initialTimer.seconds);
  const [decimals, setDecimals] = useState(initialTimer.decimals);
  const [timeFinish, setTimeFinish] = useState(false);

  return (
    <ClockContext.Provider
      value={{
        minutes,
        setMinutes,
        seconds,
        setSeconds,
        decimals,
        setDecimals,
        initialTimer,
        timeFinish,
        setTimeFinish
      }}
    >
      {children}
    </ClockContext.Provider>
  );
};
