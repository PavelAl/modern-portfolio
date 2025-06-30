import { type FC } from "react";
import classNames from "classnames";

import { ContactSources } from "../ContactSources";

import type { ContactMeProps } from "./ContactMe.types";

import styles from "./ContactMe.styles.module.scss";

export const ContactMe: FC<ContactMeProps> = ({
  id,
  title,
  text,
  contactMethods: contactSources,
  className,
}) => {
  return (
    <div id={id} className={classNames(styles.contactMe, className)}>
      <h2 className={styles.title}>{title}</h2>

      <p className={styles.text}>{text}</p>

      <ContactSources contactMethods={contactSources} />
    </div>
  );
};
