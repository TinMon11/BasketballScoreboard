import React, { useReducer } from "react";
import { FoulsContext } from "./FoulsContext";

export const FoulsProvider = ({ children }) => {
  const teamsFouls = {
    teamA: [
      { number: 4, fouls: 0 },
      { number: 5, fouls: 0 },
      { number: 6, fouls: 0 },
      { number: 7, fouls: 0 },
      { number: 8, fouls: 0 },
      { number: 9, fouls: 0 },
      { number: 10, fouls: 0 },
      { number: 11, fouls: 0 },
      { number: 12, fouls: 0 },
      { number: 13, fouls: 0 },
      { number: 14, fouls: 0 },
      { number: 15, fouls: 0 },
    ],
    teamB: [
      { number: 4, fouls: 0 },
      { number: 5, fouls: 0 },
      { number: 6, fouls: 0 },
      { number: 7, fouls: 0 },
      { number: 8, fouls: 0 },
      { number: 9, fouls: 0 },
      { number: 10, fouls: 0 },
      { number: 11, fouls: 0 },
      { number: 12, fouls: 0 },
      { number: 13, fouls: 0 },
      { number: 14, fouls: 0 },
      { number: 15, fouls: 0 },
    ],
  };

  const addFoul = (team, number) => {
    const action = {
      type: "ADD_FOUL",
      payload: {
        team,
        number,
      },
    };
    dispatch(action);
  };

  const substractFoul = (team, number) => {
    const action = {
      type: "SUBSTRACT_FOUL",
      payload: {
        team,
        number,
      },
    };
    dispatch(action);
  };

  const resetFouls = (team) => {
    const action = {
      type: "RESET_FOULS",
      payload: { team },
    };
    dispatch(action);
  };

  const foulsReducer = (state = teamsFouls, action = {}) => {
    switch (action.type) {
      case "ADD_FOUL":
        return {
          ...state,
          [action.payload.team]: state[action.payload.team].map((player) => {
            if (player.number === action.payload.number && player.fouls < 5) {
              return {
                ...player,
                fouls: player.fouls + 1,
              };
            } else {
              return player;
            }
          }),
        };
      case "SUBSTRACT_FOUL":
        return {
          ...state,
          [action.payload.team]: state[action.payload.team].map((player) => {
            if (player.number === action.payload.number && player.fouls > 0) {
              return {
                ...player,
                fouls: player.fouls - 1,
              };
            } else {
              return player;
            }
          }),
        };
      case "RESET_FOULS":
        if (action.payload.team && state[action.payload.team]) {
          return {
            ...state,
            [action.payload.team]: teamsFouls[action.payload.team].map(
              (player) => ({
                ...player,
                fouls: 0,
              })
            ),
          };
        } else {
          return state;
        }
      default:
        return state;
    }
  };

  const [fouls, dispatch] = useReducer(foulsReducer, teamsFouls);

  return (
    <FoulsContext.Provider
      value={{
        fouls,
        addFoul,
        substractFoul,
        resetFouls,
      }}
    >
      {children}
    </FoulsContext.Provider>
  );
};
