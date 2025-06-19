import type { FC } from "react";
import classNames from "classnames";

import type { TextProps } from "./Text.types";

import classes from "./Text.styles.module.scss";

export const Text: FC<TextProps> = (props) => {
  const { text, className } = props;

  return <p className={classNames(className, classes.text)}>{text}</p>;
};
