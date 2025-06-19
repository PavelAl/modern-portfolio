import React from "react";

import type { HeaderProps } from "./Header.types";

import styles from "./Header.styles.module.scss";

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={`${styles.header} ${className || ""}`}>
      <div className={styles.logo}>Pavel Oparin</div>

      <nav className={styles.navigation}>
        <a href="#" className={styles.headerLink}>
          Link 1
        </a>

        <a href="#" className={styles.headerLink}>
          Link 2
        </a>

        <a href="#" className={styles.headerLink}>
          Link 3
        </a>

        <a href="#" className={styles.headerLink}>
          Link 4
        </a>

        <a href="#" className={styles.headerLink}>
          Link 5
        </a>
      </nav>
    </header>
  );
};
