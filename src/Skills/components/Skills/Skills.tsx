import type { FC } from "react";
import classNames from "classnames";

import { Title, Icons, Image, Description } from "./components";
import type { SkillsProps } from "./Skills.types";

import classes from "./Skills.styles.module.scss";

export const Skills: FC<SkillsProps> = (props) => {
  const {
    ref,
    classes: customClasses,
    direction = "left-right",
    title,
    text,
    list,
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

        <Description text={text} list={list} />
      </div>

      <Image className={classNames(customClasses?.image)} img={img} />
    </div>
  );
};
