import { type FC } from "react";

import { Link } from "./components";
import type { NavigationProps } from "./Navigation.types";

import styles from "./Navigation.styles.module.scss";

export const Navigation: FC<NavigationProps> = (props) => {
  const { links, onLinkClicked } = props;

  return (
    <nav className={styles.navigation}>
      {links?.map((link) => (
        <Link key={link.key} link={link} onClick={onLinkClicked} />
      ))}
    </nav>
  );
};
