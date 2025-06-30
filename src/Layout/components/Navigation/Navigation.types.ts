import type { HeaderLink } from "~/Layout/types";

export type NavigationProps = {
  links?: HeaderLink[];
  onLinkClicked?: (key: string) => void;
};
