import React from "react";
import classNames from "classnames";

import type { HeaderLinkProps } from "./HeaderLink.types";

import styles from "./HeaderLink.styles.module.scss";

export const HeaderLink: React.FC<HeaderLinkProps> = (props) => {
  const { className, link, onClick } = props;

  return (
    <button
      className={classNames(styles.link, className)}
      onClick={() => onClick?.(link.key)}
    >
      {link.text}
    </button>
  );
};
