import React from "react";
import classNames from "classnames";

import type { HeaderProps } from "./Header.types";

import styles from "./Header.styles.module.scss";

export const Header: React.FC<HeaderProps> = ({ className, links }) => {
  return (
    <header className={classNames(styles.header, className)}>
      <div className={styles.logo}>Pavel Oparin</div>

      <nav className={styles.navigation}>
        {links?.map((link, index) => (
          <button
            key={index}
            className={styles.headerLink}
            onClick={() => {
              const element = document.querySelector(link.href);
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            {link.text}
          </button>
        ))}
      </nav>
    </header>
  );
};
