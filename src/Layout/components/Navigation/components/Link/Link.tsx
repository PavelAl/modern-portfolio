import { type FC } from "react";
import classNames from "classnames";

import type { LinkProps } from "./Link.types";

import styles from "./Link.styles.module.scss";

export const Link: FC<LinkProps> = (props) => {
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
