import type { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";

export interface IconProps {
  title?: string;
  "aria-label"?: string;
  className?: string;
  icon: IconProp;
  size?: SizeProp;
  color?: string;
  spin?: boolean;
  pulse?: boolean;
  fixedWidth?: boolean;
  inverse?: boolean;
  flip?: "horizontal" | "vertical" | "both";
  rotation?: 90 | 180 | 270;
  onClick?: () => void;
}
