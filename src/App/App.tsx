import { Introduction } from "~/Introduction";
import { Header } from "~/Layout";
import { ContactMe } from "~/Contacts";

import { Skills, WorkExperience, EducationSection } from "./components";
import { introductionData } from "./constants";
import { contactMethods } from "./constants/contactMethods";

import classes from "./App.styles.module.scss";

export const App = () => {
  return (
    <div className={classes.content}>
      <Header />

      <Introduction
        title={introductionData.title}
        text={introductionData.text}
      />

      <Skills />

      <WorkExperience />

      <EducationSection />

      <ContactMe
        title="Want to connect?"
        text="Feel free to reach out! I'm always open to exciting opportunities and new connections."
        contactMethods={contactMethods}
      />
    </div>
  );
};
