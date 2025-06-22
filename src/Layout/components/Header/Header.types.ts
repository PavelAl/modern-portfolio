export interface HeaderLink {
  text: string;
  href: string;
}

export interface HeaderProps {
  className?: string;
  links?: HeaderLink[];
}
