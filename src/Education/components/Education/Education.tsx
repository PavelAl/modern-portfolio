import { forwardRef } from "react";
import classNames from "classnames";

import type { EducationProps } from "./Education.types";

import classes from "./Education.styles.module.scss";

export const Education = forwardRef<HTMLDivElement, EducationProps>(
  (props, ref) => {
    const {
      emblem: Emblem,
      universityTitle,
      degree,
      dates,
      classes: customClasses,
    } = props;

    return (
      <div
        ref={ref}
        className={classNames(customClasses?.root, classes.education)}
      >
        <div className={classNames(customClasses?.emblem, classes.emblem)}>
          <Emblem />
        </div>

        <div className={classNames(customClasses?.info, classes.info)}>
          <h3 className={classes.universityTitle}>{universityTitle}</h3>

          <h4 className={classes.degree}>{degree}</h4>

          <p className={classes.dates}>{dates}</p>
        </div>
      </div>
    );
  },
);

Education.displayName = "Education";
