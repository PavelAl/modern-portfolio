import React from "react";
import classNames from "classnames";

import type { HeaderProps } from "./Header.types";

import styles from "./Header.styles.module.scss";

export const Header: React.FC<HeaderProps> = (props) => {
  const { className, links, onLinkClicked } = props;

  return (
    <header className={classNames(styles.header, className)}>
      <div className={styles.logo}>Pavel Oparin</div>

      <nav className={styles.navigation}>
        {links?.map((link) => (
          <button
            key={link.key}
            className={styles.headerLink}
            onClick={() => onLinkClicked?.(link.key)}
          >
            {link.text}
          </button>
        ))}
      </nav>
    </header>
  );
};
