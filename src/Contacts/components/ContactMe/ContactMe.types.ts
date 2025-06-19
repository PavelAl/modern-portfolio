import type { ContactMethod } from "../../types";

export interface ContactMeProps {
  className?: string;

  title: string;
  text: string;
  contactMethods: ContactMethod[];
}
