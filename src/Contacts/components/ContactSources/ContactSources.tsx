import { type FC } from "react";
import classNames from "classnames";

import { ContactSource } from "../ContactMe/components";

import type { ContactSourcesProps } from "./ContactSources.types";

import styles from "./ContactSources.styles.module.scss";

export const ContactSources: FC<ContactSourcesProps> = ({
  contactMethods,
  className,
}) => {
  return (
    <div className={classNames(styles.contactSources, className)}>
      {contactMethods.map((method, index) => (
        <ContactSource key={index} method={method} />
      ))}
    </div>
  );
};
