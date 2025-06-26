import { type FC } from "react";
import classNames from "classnames";

import { useAnimatedAppearance } from "~/Library/Animations";

import { WorkExperience } from "../WorkExperience";
import type { WorkExperienceClasses } from "../WorkExperience";

import type { AnimatedWorkExperienceProps } from "./AnimatedWorkExperience.types";

import animationClasses from "./AnimatedWorkExperience.styles.module.scss";

export const AnimatedWorkExperience: FC<AnimatedWorkExperienceProps> = (
  props,
) => {
  const { rootRef, animatedClasses, isVisible } =
    useAnimatedAppearance<HTMLDivElement>();

  const resultClasses: WorkExperienceClasses = {
    root: classNames(animatedClasses.root, props.classes?.root),
    dates: classNames(animatedClasses.left, props.classes?.dates),
    marker: classNames(
      animationClasses.marker,
      isVisible && animationClasses.visible,
      props.classes?.marker,
    ),
    description: classNames(animatedClasses.right, props.classes?.description),
  };

  return <WorkExperience {...props} classes={resultClasses} ref={rootRef} />;
};
