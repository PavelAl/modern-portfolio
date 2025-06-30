import type { HeaderLink } from "../../types";

export interface HeaderProps {
  className?: string;
  links?: HeaderLink[];
  isVisible?: boolean;
  onLinkClicked?: (key: string) => void;
}
