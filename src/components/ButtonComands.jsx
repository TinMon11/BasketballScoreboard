import React, { useContext, useRef, useState } from "react";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import StopIcon from "@mui/icons-material/Stop";
import { ClockContext } from "../context/ClockContext";
import { ScoreContext } from "../context/ScoreContext";

export const ButtonComands = () => {
  const {
    setMinutes,
    setSeconds,
    setDecimals,
    initialTimer,
    setTimeFinish,
    timeFinish,
  } = useContext(ClockContext);

  const { addPoints, substractPoints, resetPoints, scoreState, scoreBoard } =
    useContext(ScoreContext);

  const [timerRunning, setTimerRunning] = useState(false);
  const timerIntervalRef = useRef(null);

  const handleStartTimer = () => {
    if (timerRunning) return;
    setTimerRunning(true);
    timerIntervalRef.current = setInterval(() => {
      setDecimals((prevDecimals) => {
        if (prevDecimals === 0) {
          setSeconds((prevSeconds) => {
            if (prevSeconds === 0) {
              setMinutes((prevMinutes) => {
                if (prevMinutes === 0) {
                  handleStopTimer();
                  setDecimals("00");
                  setSeconds("00");
                  setTimeFinish(true);
                  return 0;
                }
                return prevMinutes - 1;
              });
              return 59;
            }
            return prevSeconds - 1;
          });
          return 99;
        }
        return prevDecimals - 1;
      });
    }, 10);
  };

  const handleStopTimer = () => {
    setTimerRunning(false);
    clearInterval(timerIntervalRef.current);
  };

  const handleResetTimer = () => {
    handleStopTimer();
    setMinutes(initialTimer.minutes);
    setSeconds(initialTimer.seconds);
    setDecimals(initialTimer.decimals);
    setTimeFinish(false);
  };

  return (
    <div className="flex flex-col gap-4 justify-center">
      <div className="flex flex-row gap-2 justify-around text-white">
        <div className="flex gap-2">
          <button
            className="rounded-xl px-2 py-2 bg-blue-500 hover:bg-blue-600"
            type="button"
          onClick={() => addPoints("teamA", 1)}
          >
            +1
          </button>
          <button
            className="rounded-xl px-2 py-2 bg-blue-500 hover:bg-blue-600"
            type="button"
            onClick={() => addPoints("teamA", 2)}
          >
            +2
          </button>
          <button
            className="rounded-xl px-2 py-2 bg-blue-500 hover:bg-blue-600"
            type="button"
            onClick={() => addPoints("teamA", 3)}
          >
            +3
          </button>
          <button
            className="rounded-xl px-2 py-2 bg-red-400 hover:bg-red-500"
            type="button"
            onClick={() => substractPoints("teamA", 1)}
          >
            -1
          </button>
        </div>
        <div className="flex gap-2">
          <button
             className="rounded-xl px-2 py-2 bg-blue-500 hover:bg-blue-600"
            type="button"
            onClick={() => addPoints("teamB", 1)}
          >
            +1
          </button>
          <button
            className="rounded-xl px-2 py-2 bg-blue-500 hover:bg-blue-600"
            type="button"
            onClick={() => addPoints("teamB", 2)}
          >
            +2
          </button>
          <button
             className="rounded-xl px-2 py-2 bg-blue-500 hover:bg-blue-600"
            type="button"
            onClick={() => addPoints("teamB", 3)}
          >
            +3
          </button>
          <button
            className="rounded-xl px-2 py-2 bg-red-400 hover:bg-red-500"
            type="button"
            onClick={() => substractPoints("teamB", 1)}
          >
            -1
          </button>
        </div>
      </div>
      <div className="flex flex-row gap-4 justify-center">
        <button
          className="m-2 text-white text-xl text-center rounded-md p-4"
          // Set color green or gray depending on timerRunning
          style={{
            backgroundColor:
              !timerRunning && !timeFinish ? "#4CAF50" : "#808080",
          }}
          type="button"
          onClick={handleStartTimer}
          disabled={timerRunning || timeFinish}
        >
          Start
          <PlayCircleFilledWhiteIcon className="text-white text-5xl text-center" />
        </button>
        <button
          className="m-2 text-white text-xl text-center rounded-md p-4"
          style={{ backgroundColor: !timerRunning ? "#808080" : "#F44336" }}
          type="button"
          onClick={handleStopTimer}
          disabled={!timerRunning}
        >
          Stop
          <StopIcon className="text-white text-5xl text-center" />
        </button>
        <button
          className="m-2 text-white text-xl text-center bg-red-800 rounded-md p-4"
          type="button"
          onClick={handleResetTimer}
        >
          Reset Time
          <RestartAltIcon className="text-white text-5xl text-center" />
        </button>
        <button
          className="m-2 text-white text-xl text-center bg-red-800 rounded-md p-4"
          type="button"
          onClick={resetPoints}
        >
          Reset Score
          <RestartAltIcon className="text-white text-5xl text-center" />
        </button>
      </div>
    </div>
  );
};
