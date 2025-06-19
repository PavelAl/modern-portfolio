import type { FC } from "react";
import classNames from "classnames";

import type { WorkExperienceProps } from "./WorkExperience.types";

import classes from "./WorkExperience.styles.module.scss";

export const WorkExperience: FC<WorkExperienceProps> = (props) => {
  const {
    classes: customClasses,
    emblem: Emblem,
    title,
    position,
    description,
  } = props;

  return (
    <div className={classNames(customClasses?.root, classes.workExperience)}>
      <div className={classNames(customClasses?.emblem, classes.emblem)}>
        <Emblem />
      </div>

      <div className={classNames(customClasses?.marker, classes.marker)} />

      <div
        className={classNames(customClasses?.description, classes.description)}
      >
        <h3 className={classes.title}>{title}</h3>

        <h4 className={classes.position}>{position}</h4>

        <p className={classes.jobDescription}>{description}</p>
      </div>
    </div>
  );
};
