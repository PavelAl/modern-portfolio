import type { ContactMethod } from "../../types";

export interface ContactMeProps {
  id?: string;
  className?: string;

  title: string;
  text: string;
  contactMethods: ContactMethod[];
}
