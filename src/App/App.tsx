import { Introduction } from "~/Introduction";
import { Header, Footer } from "~/Layout";
import { ContactMe } from "~/Contacts";
import type { HeaderLink } from "~/Layout/components/Header/Header.types";

import {
  Skills,
  WorkExperience,
  EducationSection,
  BrandIconGallery,
} from "./components";
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

export const App = () => {
  const handleLinkClick = (key: string) => {
    const element = document.getElementById(key);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <Header links={headerLinks} onLinkClicked={handleLinkClick} />

      <main className={classes.container}>
        <div className={classes.content}>
          <div id="home">
            <Introduction
              className={classes.introduction}
              title={introductionData.title}
              text={introductionData.text}
            />
          </div>

          <div id="skills">
            <Skills />
          </div>

          <div id="experience">
            <WorkExperience />
          </div>

          <div id="education">
            <EducationSection />
          </div>

          <div id="contacts">
            <ContactMe
              title="Want to connect?"
              text="Feel free to reach out! I'm always open to exciting opportunities and new connections."
              contactMethods={contactMethods}
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};
