import { type FC } from "react";
import classNames from "classnames";

import { ContactSources } from "~/Contacts";

import type { IntroductionProps } from "./Introduction.types";

import styles from "./Introduction.styles.module.scss";

export const Introduction: FC<IntroductionProps> = (props) => {
  const {
    className,
    title,
    text,
    resumeLink,
    contactMethods,
    image: Image,
  } = props;

  return (
    <div className={classNames(styles.introduction, className)}>
      <div className={styles.textSection}>
        <h1 className={styles.title}>{title}</h1>

        <p className={styles.text}>{text}</p>

        {contactMethods && (
          <ContactSources
            className={styles.contactMethods}
            contactMethods={contactMethods}
          />
        )}

        {resumeLink && (
          <a
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeButton}
          >
            Get my Resume
          </a>
        )}
      </div>

      <div className={styles.svgSection}>
        <Image />
      </div>
    </div>
  );
};
