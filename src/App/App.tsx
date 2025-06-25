import { useState } from "react";
import type { FC } from "react";

import { Introduction } from "~/Introduction";
import { Header, Footer } from "~/Layout";
import { ContactMe } from "~/Contacts";
import type { HeaderLink } from "~/Layout/components";
import { useScrollDirection } from "~/Library/Scrolling";

import { Skills, WorkExperience, EducationSection } from "./components";
import { introductionData } from "./constants";
import { contactMethods } from "./constants/contactMethods";

import classes from "./App.styles.module.scss";

const headerLinks: HeaderLink[] = [
  { key: "home", text: "Home" },
  { key: "skills", text: "Skills" },
  { key: "experience", text: "Experience" },
  { key: "education", text: "Education" },
  { key: "contacts", text: "Contacts" },
];

export const App: FC = () => {
  const [scrolledWithClick, setScrolledWithClick] = useState(false);
  const [headerIsVisible, setHeaderVisible] = useState(true);
  const { getScrollDirection } = useScrollDirection();

  const handleLinkClick = (key: string) => {
    const element = document.getElementById(key);
    if (!element) return;

    setScrolledWithClick(true);
    if (key === "home") {
      element?.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      element?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Header
        links={headerLinks}
        isVisible={headerIsVisible}
        onLinkClicked={handleLinkClick}
      />

      <main
        id="home"
        className={classes.container}
        onScrollEnd={() => {
          if (scrolledWithClick) {
            setHeaderVisible(false);
            setScrolledWithClick(false);
          }
        }}
        onScroll={(e) => {
          const direction = getScrollDirection(e);
          setHeaderVisible(direction === "up");
        }}
      >
        <div className={classes.content}>
          <Introduction
            className={classes.introduction}
            title={introductionData.title}
            text={introductionData.text}
          />

          <Skills id="skills" />

          <WorkExperience id="experience" />

          <EducationSection id="education" />

          <ContactMe
            id="contacts"
            title="Want to connect?"
            text="Feel free to reach out! I'm always open to exciting opportunities and new connections."
            contactMethods={contactMethods}
          />

          <Footer />
        </div>
      </main>
    </>
  );
};
