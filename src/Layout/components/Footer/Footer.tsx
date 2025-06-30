import { type FC } from "react";

import type { FooterProps } from "./Footer.types";

import styles from "./Footer.styles.module.scss";

export const Footer: FC<FooterProps> = () => {
  return <footer className={styles.footer}>Created by Pavel Oparin</footer>;
};
