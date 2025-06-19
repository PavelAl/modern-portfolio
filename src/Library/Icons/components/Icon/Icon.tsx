import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

import type { IconProps } from "./Icon.types";

import styles from "./Icon.styles.module.scss";

export const Icon: React.FC<IconProps> = (props) => {
  const {
    "aria-label": ariaLabel,
    title,
    className,
    icon,
    size,
    color,
    spin = false,
    pulse = false,
    fixedWidth = false,
    inverse = false,
    flip,
    rotation,
    onClick,
  } = props;

  return (
    <FontAwesomeIcon
      aria-label={ariaLabel}
      title={title}
      className={classNames(styles.icon, className)}
      icon={icon}
      size={size}
      style={{ color }}
      spin={spin}
      pulse={pulse}
      fixedWidth={fixedWidth}
      inverse={inverse}
      flip={flip}
      rotation={rotation}
      onClick={onClick}
    />
  );
};
