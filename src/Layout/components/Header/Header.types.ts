export interface HeaderLink {
  key: string;
  text: string;
}

export interface HeaderProps {
  className?: string;
  links?: HeaderLink[];
  isVisible?: boolean;
  onLinkClicked?: (key: string) => void;
}
