import { type FC } from "react";

import { Icon } from "~/Library/Icons";
import type { ContactMethod } from "~/Contacts/types";

import styles from "./ContactSource.styles.module.scss";

export const ContactSource: FC<{ method: ContactMethod }> = (props) => {
  const { method } = props;

  return (
    <a
      href={method.link}
      target="_blank"
      className={styles.contactSource}
      aria-label={method.label}
      title={method.label}
    >
      <Icon icon={method.icon} color={method.color} className={styles.icon} />
    </a>
  );
};
