import type { FC } from "react";
import classNames from "classnames";

import type { DescriptionProps } from "./Description.types";

import classes from "./Description.styles.module.scss";

export const Description: FC<DescriptionProps> = (props) => {
  const { text, list, className } = props;

  if (list) {
    return (
      <ul className={classNames(className, classes.text, classes.list)}>
        {list.map((item, index) => (
          <li key={index}>⚡ {item}</li>
        ))}
      </ul>
    );
  }

  if (text) {
    return <p className={classNames(className, classes.text)}>{text}</p>;
  }

  return null;
};
