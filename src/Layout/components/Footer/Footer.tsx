import React from "react";

import type { FooterProps } from "./Footer.types";

import styles from "./Footer.styles.module.scss";

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={`${styles.footer} ${className || ""}`}>
      <div className={styles.footerText}>Created by Pavel Oparin</div>
    </footer>
  );
};
