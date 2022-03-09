import { useContext } from "react";
import { GameContext } from "../contexts/Game";

export default function ResetButton(): JSX.Element {
  const { dispatch } = useContext(GameContext);
  return (
    <div
      className="inline-block bg-amber-200 px-4 py-2 rounded-sm cursor-pointer"
      onClick={() => dispatch({ type: "RESET" })}
    >
      Reset
    </div>
  );
}
