import type { FC } from "react";

import { AnimatedEducation } from "~/Education";
import { SectionHeader } from "~/Layout";

import { PolytechLogoSVG } from "../assets";

interface EducationSectionProps {
  id?: string;
}

export const EducationSection: FC<EducationSectionProps> = ({ id }) => {
  return (
    <>
      <SectionHeader id={id} title="Education" />

      <AnimatedEducation
        emblem={PolytechLogoSVG}
        universityTitle="Saint Petersburg State Polytechnic University"
        degree="Master's degree, Informatics & Computer Science"
        dates="SEP.2012 - SEP.2014"
      />

      <AnimatedEducation
        emblem={PolytechLogoSVG}
        universityTitle="Saint Petersburg State Polytechnic University"
        degree="BSc, Informatics & Computer Science"
        dates="SEP.2008 - SEP.2012"
      />
    </>
  );
};
