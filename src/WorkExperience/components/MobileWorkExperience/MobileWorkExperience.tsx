import type { FC } from "react";
import classNames from "classnames";

import { WorkExperienceContent } from "../WorkExperienceContent";

import type { MobileWorkExperienceProps } from "./MobileWorkExperience.types";

import classes from "./MobileWorkExperience.styles.module.scss";

export const MobileWorkExperience: FC<MobileWorkExperienceProps> = (props) => {
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
      className={classNames(customClasses?.root, classes.mobileWorkExperience)}
    >
      <WorkExperienceContent
        className={customClasses?.content}
        title={title}
        dates={dates}
        position={position}
        description={description}
      />
    </div>
  );
};
