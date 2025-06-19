import type { FC } from "react";
import classNames from "classnames";

import type { ImageProps } from "./Image.types";

import classes from "./Image.styles.module.scss";

export const Image: FC<ImageProps> = (props) => {
  const { img: Img, className } = props;

  return (
    <div className={classNames(className, classes.imageSection)}>
      {typeof Img === "string" ? (
        <img
          src={Img}
          alt="Skills illustration"
          className={classes.skillsImage}
        />
      ) : (
        <div className={classes.skillsImage}>
          <Img />
        </div>
      )}
    </div>
  );
};
