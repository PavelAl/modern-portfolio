import type { HeaderLink } from "../../Header.types";

export interface HeaderLinkProps {
  className?: string;
  link: HeaderLink;
  onClick?: (key: string) => void;
}
