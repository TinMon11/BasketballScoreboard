import React, { useReducer, useState } from "react";
import { ScoreContext } from "./ScoreContext";

export const ScoreProvider = ({ children }) => {
  const scoreState = {
    teamA: 0,
    teamB: 0,
  };

  const resetState = {
    teamA: 0,
    teamB: 0,
  };

  const addPoints = (team, points) => {
    const action = {
      type: "ADD_POINTS",
      payload: {
        team,
        points,
      },
    };
    dispatch(action);
  };

  const substractPoints = (team, points) => {
    const action = {
      type: "SUBSTRACT_POINTS",
      payload: {
        team,
        points,
      },
    };
    dispatch(action);
  };

  const resetPoints = (team) => {
    const action = {
      type: "RESET_POINTS",
      payload: {},
    };
    dispatch(action);
  };

  const scoreReducer = (state = scoreState, action = {}) => {
    switch (action.type) {
      case "ADD_POINTS":
        return {
          ...state,
          [action.payload.team]:
            state[action.payload.team] + action.payload.points,
        };
      case "SUBSTRACT_POINTS":
        if (state[action.payload.team] > 0) {
          return {
            ...state,
            [action.payload.team]:
              state[action.payload.team] - action.payload.points,
          };
        } else {
          return {
            ...state,
            [action.payload.team]: 0,
          };
        }
      case "RESET_POINTS":
        return resetState;
      default:
        return state;
    }
  };

  const [scoreBoard, dispatch] = useReducer(scoreReducer, scoreState);

  return (
    <ScoreContext.Provider
      value={{
        addPoints,
        substractPoints,
        resetPoints,
        scoreState,
        scoreBoard,
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
};
