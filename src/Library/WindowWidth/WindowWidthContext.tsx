import { createContext, type FC, type ReactNode } from "react";

import { useSubscribeToWindowWidth } from "./useSubscribeToWindowWidth";

export const WindowWidthContext = createContext<{ width: number }>({
  width: 0,
});

export const WindowWidthProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const width = useSubscribeToWindowWidth();

  return (
    <WindowWidthContext.Provider value={{ width }}>
      {children}
    </WindowWidthContext.Provider>
  );
};
