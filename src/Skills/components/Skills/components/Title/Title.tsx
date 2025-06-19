import type { FC } from "react";
import classNames from "classnames";

import type { TitleProps } from "./Title.types";

import classes from "./Title.styles.module.scss";

export const Title: FC<TitleProps> = (props) => {
  const { title, className } = props;

  return <h1 className={classNames(className, classes.title)}>{title}</h1>;
};
