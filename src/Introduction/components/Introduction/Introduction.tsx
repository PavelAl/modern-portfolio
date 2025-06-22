import React from "react";
import classNames from "classnames";

import { DeveloperSVG } from "../../../App/assets";

import type { IntroductionProps } from "./Introduction.types";

import styles from "./Introduction.styles.module.scss";

export const Introduction: React.FC<IntroductionProps> = (props) => {
  const { className, title, text } = props;

  return (
    <div className={classNames(styles.introduction, className)}>
      <div className={styles.textSection}>
        <h1 className={styles.title}>{title}</h1>

        <p className={styles.text}>{text}</p>
      </div>

      <div className={styles.svgSection}>
        <DeveloperSVG />
      </div>
    </div>
  );
};
