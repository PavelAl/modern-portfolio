import type { FC } from "react";
import classNames from "classnames";

import { Title, Icons, Image, Text } from "./components";
import type { SkillsProps } from "./Skills.types";

import classes from "./Skills.styles.module.scss";

export const Skills: FC<SkillsProps> = (props) => {
  const { title, text, img, skillsIcons, classes: customClasses, ref } = props;

  return (
    <div ref={ref} className={classNames(customClasses?.root, classes.skills)}>
      <div className={classNames(customClasses?.right, classes.textSection)}>
        <Title title={title} />

        <Icons skillsIcons={skillsIcons} />

        <Text text={text} />
      </div>

      <Image className={classNames(customClasses?.left)} img={img} />
    </div>
  );
};
