import type { FC } from "react";
import classNames from "classnames";

import type { WorkExperienceDatesProps } from "./WorkExperienceDates.types";

import classes from "./WorkExperienceDates.styles.module.scss";

export const WorkExperienceDates: FC<WorkExperienceDatesProps> = (props) => {
  const { className, dates } = props;

  return <div className={classNames(classes.dates, className)}>{dates}</div>;
};
