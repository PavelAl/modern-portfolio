import type { FC } from "react";
import classNames from "classnames";

import { Icon } from "~/Library/Icons";

import type { IconsProps } from "./Icons.types";

import classes from "./Icons.styles.module.scss";

export const Icons: FC<IconsProps> = (props) => {
  const { skillsIcons, className } = props;

  if (!skillsIcons || skillsIcons.length === 0) {
    return null;
  }

  return (
    <div className={classNames(className, classes.skillsIcons)}>
      {skillsIcons.map((skillIcon, index) => (
        <Icon
          key={index}
          icon={skillIcon.icon}
          color={skillIcon.color}
          className={classes.skillIcon}
        />
      ))}
    </div>
  );
};
