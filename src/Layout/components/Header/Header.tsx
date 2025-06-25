import React from "react";
import classNames from "classnames";

import type { HeaderProps } from "./Header.types";
import { HeaderLink } from "./components";

import styles from "./Header.styles.module.scss";

export const Header: React.FC<HeaderProps> = (props) => {
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

      <nav className={styles.navigation}>
        {links?.map((link) => (
          <HeaderLink key={link.key} link={link} onClick={onLinkClicked} />
        ))}
      </nav>
    </header>
  );
};
