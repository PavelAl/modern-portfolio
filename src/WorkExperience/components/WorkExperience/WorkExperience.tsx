import type { FC } from "react";
import classNames from "classnames";

import { WorkExperienceDates } from "../WorkExperienceDates";
import { WorkExperienceContent } from "../WorkExperienceContent";

import type { WorkExperienceProps } from "./WorkExperience.types";

import classes from "./WorkExperience.styles.module.scss";

export const WorkExperience: FC<WorkExperienceProps> = (props) => {
  const {
    ref,
    classes: customClasses,
    dates,
    title,
    position,
    description,
  } = props;

  return (
    <div
      ref={ref}
      className={classNames(customClasses?.root, classes.workExperience)}
    >
      <WorkExperienceDates
        className={classNames(customClasses?.dates, classes.dates)}
        dates={dates}
      />

      <div className={classNames(customClasses?.marker, classes.marker)} />

      <WorkExperienceContent
        className={customClasses?.description}
        fill
        title={title}
        position={position}
        description={description}
      />
    </div>
  );
};
