import { type FC } from "react";
import classNames from "classnames";

import { useRegisterVisibilityOnScroll } from "~/Library/Scrolling";

import { Education, type EducationClasses } from "../Education";

import type { AnimatedEducationProps } from "./AnimatedEducation.types";

import classes from "./AnimatedEducation.styles.module.scss";

export const AnimatedEducation: FC<AnimatedEducationProps> = (props) => {
  const { rootRef, isVisible } =
    useRegisterVisibilityOnScroll<HTMLDivElement>();

  const resultClasses: EducationClasses = {
    root: classNames(
      classes.animatedEducation,
      isVisible && classes.visible,
      props.classes?.root,
    ),
    emblem: classNames(props.classes?.emblem),
    info: classNames(props.classes?.info),
  };

  return <Education {...props} classes={resultClasses} ref={rootRef} />;
};
