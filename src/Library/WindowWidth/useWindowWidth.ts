import { useContext } from "react";

import { WindowWidthContext } from "./WindowWidthContext";

export const useWindowWidth = () => {
  const { width } = useContext(WindowWidthContext);

  return { width };
};
