import { type FC } from "react";
import classNames from "classnames";

import { Navigation } from "../Navigation";

import type { HeaderProps } from "./Header.types";

import styles from "./Header.styles.module.scss";

export const Header: FC<HeaderProps> = (props) => {
  const { className, links, isVisible, onLinkClicked } = props;

  return (
    <header
      className={classNames(
        styles.header,
        className,
        isVisible ? styles.visible : styles.hidden,
      )}
    >
      <div className={styles.logo}>Pavel Oparin</div>

      <Navigation links={links} onLinkClicked={onLinkClicked} />
    </header>
  );
};
