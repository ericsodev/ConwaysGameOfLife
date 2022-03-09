import { IGameState } from "../contexts/Game";

export function gameReducer(state: IGameState, action: any) {
  let newBoard: Array<Array<boolean>>;
  switch (action.type) {
    case "NEXT_FRAME":
      newBoard = nextFrame(state.board, state.rows, state.cols);
      return { ...state, board: newBoard };
    case "RESET":
      newBoard = [];
      for (let i = 0; i < state.rows; i++) {
        let row: Array<boolean> = [];
        for (let j = 0; j < state.cols; j++) {
          row.push(false);
        }
        newBoard.push(row);
      }
      return { ...state, board: newBoard, running: false };
    case "RANDOMIZE":
      newBoard = [];
      for (let i = 0; i < state.rows; i++) {
        let row: Array<boolean> = [];
        for (let j = 0; j < state.cols; j++) {
          row.push(Math.floor(Math.random() * 10) > 8);
        }
        newBoard.push(row);
      }
      return { ...state, board: newBoard, running: false };
    case "UPDATE":
      newBoard = [];
      console.log(action.payload.updates);
      for (let i = 0; i < state.rows; i++) {
        let row: Array<boolean> = [];
        for (let j = 0; j < state.cols; j++) {
          row.push(
            action.payload.update.r === i && action.payload.update.c === j ? !state.board[i][j] : state.board[i][j]
          );
        }
        newBoard.push(row);
      }
      return { ...state, board: newBoard };
    case "TOGGLE_RUNNING":
      return { ...state, running: !state.running };
    default:
      return state;
  }
}

function nextFrame(board: Array<Array<boolean>>, rows: number, cols: number): Array<Array<boolean>> {
  let newBoard: Array<Array<boolean>> = [];
  for (let i = 0; i < rows; i++) {
    let newRow: Array<boolean> = [];
    for (let j = 0; j < cols; j++) {
      let alive = checkNeighbours(board, i, j, rows, cols);
      if (board[i][j]) {
        newRow.push(alive >= 2 && alive <= 3);
      } else {
        newRow.push(alive === 3);
      }
    }
    newBoard.push(newRow);
  }
  return newBoard;
}

function checkNeighbours(
  board: Array<Array<boolean>>,
  idxRow: number,
  idxCol: number,
  rows: number,
  cols: number
): number {
  let aliveNeighbours = 0;

  for (let i = Math.max(0, idxRow - 1); i < Math.min(rows, idxRow + 2); i++) {
    for (let j = Math.max(0, idxCol - 1); j < Math.min(cols, idxCol + 2); j++) {
      if (board[i][j] && (i !== idxRow || j !== idxCol)) aliveNeighbours++;
    }
  }

  return aliveNeighbours;
}
