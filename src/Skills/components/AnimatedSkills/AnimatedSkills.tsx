import { useEffect, useRef, useState, type FC } from "react";
import classNames from "classnames";

import { Skills } from "../Skills";

import type { AnimatedSkillsProps } from "./AnimatedSkills.types";

import classes from "./AnimatedSkills.styles.module.scss";

export const AnimatedSkills: FC<AnimatedSkillsProps> = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once visible, we don't need to observe anymore
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the component is visible
        rootMargin: "0px 0px -50px 0px", // Trigger slightly before the element is fully in view
      },
    );

    const skillsElement = skillsRef.current;

    if (skillsElement) {
      observer.observe(skillsElement);
    }

    return () => {
      if (skillsElement) {
        observer.unobserve(skillsElement);
      }
    };
  }, []);

  const skillsClasses = {
    root: classNames(
      classes.skills,
      props.direction === "left-right" ? classes.leftRight : classes.rightLeft,
      isVisible && classes.visible,
      props.classes?.root,
    ),
    right: classNames(
      classes.textSection,
      isVisible && classes.textVisible,
      props.classes?.right,
    ),
    left: classNames(
      classes.imageSection,
      isVisible && classes.imageVisible,
      props.classes?.left,
    ),
  };

  return <Skills {...props} classes={skillsClasses} ref={skillsRef} />;
};
