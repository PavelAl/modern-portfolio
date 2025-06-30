import type { ContactMethod } from "~/Contacts/types";

export const contactMethods: ContactMethod[] = [
  {
    icon: ["fab", "linkedin"],
    color: "#0077B5",
    link: "https://www.linkedin.com/in/paveloparin",
    label: "LinkedIn",
  },
  {
    icon: ["fab", "github"],
    color: "#333",
    link: "https://github.com/PavelAl",
    label: "GitHub",
  },
  {
    icon: "envelope",
    color: "#EA4335",
    link: "mailto:oparinpavelal@gmail.com",
    label: "Gmail",
  },
];
