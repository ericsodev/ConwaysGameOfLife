import { useContext, useCallback, useEffect, useRef } from "react";
import { GameContext } from "../contexts/Game";

export default function ToggleButton(): JSX.Element {
  const { state, dispatch } = useContext(GameContext);
  const runningRef = useRef(state.running);
  runningRef.current = state.running;
  const simulate = useCallback(() => {
    if (!runningRef.current) {
      return;
    }
    dispatch({ type: "NEXT_FRAME" });
    setTimeout(() => {
      simulate();
    }, 400);
  }, []);
  useEffect(simulate, [state.running]);
  return (
    <div
      className={
        `inline-block px-4 py-2 rounded-sm cursor-pointer ` + (state.running ? "bg-red-400" : "bg-emerald-400")
      }
      onClick={() => {
        dispatch({ type: "TOGGLE_RUNNING" });
      }}
    >
      {state.running ? "Stop" : "Start"}
    </div>
  );
}
