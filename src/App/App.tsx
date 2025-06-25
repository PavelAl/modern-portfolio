import { Introduction } from "~/Introduction";
import { Header, Footer } from "~/Layout";
import { ContactMe } from "~/Contacts";

import {
  Skills,
  WorkExperience,
  EducationSection,
  BrandIconGallery,
} from "./components";
import { introductionData } from "./constants";
import { contactMethods } from "./constants/contactMethods";

import classes from "./App.styles.module.scss";

const headerLinks = [
  { text: "Home", href: "#home" },
  { text: "Skills", href: "#skills" },
  { text: "Experience", href: "#experience" },
  { text: "Education", href: "#education" },
  { text: "Icons", href: "#icons" },
  { text: "Contacts", href: "#contacts" },
];

export const App = () => {
  return (
    <>
      <Header links={headerLinks} />

      <main className={classes.container}>
        <div className={classes.content}>
          <Introduction
            className={classes.introduction}
            title={introductionData.title}
            text={introductionData.text}
          />

          <Skills />

          <WorkExperience />

          <EducationSection />

          <div id="icons">
            <BrandIconGallery />
          </div>

          <ContactMe
            title="Want to connect?"
            text="Feel free to reach out! I'm always open to exciting opportunities and new connections."
            contactMethods={contactMethods}
          />
        </div>
      </main>

      <Footer />
    </>
  );
};
