import { type FC } from "react";
import classNames from "classnames";

import { useAnimatedAppearance } from "~/Library/Animations";

import { Skills } from "../Skills";
import type { SkillsClasses } from "../Skills";

import type { AnimatedSkillsProps } from "./AnimatedSkills.types";

export const AnimatedSkills: FC<AnimatedSkillsProps> = (props) => {
  const { direction } = props;

  const { rootRef, animatedClasses } = useAnimatedAppearance();

  const resultClasses: SkillsClasses = {
    root: classNames(animatedClasses.root, props.classes?.root),
    text: classNames(
      direction === "left-right" ? animatedClasses.left : animatedClasses.right,
      props.classes?.text,
    ),
    image: classNames(
      direction === "left-right" ? animatedClasses.right : animatedClasses.left,
      props.classes?.image,
    ),
  };

  return <Skills {...props} classes={resultClasses} ref={rootRef} />;
};
