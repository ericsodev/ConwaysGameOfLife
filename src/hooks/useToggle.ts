import { useState } from "react";
import { setConstantValue } from "typescript";

export default function useToggle(
  defaultState: boolean
): [boolean, (state?: boolean) => void] {
  const [state, setState] = useState<boolean>(defaultState);

  const toggle = (newState?: boolean): void => {
    setState((curr) => (typeof newState === "boolean" ? newState : !curr));
  };
  return [state, toggle];
}
