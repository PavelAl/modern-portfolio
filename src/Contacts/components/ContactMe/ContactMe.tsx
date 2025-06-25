import React from "react";

import { Icon } from "~/Library/Icons";

import type { ContactMeProps } from "./ContactMe.types";

import styles from "./ContactMe.styles.module.scss";

export const ContactMe: React.FC<ContactMeProps> = ({
  id,
  title,
  text,
  contactMethods: contactSources,
  className,
}) => {
  return (
    <div id={id} className={`${styles.contactMe} ${className || ""}`}>
      <h2 className={styles.title}>{title}</h2>

      <p className={styles.text}>{text}</p>

      <div className={styles.contactSources}>
        {contactSources.map((source, index) => (
          <a
            key={index}
            href={source.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactSource}
            aria-label={source.label}
            title={source.label}
          >
            <Icon
              icon={source.icon}
              color={source.color}
              className={styles.icon}
            />
          </a>
        ))}
      </div>
    </div>
  );
};
