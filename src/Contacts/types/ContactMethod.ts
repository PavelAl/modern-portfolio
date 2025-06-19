import type { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface ContactMethod {
  icon: IconProp;
  color: string;
  link: string;
  label: string;
}
