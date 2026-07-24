import type { FC } from "react";
import classNames from "classnames";

import type { WorkExperienceContentProps } from "./WorkExperienceContent.types";

import classes from "./WorkExperienceContent.styles.module.scss";
import { WorkExperienceDates } from "../WorkExperienceDates";

export const WorkExperienceContent: FC<WorkExperienceContentProps> = (
  props,
) => {
  const { className, fill, title, dates, position, description } = props;

  return (
    <div
      className={classNames(classes.content, fill && classes.fill, className)}
    >
      <h3 className={classes.title}>{title}</h3>

      {dates && <WorkExperienceDates dates={dates} />}

      <h4 className={classes.position}>{position}</h4>

      <p className={classes.jobDescription}>{description}</p>
    </div>
  );
};
