import type { FC } from "react";
import classNames from "classnames";

import { Title, Icons, Image, Text } from "./components";
import type { SkillsProps } from "./Skills.types";

import classes from "./Skills.styles.module.scss";

export const Skills: FC<SkillsProps> = (props) => {
  const {
    ref,
    classes: customClasses,
    direction = "left-right",
    title,
    text,
    img,
    skillsIcons,
  } = props;

  return (
    <div
      ref={ref}
      className={classNames(
        customClasses?.root,
        classes.skills,
        direction === "left-right" ? classes.leftRight : classes.rightLeft,
      )}
    >
      <div className={classNames(customClasses?.text, classes.textSection)}>
        <Title title={title} />

        <Icons skillsIcons={skillsIcons} />

        <Text text={text} />
      </div>

      <Image className={classNames(customClasses?.image)} img={img} />
    </div>
  );
};
