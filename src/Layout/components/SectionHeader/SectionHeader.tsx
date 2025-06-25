import type { FC } from "react";
import classNames from "classnames";

import type { SectionHeaderProps } from "./SectionHeader.types";

import classes from "./SectionHeader.styles.module.scss";

export const SectionHeader: FC<SectionHeaderProps> = (props) => {
  const { id, title, className } = props;

  return (
    <div id={id} className={classNames(classes.sectionHeader, className)}>
      <h1 className={classes.title}>{title}</h1>
    </div>
  );
};
