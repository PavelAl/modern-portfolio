import type { FC } from "react";
import classNames from "classnames";

import { useRegisterVisibilityOnScroll } from "~/Library/Scrolling";

import { MobileWorkExperience } from "../MobileWorkExperience";
import type { MobileWorkExperienceClasses } from "../MobileWorkExperience";

import type { MobileAnimatedWorkExperienceProps } from "./MobileAnimatedWorkExperience.types";

import classes from "./MobileAnimatedWorkExperience.styles.module.scss";

export const MobileAnimatedWorkExperience: FC<
  MobileAnimatedWorkExperienceProps
> = (props) => {
  const { index, classes: customClasses, ...workExperienceProps } = props;

  const { rootRef, isVisible } =
    useRegisterVisibilityOnScroll<HTMLDivElement>();

  const isEven = index % 2 === 0;

  const resultClasses: MobileWorkExperienceClasses = {
    root: classNames(
      classes.root,
      isEven ? classes.left : classes.right,
      isVisible && classes.visible,
      customClasses?.root,
    ),
    dates: customClasses?.dates,
    content: customClasses?.content,
  };

  return (
    <MobileWorkExperience
      {...workExperienceProps}
      classes={resultClasses}
      ref={rootRef}
    />
  );
};
