import type { FC } from "react";

import type { BrandIconProps } from "./BrandIcon.types";
import { iconMap } from "./components";

export const BrandIcon: FC<BrandIconProps> = ({ icon, className }) => {
  const IconComponent = iconMap[icon];

  if (!IconComponent) {
    console.warn(`BrandIcon: Unknown icon "${icon}"`);

    return null;
  }

  return <IconComponent width={48} height={48} className={className} />;
};
