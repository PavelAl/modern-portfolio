import type { FC } from "react";
import classNames from "classnames";

import { BrandIcon } from "~/Library/Icons";

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
        <div key={index} className={classes.skillIconContainer}>
          <BrandIcon icon={skillIcon.icon} />

          <span className={classes.skillIconTitle}>{skillIcon.title}</span>
        </div>
      ))}
    </div>
  );
};
