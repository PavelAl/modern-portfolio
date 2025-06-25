export interface HeaderLink {
  key: string;
  text: string;
}

export interface HeaderProps {
  className?: string;
  links?: HeaderLink[];
  onLinkClicked?: (key: string) => void;
}
