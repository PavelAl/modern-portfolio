import type { HeaderLink } from "../../../../types";

export interface LinkProps {
  className?: string;
  link: HeaderLink;
  onClick?: (key: string) => void;
}
