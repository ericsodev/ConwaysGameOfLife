import { useContext } from "react";
import { GameContext } from "../contexts/Game";

export default function RandomizeButton(): JSX.Element {
  const { state, dispatch } = useContext(GameContext);
  return (
    <div
      className="inline-block bg-purple-300 px-4 py-2 rounded-sm cursor-pointer"
      onClick={() => (!state.running ? dispatch({ type: "RANDOMIZE" }) : () => {})}
    >
      Randomize
    </div>
  );
}
