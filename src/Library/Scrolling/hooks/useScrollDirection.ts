import { useRef, type UIEvent } from "react";

export type ScrollDirection = "up" | "down" | null;

export const useScrollDirection = () => {
  const lastScrollY = useRef(0);

  const getScrollDirection = (e: UIEvent<HTMLElement>): "down" | "up" => {
    const scrollY = (e.target as HTMLElement)?.scrollTop;
    const prev = lastScrollY.current;

    lastScrollY.current = scrollY;

    return scrollY > prev ? "down" : "up";
  };

  return { getScrollDirection };
};
