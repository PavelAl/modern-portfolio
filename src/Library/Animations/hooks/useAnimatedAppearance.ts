import classNames from "classnames";

import { useRegisterVisibilityOnScroll } from "~/Library/Scrolling";

import classes from "./AnimatedAppearance.styles.module.scss";

export const useAnimatedAppearance = <T extends HTMLElement>() => {
  const { rootRef, isVisible } = useRegisterVisibilityOnScroll<T>();

  const animatedClasses = {
    root: classNames(isVisible && classes.visible),
    left: classes.sectionLeft,
    right: classes.sectionRight,
  };

  return { rootRef, animatedClasses, isVisible };
};
