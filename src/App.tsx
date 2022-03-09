import React, { useEffect, useReducer, useCallback } from "react";
import "./App.css";
import Board from "./components/Board";
import ToggleButton from "./components/ToggleButton";
import ResetButton from "./components/ResetButton";
import { gameReducer } from "./reducers/gameReducer";
import { GameContext } from "./contexts/Game";
import RandomizeButton from "./components/Randomize";

function App() {
  const [gameState, dispatch] = useReducer(gameReducer, { board: [], rows: 50, cols: 70, running: false });

  useEffect(() => {
    dispatch({ type: "RANDOMIZE" });
  }, []);
  return (
    <div className="App bg-gray-900 min-h-screen">
      <GameContext.Provider value={{ state: gameState, dispatch: dispatch }}>
        <ToggleButton></ToggleButton>
        <ResetButton></ResetButton>
        <RandomizeButton></RandomizeButton>
        <Board></Board>
      </GameContext.Provider>
    </div>
  );
}

export default App;
