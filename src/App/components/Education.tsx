import { Education } from "~/Education";
import { SectionHeader } from "~/Layout";

import { PolytechLogoSVG } from "../assets";

export const EducationSection = () => {
  return (
    <>
      <SectionHeader title="Education" />

      <Education
        emblem={PolytechLogoSVG}
        universityTitle="Saint Petersburg State Polytechnic University"
        degree="Master's degree, Informatics & Computer Science"
        dates="SEP.2012 - SEP.2014"
      />

      <Education
        emblem={PolytechLogoSVG}
        universityTitle="Saint Petersburg State Polytechnic University"
        degree="BSc, Informatics & Computer Science"
        dates="SEP.2008 - SEP.2012"
      />
    </>
  );
};
