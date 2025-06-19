import React from "react";

import { DeveloperSVG } from "../../../App/assets/DeveloperSVG";

import type { IntroductionProps } from "./Introduction.types";

import styles from "./Introduction.styles.module.scss";

export const Introduction: React.FC<IntroductionProps> = ({
  title,
  text,
  className,
}) => {
  return (
    <div className={`${styles.introduction} ${className || ""}`}>
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
