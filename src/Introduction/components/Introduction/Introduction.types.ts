import type { ComponentType } from "react";

import type { ContactMethod } from "~/Contacts/types";

export interface IntroductionProps extends IntroductionData {
  className?: string;
}

export type IntroductionData = {
  title: string;
  text: string;
  resumeLink?: string;
  contactMethods?: ContactMethod[];
  image: ComponentType;
};
