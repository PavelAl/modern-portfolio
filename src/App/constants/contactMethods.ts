import type { ContactMethod } from "~/Contacts/types";

export const contactMethods: ContactMethod[] = [
  {
    icon: ["fab", "linkedin"],
    color: "#0077B5",
    link: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: ["fab", "github"],
    color: "#333",
    link: "https://github.com",
    label: "GitHub",
  },
  {
    icon: "envelope",
    color: "#EA4335",
    link: "mailto:contact@example.com",
    label: "Gmail",
  },
];
