import React from "react";
export interface IGameState {
  board: Array<Array<boolean>>;
  rows: number;
  cols: number;
  running: boolean;
}
interface IGameContext {
  dispatch: (ACTION: any) => void;
  state: IGameState;
}

export const GameContext = React.createContext<IGameContext>({
  dispatch: (ACTION) => {},
  state: {
    board: [[]],
    rows: 0,
    cols: 0,
    running: false,
  },
});
