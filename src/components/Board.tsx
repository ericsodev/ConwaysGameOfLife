import { useContext, useState, useEffect } from "react";
import { GameContext } from "../contexts/Game";

export default function Board(): JSX.Element {
  const { state, dispatch } = useContext(GameContext);
  const [, forceUpdate] = useState(true);
  useEffect(() => {
    forceUpdate((update) => !update);
  }, [state]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: `repeat(${state.rows}, 15px)`,
        gridTemplateColumns: `repeat(${state.cols}, 15px)`,
        border: "1px solid black",
        width: "fit-content",
        margin: "30px auto",
      }}
    >
      {state.board.map((row, i) =>
        row.map((col, j) => (
          <div
            className={`${col ? "bg-slate-200" : "bg-slate-800"}`}
            onClick={() =>
              !state.running ? dispatch({ type: "UPDATE", payload: { update: { r: i, c: j } } }) : () => {}
            }
          ></div>
        ))
      )}{" "}
    </div>
  );
}
