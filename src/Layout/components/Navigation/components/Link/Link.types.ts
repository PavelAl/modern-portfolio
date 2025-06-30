import type { HeaderLink } from "../../../../types/HeaderLink";

export interface LinkProps {
  className?: string;
  link: HeaderLink;
  onClick?: (key: string) => void;
}
